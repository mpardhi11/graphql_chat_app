import gql from "graphql-tag";

// The GraphQL schema
const typeDefs = gql`
  type User {
    userName: String!
    email: String
  }

  type Query {
    hello: String
    getUser: [User]!
  }
`;

export default typeDefs;
