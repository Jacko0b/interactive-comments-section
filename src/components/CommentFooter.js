import PropTypes from 'prop-types'
import ButtonDelete from './ButtonDelete'
import ButtonEdit from './ButtonEdit'
import ButtonReply from './ButtonReply'
import Likes from './Likes'

const CommentFooter = ({score, activeuser}) => {
  return (
    <div className='comment-footer'>
      <Likes className='comment-footer-score'  score={score}/>
      <div className=' comment-footer-buttons'>
        {activeuser ? <><ButtonDelete /><ButtonEdit /></> : <ButtonReply />}
      </div>
    </div>
  )
}

CommentFooter.propTypes = {

}

export default CommentFooter
