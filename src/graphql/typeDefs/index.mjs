import gql from "graphql-tag";

// The GraphQL schema
const typeDefs = gql`
  scalar JSONB
  scalar Date
  scalar Upload
  type User {
    userName: String!
    email: String
  }

  input CreateUserInput {
    userName: String!
    email: String!
    password: String!
    conformPassword: String!
  }

  type Query {
    hello: String
    getUser: [User]!
  }

  type Mutation {
    register(data: CreateUserInput): User
  }
`;

export default typeDefs;
