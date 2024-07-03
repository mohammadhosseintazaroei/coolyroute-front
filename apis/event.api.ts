import { gql } from "@/__generated__";

export const GET_ALL_EVENTS = gql(`
query getAllEvents{
  getAllEvents {
    id
    title
    description
  }
}
`);
