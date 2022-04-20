import React from 'react';
import { useQuery } from '@apollo/client';
import { GET_THINKER_DETAIL } from '../queries/queries';
import { useParams, useNavigate } from 'react-router-dom';

import '../pages/thinker.css';

export const Thinker = () => {
  let { id } = useParams();
  const { data, loading, error } = useQuery(GET_THINKER_DETAIL, {
    variables: { thinker_id: id }
  });

  const navigate = useNavigate();

  if (loading) return 'Loading...';
  if (error) return `Error! ${error.message}`;

  // TODO: Fix back button

  return (
    <>
      <div>
        <button onClick={() => navigate(-1)}>Go back</button>
      </div>
      <div>
        <p className="landing__p">{data.thinker_person_by_pk.name}</p>
      </div>
    </>
  );
};
