import { gql } from "@apollo/client";

export const ADD_AD = gql`
  mutation Mutation($addDatingTextText: newDTI!) {
    addDatingText(text: $addDatingTextText) {
      text
      postDate
      private
    }
  }
`;

/* export const UPDATE_AD = gql`
  mutation UpdateAdMutation($updateUserProfileUser: updateUserInput!) {
    updateUserProfile(user: $updateUserProfileUser) {
   
    }
  }
`; */
