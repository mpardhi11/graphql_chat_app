import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";
import resolvers from "./graphql/resolvers/index.mjs";
import typeDefs from "./graphql/typeDefs/index.mjs";
// A map of functions which return data for the schema.
import { sequelizeInstance } from "./db/config.mjs";
const server = new ApolloServer({
  typeDefs,
  resolvers,
  // sequelizeInstance,
});

const { url } = await startStandaloneServer(server);
console.log(`-------------------------------------------------------------`);
console.log(`🚀 Server ready at ${url}`);
console.log(`-------------------------------------------------------------`);
