import PropTypes from 'prop-types'
import Plus from './icons/Plus'
import Minus from './icons/Minus'
const Likes = ({score}) => {
  return (
    <div className='likes'>
        <button className='plus'><Plus /></button>
        <span>{score}</span>
        <button className='minus'><Minus /></button> 
    </div>
  )
}

Likes.propTypes = {
    score: PropTypes.number.isRequired
}

export default Likes
