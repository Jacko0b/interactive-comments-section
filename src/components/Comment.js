import ButtonDelete from "./ButtonDelete"
import ButtonEdit from "./ButtonEdit"
import ButtonReply from "./ButtonReply"
import ButtonSubmit from "./ButtonSubmit"
import CommentBody from "./CommentBody"
import CommentFooter from "./CommentFooter"
import CommentHeading from "./CommentHeading"
import Likes from "./Likes"


const Comment = ({activeuser = false, imagePath, username, creationDate, text, score }) => {
    
  
    return (
    <div>
      {/* 
       
       */}


      <div className="comment">
        <CommentHeading imagePath={imagePath} username={username} creationDate={creationDate} activeuser={activeuser}/>
        <CommentBody text={text}/>
        <CommentFooter score={score} activeuser= {activeuser}/>
      </div>
  
    </div>
    )
}

export default Comment
