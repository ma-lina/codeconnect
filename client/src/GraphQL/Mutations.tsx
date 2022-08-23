import { gql } from "@apollo/client";

export const ADD_AD = gql`
  mutation Mutation($addDatingTextText: newDTI!) {
    addMentoring(text: $addDatingTextText) {
      creator
      field
      location
      description
      date
      techKnowHow
      level
      availability
      timeslots
      offer
    }
  }
`;

/* export const UPDATE_AD = gql`
  mutation UpdateAdMutation($updateUserProfileUser: updateUserInput!) {
    updateUserProfile(user: $updateUserProfileUser) {
   
    }
  }
`; */
