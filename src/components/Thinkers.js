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

  const filterAuthor = () => {
    const fd = data.thinker_person.filter((thinker) => {
      let found = false;
      thinker.person_categories.map((category) => {
        found = found || category.category.name === 'author';
        return found;
      });
      return found;
    });
    setFilteredData(fd);
  };

  const filterComic = () => {
    const fd = data.thinker_person.filter((thinker) => {
      let found = false;
      thinker.person_categories.map((category) => {
        found = found || category.category.name === 'comic artist';
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
          <button
            className="encyclopedia__button"
            onClick={() => filterAuthor()}
          >
            author
          </button>
          <button
            className="encyclopedia__button"
            onClick={() => filterComic()}
          >
            comic artist
          </button>
          <button className="encyclopedia__button" onClick={() => filterBF()}>
            black feminism
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
        {filteredData?.map((thinker) =>
          //TODO: this is not working, bug if page refreshed twice due to local storage
          filteredData === undefined ? (
            <p className="thinker__name">'hej hej'</p>
          ) : (
            <Link to={`${thinker.id}`} key={thinker.id}>
              <div className="thinker__image">
                {thinker.person_imgs.map((image) => (
                  <img
                    key={image.img_id}
                    src={`https://qfhbhjfjvqhuxhigjyvz.nhost.run/v1/storage/files/${image.img_id}`}
                    alt={image.alt_name}
                  />
                ))}
                <p className="thinker__name">{thinker.name}</p>
              </div>
            </Link>
          )
        )}
      </div>
    </>
  );
};
