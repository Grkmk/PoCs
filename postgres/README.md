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

create table
```
CREATE TABLE table_name (
  Column name + data type + constraints if any,
  ...
)
```

insert doc
`# INSERT INTO person (field1, field2,..)`
`# VALUES (val1, val2,..);`

###### queries
get values
`# SELECT [selector] FROM [table];`
order
`# ...  ORDER BY [selector] [asc || desc];`
get distinct values
`# SELECT DISTINCT ... ;`
where
`# ... WHERE [clause];`
where + and + or + in
`# ... WHERE [clause1] AND [clause2] OR [clause3] IN ([array]);`
where + between
`# ... WHERE BETWEEN [val1] AND [val2];`
where + like (ILIKE for case insensitive)
`# ... WHERE [selector] LIKE [pattern];`
limit
`# ... LIMIT [int];`
`# ... LIMIT [int] OFFSET [int];`
`# ... OFFSET [int] FETCH [specs, i.e. FIRST 5 ROW ONLY];`
group
`# SELECT [selector], COUNT(*) GROUP BY [selector];`
group + having
`# ... HAVING [clause] GROUP BY [selector];`
common aggregate functions
`COUNT(), MAX(), MIN(), AVG(), ROUND(), SUM()`
operators
```
= equals
>= gte
<= lte
<> not equal
```
