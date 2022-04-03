import ButtonSubmit from "./ButtonSubmit"
import Image from "./Image"

const AddComment = ({imagePath, username, buttonText='Send'}) => {
  return (
    <div className="add-comment comment-section">
      {/* 
        MOBILE
        field
        img ---- send

        DESKTOP
        img field send
      */}


      <Image src={imagePath} alt={username} />
      <form id='add-comment'>
          <textarea type="text"/>
      </form>
      <ButtonSubmit text={buttonText} />
    </div>
  )
}

export default AddComment
