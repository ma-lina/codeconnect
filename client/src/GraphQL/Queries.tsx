import { gql } from "@apollo/client";

export const GET_EVERYTHING = gql`
  query Query {
    mentoring {
      _id
      creator
      field
      location
      description
      date
      starred {
        _id
      }
      techKnowHow
      level
      availability
      timeslots
      offer
    }
  }
`;
