import React from 'react'
import PropTypes from 'prop-types'

const Submit = ({text}) => {
  return (
      <div className='button button-submit'>
        <button >
            {text}
        </button>
    </div>
    
  )
}

Submit.propTypes = {
    text: PropTypes.string.isRequired
}

export default Submit
