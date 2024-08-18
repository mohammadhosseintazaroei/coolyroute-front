import { gql } from "@/__generated__";

export const CHECK_AUTH = gql(`
  query checkAuth {
    checkAuth
  }
`);

export const LOGIN = gql(`
  query login( $phoneNumber: String! ) {
    login(user: { phoneNumber: $phoneNumber }) {
      status
      message
      remainingSeconds
    }
  }
`);

// TODO : update this with api later or remove it :)
// export const RENEW_OTP = gql(`
//   query renew( $phoneNumber: String! ) {
//     renew(user: { phoneNumber: $phoneNumber }) {
//       status
//       message
//     }
//   }
// `);

export const VERIFICATION_CODE = gql(`
  query verifyOtp( $phoneNumber: String!, $code: String!) {
    verifyOtp(user: { phoneNumber: $phoneNumber, code: $code }) {

      status
      message
      access_token
      user { 
      id 
      firstName
      lastName
      phoneNumber
      email
      }
    }
  }
`);

