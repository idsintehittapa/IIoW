import React, { useState } from 'react';
import { useQuery } from '@apollo/client';
import { GET_THINKER } from '../queries/queries';

import '../pages/encyclopedia.css';

export const EncyclopediaFiltering = () => {
  const { data, loading, error } = useQuery(GET_THINKER);
  const [filteredData, setFilteredData] = useState(data);

  if (loading) return 'Loading...';
  if (error) return `Error! ${error.message}`;

  const filter = () => {
    const fd = data.thinker_person.filter((thinker) => {
      let found = false;
      thinker.person_categories.map((category) => {
        found = found || category.category.name === 'philosopher';
        return found;
      });
      return found;
    });
    setFilteredData(fd);
  };

  const filterBF = () => {
    const fd = data.thinker_person.filter((thinker) => {
      let found = false;
      thinker.person_fields.map((field) => {
        found = found || field.field.name === 'black feminism';
        return found;
      });
      return found;
    });
    setFilteredData(fd);
  };

  const filterLove = () => {
    const fd = data.thinker_person.filter((thinker) => {
      let found = false;
      thinker.person_fields.map((field) => {
        found = found || field.field.name === 'love';
        return found;
      });
      return found;
    });
    setFilteredData(fd);
  };

  const filterMother = () => {
    const fd = data.thinker_person.filter((thinker) => {
      let found = false;
      thinker.person_fields.map((field) => {
        found = found || field.field.name === 'motherhood';
        return found;
      });
      return found;
    });
    setFilteredData(fd);
  };

  return (
    <>
      <div className="encyclopedia__searchbar">
        <div className="encyclopedia__searchbar-filter">
          <button className="encyclopedia__button" onClick={() => filter()}>
            philosopher
          </button>
          <button className="encyclopedia__button" onClick={() => filterBF()}>
            black feminism{' '}
          </button>
          <button
            className="encyclopedia__button"
            onClick={() => filterMother()}
          >
            motherhood
          </button>
          <button className="encyclopedia__button" onClick={() => filterLove()}>
            love
          </button>
        </div>
        <div className="encyclopedia__searchbar-search">
          <p>SEARCH</p>
        </div>
      </div>
      <div className="encyclopedia__query">
        {filteredData?.map((thinker) => (
          <div key={thinker.id}>
            <p>{thinker.name}</p>
          </div>
        ))}
      </div>
    </>
  );
};
