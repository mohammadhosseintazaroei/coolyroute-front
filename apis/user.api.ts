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
    userSkills {                          
    id
    skill { 
    name}
    }
    }
  }
`);

export const COMPLETE_FURTHER_INFORMATION = gql(`
 mutation completeFurtherInformation(
  $data: CompleteFurtherInformationDto!,
) {
  completeFurtherInformation(
    data: $data
  )
}
`);
