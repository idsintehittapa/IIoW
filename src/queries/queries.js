import { gql } from '@apollo/client';

export const GET_THINKERS = gql`
  query Thinker {
    thinker_person {
      name
      id
      person_categories {
        category {
          name
          id
        }
      }
      person_fields {
        field {
          name
          id
        }
      }
    }
  }
`;
