import { gql } from "@apollo/client";

export const GET_ADS = gql`
  query Query {
    mentoring {
      _id
      creator {
        _id
        firstName
        lastName
        image
        username
      }
      field
      location
      description
      date
      #not populated yet!!!:
      starred {
        _id
      }
      techKnowHow
      level
      availability
      timeslots
      offer
    }
    shadowing {
      _id
      creator {
        _id
        firstName
        lastName
        image
        username
      }
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
      length
      offer
    }
    coworking {
      _id
      creator {
        _id
        firstName
        lastName
        image
        username
      }
      field
      location
      description
      date
      starred {
        _id
      }
      time
      frequency
    }
  }
`;
