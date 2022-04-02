import ButtonDelete from "./ButtonDelete"
import ButtonEdit from "./ButtonEdit"
import ButtonReply from "./ButtonReply"
import ButtonSubmit from "./ButtonSubmit"
import CommentBody from "./CommentBody"
import CommentFooter from "./CommentFooter"
import CommentHeading from "./CommentHeading"
import Likes from "./Likes"


const Comment = () => {
    
  
    return (
    <div className="comment">
        {/*<ButtonReply />
        <ButtonDelete />
        <ButtonEdit /> */}

        <CommentHeading imagePath='./images/avatars/image-amyrobson.png' username='amyrobson' creationDate="1 month ago" activeuser={false}/>
        {/* <ButtonSubmit text={'Reply'}/> 
        <Likes score={10}/> */}
        <CommentBody text={"Impressive! Though it seems the drag feature could be improved. But overall it looks incredible. You've nailed the design and the responsiveness at various breakpoints works really well."}/>
        <CommentFooter score={12}/>
    </div>
  )
}

export default Comment
