import { gql } from '@apollo/client';

export const GET_THINKER = gql`
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

// export const GET_CATEGORY = gql`
//   query Category($selectedCategory: String) {
//     thinker_person(
//       where: {
//         person_categories: { category: { name: { _eq: $selectedCategory } } }
//       }
//     ) {
//       name
//       id
//       person_categories {
//         category {
//           name
//           id
//         }
//       }
//     }
//   }
// `;

// const GET_DOGS = gql`
//   query GetDogs {
//     dogs {
//       id
//       breed
//     }
//   }
// `;

// const GET_DOG_PHOTO = gql`
//   query Dog($breed: String!) {
//     dog(breed: $breed) {
//       id
//       displayImage
//     }
//   }
// `;
