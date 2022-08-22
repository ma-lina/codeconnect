import { gql } from "apollo-server-express";
//import { ObjectID } from "mongodb";
//import { DateTypeDefinition } from "graphql-scalars";
//import {  } from '../../@types';

export default gql`
  scalar Date

  type User {
    firstName: String!
    lastName: String!
    isLoggedin: Boolean!
    username: String!
    image: String!
    _id: String!
    isAdmin: Boolean!
    starredMentorship: [ID!]
    starredCoworking: [ID!]
    starredShadowing: [ID!]
  }

  type Mentoring {
    creator: ID!
    field: [String!]!
    location: String!
    description: String!
    date: Date!
    starred: [User]
    techKnowHow: [String!]!
    level: String!
    availability: [String!]!
    timeslots: [String!]!
    offer: Boolean!
  }

  type Shadowing {
    creator: ID!
    field: [String!]!
    location: String!
    description: String!
    date: Date!
    starred: [User]
    techKnowHow: [String!]!
    level: String!
    availability: [String!]!
    timeslots: [String!]!
    offer: Boolean!
    length: Int!
  }

  type Coworking {
    creator: ID!
    field: [String!]!
    location: String!
    description: String!
    date: Date!
    starred: [User]
    time: Int!
    frequency: [String!]!
  }

  extend type Query {
    user: [User]
    mentoring: [Mentoring]
    shadowing: [Shadowing]
    coworking: [Coworking]
  }
`;
