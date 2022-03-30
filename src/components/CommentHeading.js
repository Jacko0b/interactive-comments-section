import React from 'react'
import PropTypes from 'prop-types'

const CommentHeading = ({image, username, creationDate}) => {
    return (
    <div className='comment-heading'>
      {/* 
      TO-DO
      PROBLEMS WITH UPLOADING IMAGE TO COMMENT-HEADING 
      <img src={image} alt="user" /> */}
      <span>{username}</span>
      <span>{creationDate}</span>
    </div>
  )
}

CommentHeading.propTypes = {
    image:PropTypes.string.isRequired,
    username: PropTypes.string.isRequired,
    creationDate: PropTypes.string.isRequired
}

export default CommentHeading
