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

export const GET_EVENT_BY_ID = gql(`
query getEventById( $id: Int! ){
  getEventById (id: $id){
    id
    title
    description
    date
    endTime
    startTime
  }
}
`);
