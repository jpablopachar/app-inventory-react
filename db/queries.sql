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

create or replace function insert_products(_description text, _brand_id int, _stock numeric, _min_stock numeric, _bar_code text, _internal_code text, _sale_price numeric, _purchase_price numeric, _category_id int, _company_id int)
returns void
language plpgsql
as $$
begin
  perform 1 from products
  where description = _description
  and "brandId" = _brand_id
  and stock = _stock
  and "minStock" = _min_stock
  and "barCode" = _bar_code
  and "internalCode" = _internal_code
  and "salePrice" = _sale_price
  and "purchasePrice" = _purchase_price
  and "categoryId" = _category_id
  and "companyId" = _company_id;
  if found then
    raise exception 'El producto ya existe para esta compañia';
  else
    insert into products(description, "brandId", stock, "minStock", "barCode", "internalCode",
    "salePrice", "purchasePrice", "categoryId", "companyId")
    values(_description, _brand_id, _stock, _min_stock, _bar_code, _internal_code,
    _sale_price, _purchase_price, _category_id, _company_id);
  end if;
end;
$$;

create or replace function show_products(_company_id int)
returns table(
  id int,
  description text,
  "brandId" int,
  stock numeric,
  "minStock" numeric,
  "barCode" text,
  "internalCode" text,
  "salePrice" numeric,
  "purchasePrice" numeric,
  "categoryId" int,
  "companyId" int,
  brand text,
  category text,
  color text
)
language sql
as $$
select p.id, p.description, p."brandId", p.stock, p."minStock", p."barCode", p."internalCode", p."salePrice", p."purchasePrice", p."categoryId", p."companyId", b.description as brand, c.description as category, c.color from products p inner join categories c on c.id = p."categoryId" inner join brand b on b.id = p."brandId"
where p."companyId" = _company_id;
$$;

create or replace function search_products(_company_id int, _searcher text)
returns table(
  id int,
  description text,
  "brandId" int,
  stock numeric,
  "minStock" numeric,
  "barCode" text,
  "internalCode" text,
  "salePrice" numeric,
  "purchasePrice" numeric,
  "categoryId" int,
  "companyId" int,
  brand text,
  category text,
  color text
)
language sql
as $$
select p.id, p.description, p."brandId", p.stock, p."minStock", p."barCode", p."internalCode", p."salePrice", p."purchasePrice", p."categoryId", p."companyId", b.description as brand, c.description as category, c.color from products p inner join categories c on c.id = p."categoryId" inner join brand b on b.id = p."brandId"
where p.description LIKE '%' || _searcher || '%' and p."companyId" = _company_id;
$$;

create or replace function show_personal(_company_id int)
returns table(
  id int,
  fullname text,
  "userType" text,
  state text,
  email text,
  "numDoc" text,
  phone text,
  address text,
  "docType" text
)
language sql
as $$
select u.id, u.fullname, u."userType", u.state, u.email, u."numDoc", u.phone, u.address, u."docType" from "assignCompany" ac inner join users u on u.id = ac."userId" inner join company c on c.id = ac."companyId"
where ac."companyId" = _company_id;
$$;

create or replace function show_kardex_company(_company_id int)
returns table(
  id int,
  description text,
  day text,
  cant float,
  type text,
  detail text,
  fullname text,
  stock numeric
)
language sql
as $$
select k.id, p.description, k.day, k.cant, k.type, k.detail, u.fullname, p.stock from kardex k inner join company c on c.id = k."companyId" inner join users u on u.id = k."userId" inner join products p on p.id = k."productId"
where k."companyId" = _company_id;
$$;

create or replace function search_kardex(_company_id int, _searcher text)
returns table(
  id int,
  description text,
  day date,
  cant float,
  type text,
  detail text,
  fullname text,
  stock numeric
)
language sql
as $$
select k.id, p.description, k.day, k.cant, k.type, k.detail, u.fullname, p.stock from kardex k inner join company c on c.id = k."companyId" inner join users u on u.id = k."userId" inner join products p on p.id = k."productId"
where p.description LIKE '%' || _searcher || '%' and k."companyId" = _company_id;
$$;

create or replace function modify_stock()
returns trigger
language plpgsql
as $$
declare "stockProducts" numeric;
begin
  if new.type = 'entrada' then
    update products
    set stock = stock + new.cant
    where id = new."productId";
  else
    select into "stockProducts" stock
    from products
    where id = new."productId";
    if "stockProducts" > new.cant then
      update products
      set stock = stock - new.cant
      where id = new."productId";
    else
      raise exception 'No hay suficiente stock';
    end if;
  end if;
  return new;
end;
$$;

create or replace trigger modify_stock_trigger
after insert on kardex
for each row
execute function modify_stock();