import React from 'react'
import PropTypes from 'prop-types'
import ButtonReply from './ButtonReply'
import ButtonDelete from './ButtonDelete'
import ButtonEdit from './ButtonEdit'
import You from './icons/You'

const CommentHeading = ({imagePath, username, creationDate, activeuser}) => {
    

  return (
    <div className='comment-heading'>
      <div className='comment-heading-body'>
        <img src={imagePath} alt="user" />
        <span className='username'>{username}</span>
        {activeuser && <You />}
        <span className='creation-date'>{creationDate}</span>
      </div>
      
      <div className='comment-heading-buttons'>
        {activeuser ? <ButtonDelete /> : <ButtonReply />} 
        {activeuser && <ButtonEdit /> }
      </div>
      
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
