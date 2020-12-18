Example of auto generating graphql schema using nexus prisma schema plugin.

How to generate the schema from SDL,

```sh
# generate prisma client code
yarn prisma generate
yarn prisma migrate save --experimental
yarn prisma migrate up --experimental

# run the custom generator workaround
node src/generate
```

This will generate a file in the src/generated folder.

Run the server,

```sh
node src/index
```


```js
/**
 * @param {Object} context
 * @param {PrismaClient} context.prisma
 */
```

## issue-01

- Relation queries
- Relations
- https://stackoverflow.com/questions/48759485/what-do-private-public-class-and-param-mean-in-js

GraphQL doesn’t actually interact with your data, but, rather, describes the data and lays out means for interacting with them.

Manipulating data, like deletion, still depends on your data model. For example, if you have a SQL database, then you would create a GraphQL mutation to delete data by ID, and the resolver would be where you’d put the logic to make a SQL command “Delete where id=123”.

The interesting part with GraphQL is deciding how to translate a client’s interactions to that final SQL command. Maybe a user has a list of items and checks off several to be deleted. You may expect a GraphQL mutation is called with a list of those items’ IDs passed in as an argument. Then you would take those IDs and, in the mutation’s resolver, call your data model’s deletion logic using those IDs.

## Tips

- extract prisma from context and make it one event 
- Deletion behaviors for relations are not yet supported in the Prisma schema

## issue-02

- https://stackoverflow.com/questions/58322661/how-can-i-delete-items-with-relations
- https://github.com/prisma/prisma-client-js/issues/279