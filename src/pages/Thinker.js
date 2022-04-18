import React from 'react';
import { useQuery } from '@apollo/client';
import { GET_THINKER_DETAIL } from '../queries/queries';
import { Link, useParams } from 'react-router-dom';

import '../pages/thinker.css';

export const Thinker = () => {
  let { id } = useParams();
  const { data, loading, error } = useQuery(GET_THINKER_DETAIL, {
    variables: { thinker_id: id }
  });

  console.log(data);

  if (loading) return 'Loading...';
  if (error) return `Error! ${error.message}`;

  // TODO: Fix back button

  return (
    <>
      <div>
        <Link to="/encyclopedia">
          <p>Back</p>
        </Link>
      </div>
      <div>
        <p className="landing__p">{data.thinker_person_by_pk.name}</p>
      </div>
    </>
  );
};
