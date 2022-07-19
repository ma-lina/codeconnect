import { gql } from "apollo-server";
import { makeExecutableSchema } from "graphql-tools";

const Query = gql`
  type Query {
    _empty: String
  }
  type Mutation {
    _empty: String
  }
  type Subscription {
    _empty: String
  }
`;

const typeDefs = [Query];
export const schema = makeExecutableSchema({ typeDefs });
