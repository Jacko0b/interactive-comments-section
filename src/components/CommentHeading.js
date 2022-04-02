import React from 'react'
import PropTypes from 'prop-types'
import ButtonReply from './ButtonReply'
import ButtonDelete from './ButtonDelete'
import ButtonEdit from './ButtonEdit'

const CommentHeading = ({imagePath, username, creationDate, activeuser}) => {
    

  return (
    <div className='comment-heading'>
      <img src={imagePath} alt="user" />
      <span className='username'>{username}</span>
      {/* {activeuser? } */}
      <span className='creation-date'>{creationDate}</span>
      {/* {activeuser? <ButtonDelete /> <ButtonEdit /> : <ButtonReply />} */}
    </div>
  )
}

CommentHeading.propTypes = {
    imagePath:PropTypes.string.isRequired,
    username: PropTypes.string.isRequired,
    creationDate: PropTypes.string.isRequired,
    activeuser: PropTypes.bool.isRequired
}

export default CommentHeading
