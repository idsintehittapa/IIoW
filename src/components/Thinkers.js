import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import { GET_THINKERS } from '../queries/queries';

import '../pages/encyclopedia.css';

export const Thinkers = () => {
  const { data, loading, error } = useQuery(GET_THINKERS);

  const [filteredData, setFilteredData] = useState(() => {
    // getting stored value
    const saved = localStorage.getItem('filteredThinker');
    const initialValue = JSON.parse(saved);
    return initialValue || data;
  });

  useEffect(() => {
    // storing input filtering
    localStorage.setItem('filteredThinker', JSON.stringify(filteredData));
  }, [filteredData]);

  if (loading) return <div className="encyclopedia__query">Loading...</div>;
  if (error)
    return <div className="encyclopedia__query">`Error! ${error.message}`</div>;

  const filterPhilosopher = () => {
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
          <button
            className="encyclopedia__button"
            onClick={() => filterPhilosopher()}
          >
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
          <Link to={`${thinker.id}`} key={thinker.id}>
            <div>
              <p className="thinker__name">{thinker.name}</p>
            </div>
          </Link>
        ))}
      </div>
    </>
  );
};
