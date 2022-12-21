import React from "react";
import PropTypes from 'prop-types';
import css from "./Filter.module.css"

const Filter = ({ onChange }) => {
  const handleValue = event => {
    onChange(event.currentTarget.value)
  }

   return <label className={css.label}>Find contact by name 
      <input
        type="text"
        onChange={handleValue}
      />
    </label>
}

export default Filter

Filter.prototypes = {
  onChange: PropTypes.func
}
