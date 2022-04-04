import BorderLine from "./BorderLine"
import ButtonSubmit from "./ButtonSubmit"
import Image from "./Image"
import TextArea from "./TextArea"

const AddComment = ({imagePath, username, reply=false}) => {
  return (
    <div className="add-comment-block comment-block">

      {reply && <BorderLine />}

      <form className='add-comment-section comment-section'>
          <Image src={imagePath} alt={username} />
          <TextArea />
          {reply ? <ButtonSubmit text={'Reply'} /> : <ButtonSubmit text={'Send'} />}
      </form>
    </div>
  )
}

export default AddComment
