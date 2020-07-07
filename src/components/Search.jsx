import React, { useState } from 'react';
import PropTypes from 'prop-types';

const Search = ({ setInputMovie }) => {
  const [search, setSearch] = useState('');
  const handleChange = (event) => {
    setSearch(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setInputMovie(search);
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="form__group field">
          <input
            className="form__field"
            required
            name="search"
            type="text"
            onChange={handleChange}
          />
          <label htmlFor="search" className="form__label">
            Find a Movie...
          </label>
        </div>
      </form>
    </div>
  );
};
export default Search;
// Search.propTypes = {
//   setInputMovie: PropTypes.objectOf(PropTypes.object).isRequired,
// };
