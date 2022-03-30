import ButtonDelete from "./ButtonDelete"
import ButtonEdit from "./ButtonEdit"
import ButtonReply from "./ButtonReply"
import Submit from "./Submit"


const Comment = () => {
    
  
    return (
    <div className="comment">
        <ButtonReply />
        <ButtonDelete />
        <ButtonEdit />
        <Submit text={'Reply'}/>
    </div>
  )
}

export default Comment
