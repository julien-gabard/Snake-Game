// == Import npm
import React from 'react';
import PropTypes from 'prop-types';

// == Import SCSS
import './registration.scss';

// == Import logo
import { Clipboard } from 'react-feather';

// == Component
const Registration = ({ handleChange, pseudoSubmit, pseudo }) => {
  const handleSubmit = (evt) => {
    evt.preventDefault();
    if (pseudo !== '') {
      pseudoSubmit();
    }
  };

  const changeField = (evt) => {
    handleChange(evt.target.value);
  };

  return (
    <form className="registration">
      <Clipboard size="30" className="registration__logo" />
      <label htmlFor="pseudo" className="registration__label">
        <span className="registration__label__span">Pseudo</span>
        <input
          type="text"
          name="pseudo"
          className="registration__input"
          title="Rentrer un pseudo"
          placeholder="Exemple : toto"
          onChange={changeField}
        />
      </label>
      <button
        type="button"
        className="registration__button"
        onClick={handleSubmit}
      >
        Let's go
      </button>
    </form>
  );
};

// == PropTypes
Registration.propTypes = {
  handleChange: PropTypes.func.isRequired,
  pseudoSubmit: PropTypes.func.isRequired,
  pseudo: PropTypes.string.isRequired,
};

// == Export
export default Registration;
