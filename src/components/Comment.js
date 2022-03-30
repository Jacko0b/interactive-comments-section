import ButtonDelete from "./ButtonDelete"
import ButtonEdit from "./ButtonEdit"
import ButtonReply from "./ButtonReply"
import ButtonSubmit from "./ButtonSubmit"
import Likes from "./Likes"


const Comment = () => {
    
  
    return (
    <div className="comment">
        {/* <ButtonReply />
        <ButtonDelete />
        <ButtonEdit />*/
        <ButtonSubmit text={'Reply'}/> }
        <Likes score={10}/>
    </div>
  )
}

export default Comment
