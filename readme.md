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

Open http://localhost:4000/ and put following query to get started,

```graphql
query {
  users { id }
}
```