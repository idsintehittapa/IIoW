import React from 'react';
import { gql, useQuery } from '@apollo/client';
// import { useAuthenticated } from '@nhost/react';

import '../pages/encyclopedia.css';

// const GET_BF = gql`
//   thinker_person {
//     country
//     name
//     person_fields {
//       field {
//       name
//     }
//   }
//   person_categories {
//     category {
//       name
//     }
//   }
// }
// }
// `;

const GET_THINKER = gql`
  query Thinker {
    thinker_person {
      country
      name
      id
    }
  }
`;

export const EncyclopediaFiltering = (category) => {
  // const isAuthenticated = useAuthenticated();
  const { data, loading, error, refetch } = useQuery(GET_THINKER, {
    variables: { category }
  });

  if (loading) return 'Loading...';
  if (error) return `Error! ${error.message}`;

  return (
    <>
      <div className="encyclopedia__searchbar">
        <div className="encyclopedia__searchbar-filter">
          <button className="encyclopedia__button">black feminism</button>
          <button className="encyclopedia__button">love </button>
          <button className="encyclopedia__button">motherhood</button>
        </div>
        <div className="encyclopedia__searchbar-search">
          <p>SEARCH</p>
        </div>
      </div>
      <div className="encyclopedia__query">
        {data?.thinker_person.map((thinker) => (
          <div key={thinker.id}>
            <p>{thinker.name}</p>
          </div>
        ))}
      </div>
    </>
  );
};
