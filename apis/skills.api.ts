import { gql } from "@/__generated__";

export const GET_SKILLS_BRIEF = gql(`
  query getSkillsBrief {
    getSkillsBrief {
   id
    name
    }
  }
`);
