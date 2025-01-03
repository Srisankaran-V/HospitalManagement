// import React from 'react'
import PropTypes from 'prop-types';
import ClipLoader from "react-spinners/ClipLoader";


const override= {
  display: "block",
  margin: "100px auto",
  
};
const Spinner = ({loading}) => {
  return (
    <ClipLoader
        color= "#4338ca"
        loading={loading}
        cssOverride={override}
        size={150}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
  )
}

Spinner.propTypes = {
    loading: PropTypes.bool,
}

export default Spinner