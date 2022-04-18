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

export const GET_THINKER_DETAIL = gql`
  query getThinkerId($thinker_id: uuid!) {
    thinker_person_by_pk(id: $thinker_id) {
      id
      name
      country
    }
  }
`;
