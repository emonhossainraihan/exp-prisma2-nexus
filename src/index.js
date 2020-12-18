const { GraphQLServer } = require('graphql-yoga');
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const Query = require('./resolver/Query');
const Mutation = require('./resolver/Mutation');
const Product = require('./resolver/Product');
const Variant = require('./resolver/Variant');

const resolvers = {
  Query,
  Mutation,
  Product,
  Variant
};

const server = new GraphQLServer({
  typeDefs: __dirname + '/schema.graphql',
  resolvers
});
server.start(() => console.log('Server is running on localhost:4000'));
