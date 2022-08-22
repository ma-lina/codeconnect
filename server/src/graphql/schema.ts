import { gql } from "apollo-server";
import { makeExecutableSchema } from "graphql-tools";
import Mentoring from "../graphql/pinboard/typeDefs";
import Shadowing from "../graphql/pinboard/typeDefs";
import Coworking from "../graphql/pinboard/typeDefs";
//import Query from "../graphql/pinboard/typeDefs"; //TO FIX ERROR
import { resolver as pinboardResolvers } from "./pinboard/resolver";

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

const resolvers = pinboardResolvers;
const typeDefs = [Mentoring, Shadowing, Coworking, Query];
export const schema = makeExecutableSchema({ typeDefs, resolvers });
