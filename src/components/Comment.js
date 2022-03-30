import ButtonDelete from "./ButtonDelete"
import ButtonEdit from "./ButtonEdit"
import ButtonReply from "./ButtonReply"
import ButtonSubmit from "./ButtonSubmit"
import CommentHeading from "./CommentHeading"
import Likes from "./Likes"


const Comment = () => {
    
  
    return (
    <div className="comment">
        {/*<ButtonReply />
        <ButtonDelete />
        <ButtonEdit /> */}

        {/* 
        TODO
        INSERT IMAGE AS PROP
         */}
        <CommentHeading image='' username='ramsesmiron' creationDate="1 week ago" />
        <ButtonSubmit text={'Reply'}/> 
        <Likes score={10}/>
    </div>
  )
}

export default Comment
