import PropTypes from 'prop-types'

const CommentBody = ({text}) => {
  return (
    <div className='comment-body'>
      <p>{text}</p>
    </div>
  )
}

CommentBody.propTypes = {

}

export default CommentBody
