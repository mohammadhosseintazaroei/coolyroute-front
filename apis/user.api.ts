import { gql } from "@/__generated__";

export const USER_PROFILE = gql(`
  query userProfile {
    userProfile {
      id
      firstName
        lastName
    phoneNumber
    email
    isComplete
    }
  }
`);
