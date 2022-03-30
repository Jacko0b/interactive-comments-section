import React from 'react'
import PropTypes from 'prop-types'

const ButtonSubmit = ({text}) => {
  return (
      <div className='button button-submit'>
        <button >
            {text}
        </button>
    </div>
    
  )
}

ButtonSubmit.propTypes = {
    text: PropTypes.string.isRequired
}

export default ButtonSubmit
