### postgresql cheat sheet

with brew
`$ brew services start postgresql`
`$ brew services stop postgresql`

init database
`$ initdb [directory]`
start pg
`$ pg_ctl -D [directory] -l logfile start`
sh into pg
`$ psql [dbname] [user]`
stop pg
`$ pg_ctl -D [directory] stop -s -m fast`

sh into db from terminal
`$ psql -h [host] -p [port: default 5432] -U [role: default gk] [dbname]`
sh into db from pg shell
`$ \c [dbname]`

###### table ops
create table
```
CREATE TABLE table_name (
  Column name + data type + constraints if any,
  ...
)
```
delete table
`# drop table [tablename];`

alter table
`# ALTER TABLE [tablename] [alteration];`
add constraint
`# ALTER TABLE [tablename] ADD [label - opt] [constraint] ([column]);`
delete constraint
`# ALTER TABLE [tablename] DROP CONSTRAINT [label];`
check constraint -> add conditional constraints
`# ALTER TABLE [tablename] ADD CONSTRAINT [label - opt] CHECK [condition];`

insert doc
`# INSERT INTO [tablename] (field1, field2,..)`
`# VALUES (val1, val2,..);`
delete doc
`# DELETE FROM [tablename] WHERE [condition];`
update doc
`# UPDATE [tablename] SET [column] = [value] WHERE [condition];`
error handling
`# ... ON CONFLICT ([column]) [action - i.e. DO NOTHING];`

###### queries
get values
`# SELECT [column] FROM [table];`
order
`# ...  ORDER BY [column] [asc || desc];`
get distinct values
`# SELECT DISTINCT ... ;`
where
`# ... WHERE [condition];`
where + and + or + in
`# ... WHERE [condition1] AND [condition2] OR [condition3] IN ([array]);`
where + between
`# ... WHERE BETWEEN [val1] AND [val2];`
where + like (ILIKE for case insensitive)
`# ... WHERE [column] LIKE [pattern];`
limit
`# ... LIMIT [int];`
`# ... LIMIT [int] OFFSET [int];`
`# ... OFFSET [int] FETCH [specs, i.e. FIRST 5 ROW ONLY];`
group
`# SELECT [column], COUNT(*) GROUP BY [column];`
group + having
`# ... HAVING [condition] GROUP BY [column];`
common aggregate functions
`COUNT(), MAX(), MIN(), AVG(), ROUND(), SUM(), NOW()`
coalesce -> replace value
`COALESCE([column], [replacement])`
age -> return age
`AGE([start], [end])`
operators
```
= equals
>= gte
<= lte
<> not equal
```
alias
`# ... [column] AS [alias] ...;`
casting
`[value]::[castobject]`
