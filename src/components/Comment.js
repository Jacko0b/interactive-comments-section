import ButtonDelete from "./ButtonDelete"
import ButtonEdit from "./ButtonEdit"
import ButtonReply from "./ButtonReply"


const Comment = () => {
    
  
    return (
    <div className="comment">
        <ButtonReply />
        <ButtonDelete />
        <ButtonEdit />
    </div>
  )
}

export default Comment
