import PropTypes from 'prop-types'
import ButtonReply from './ButtonReply'
import Likes from './Likes'

const CommentFooter = ({score}) => {
  return (
    <div className='comment-footer'>
      <Likes score={score}/>
      <div className=' comment-footer-buttons'>
      <ButtonReply />
      <ButtonReply />

      </div>
      
    </div>
  )
}

CommentFooter.propTypes = {

}

export default CommentFooter
