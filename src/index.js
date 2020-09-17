const { GraphQLServer } = require('graphql-yoga');
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const resolvers = {
  Query: {
    /**
     * @param {Object} context
     * @param {PrismaClient} context.prisma
     */
    users: (_, {}, context) => {
      return context.prisma.user.findMany();
    },
    /**
     * @param {Object} context
     * @param {PrismaClient} context.prisma
     */
    user: (_, { id }, context) => {
      console.log(id);
      return context.prisma.user.findOne({ where: { id } });
    },
  },
};

const server = new GraphQLServer({
  typeDefs: __dirname + '/schema.graphql',
  resolvers,
  context: { prisma },
});
server.start(() => console.log('Server is running on localhost:4000'));
