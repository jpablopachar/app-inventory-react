create or replace function insertPermission()
returns trigger
language plpgsql
as $$
declare
  item record;
begin
  if new."userType"='admin' then
    insert into company(name, "currencySymbol", "userId")
    values('Generica', '$.', new.id);

    for item in select id from modules loop
      insert into permissions("userId", "moduleId")
      values(new.id, item.id);
    end loop;
  end if;

  return new;
end;
$$;

create or replace trigger permissionsTrigger
after insert on users
for each row
execute function insertPermission();

create or replace function insertByDefault()
returns trigger
language plpgsql
as $$
declare item record;
begin
  insert into brand(description, "companyId")
  values('Generica', new.id);
  insert into categories(description, "companyId", color)
  values('General', new.id, '#FF5722');
  insert into "assignCompany"("companyId", "userId")
  values (new.id, new."userId");
  return new;
end;
$$;

create or replace trigger byDefaultTrigger
after insert on company
for each row
execute function insertByDefault();

create or replace function countUsersByCompany(_companyId int)
returns int
language plpgsql
as $$
declare quantityUsers int;
begin
  select count(*) into quantityUsers
  from assignCompany
  where companyId = _companyId;
  return quantityUsers;
end;
$$;

countUsersByCompany(1);

create or replace function showCompaniesAssignments(_userId int)
returns jsonb
language plpgsql
as $$
declare
  result jsonb;
begin
  select jsonb_build_object(
    'companyId', c.id,
    'name', c.name,
    'currencySymbol', c."currencySymbol"
  )
  into result
  from assignCompany ac
  join company c on c.id = ac.companyId
  where ac.userId = _userId
  limit 1;
  return result;
end;
$$;

create or replace function insertBrand(_description text, _companyId int)
returns void
language plpgsql
as $$
begin
  perform 1 from brand
  where description = _description
  and "companyId" = _companyId;
  if found then
    raise exception 'La marca ya existe para esta compañia';
  else
    insert into brand(description, "companyId")
    values(_description, _companyId);
  end if;
end;
$$;

create or replace function insert_categories(_description text, _color text, _companyId int)
returns void
language plpgsql
as $$
begin
  perform 1 from categories
  where description = _description
  and color = _color
  and "companyId" = _companyId;
  if found then
    raise exception 'La categoría ya existe para esta compañia';
  else
    insert into categories(description, color, "companyId")
    values(_description, _color, _companyId);
  end if;
end;
$$;