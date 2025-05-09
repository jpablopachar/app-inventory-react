create or replace function insertPermission()
returns trigger
language plpgsql
as $$
declare item record;
begin
  if new.userType='admin' then
    insert into company(name, currencySymbol, userId)
    values('Generica', '$.', new.id);
  end if;
  
  for item in
    select id from modules
    loop
      if new.userType='admin' then
        insert into permissions(userId, moduleId)
        values(new.id, item.id);
      end if;
    end loop;
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
  insert into brand(description, companyId)
  values('Generica', new.id);
  insert into categories(description, companyId, color)
  values('General', new.id, '#FF5722');
  insert into assignCompany(companyId, userId)
  values (new.id, new.userId);
  return new;
end;
$$;

create or replace trigger byDefaultTrigger
after insert on company
for each row
execute function insertByDefault();