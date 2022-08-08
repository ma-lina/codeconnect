import { ObjectID } from "mongodb";
import { gql } from "apollo-server-express";
//import {  } from '../../@types';

export default gql`
scalar Date

type User {
  firstName: tring;
  lastName: string;
  isLoggedin: boolean;
  username?: string;
  image?: string;
  _id: string;
  isAdmin?: boolean;
  starredMentorship?: ;
  starredCoworking?: ;
  starredShadowing?: ;
}

timestamps?

type Mentoring {
  creator: ID!,
  field: [String!]!,
  location: String!,
  description: String!,
  date: Date!,
  starred: [User],
  techKnowHow: [String!]!,
  level: String!,
  availability: [String!]!,
  timeslots: [String!]!,
  offer: Boolean!,
};

type Shadowing {
creator: ID!, 
  field: [String!]!,
  location: String!,
  description: String!,
  date: Date!,
  starred: [User],
  techKnowHow: [String!]!,
  level: String!,
  availability: [String!]!,
  timeslots: [String!]!,
  offer: Boolean!,
  length: Int!,
};

type Coworking {
  creator: ID!,
  field: [String!]!,
  location: String!,
  description: String!,
  date: Date!,
  starred: [User],
  time: Int!,
  frequency: [String!]!,
}