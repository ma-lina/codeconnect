"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.schema = void 0;
const apollo_server_1 = require("apollo-server");
const graphql_tools_1 = require("graphql-tools");
const Query = (0, apollo_server_1.gql) `
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
exports.schema = (0, graphql_tools_1.makeExecutableSchema)({ typeDefs });
