import React from "react"
const Filter = ({ onChange }) => {
  const handleValue = event => {
    onChange(event.currentTarget.value)
  }

   return <label>Find contact by name 
      <input
        type="text"
        onChange={handleValue}
      />
    </label>
}

export default Filter
