import React from 'react';
import { useQuery } from '@apollo/client';
import { GET_THINKER_DETAIL } from '../queries/queries';
import { useParams, useNavigate } from 'react-router-dom';

import { CatAnimation } from '../Animations/CatAnimation';

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
      <div className="thinker__wrapper">
        <div className="thinker__button">
          <div className="wave">
            <button onClick={() => navigate(-1)}>Go back</button>
          </div>
        </div>
        <div>
          <p className="landing__p">{data.thinker_person_by_pk.name}</p>
        </div>
        <CatAnimation />
      </div>
    </>
  );
};
