import Comment from "./Comment";

const Comments = () => {
  return (
    <div className="comments">
      <Comment 
      activeuser={false} 
      imagePath={"./images/avatars/image-amyrobson.png"} 
      username={"amyrobson"} 
      creationDate={"1 month ago"} 
      text={"Impressive! Though it seems the drag feature could be improved. But overall it looks incredible. You've nailed the design and the responsiveness at various breakpoints works really well."} 
      score={12} 
      reply={0}
      />

      <Comment 
      activeuser={true} 
      imagePath={"./images/avatars/image-amyrobson.png"} 
      username={"TestUser"} 
      creationDate={"yesterday"} 
      text={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."} 
      score={-2} 
      reply={1}
      />
      <Comment 
      activeuser={true} 
      imagePath={"./images/avatars/image-amyrobson.png"} 
      username={"TestUser"} 
      creationDate={"yesterday"} 
      text={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."} 
      score={-2} 
      reply={2}
      />
    </div>
  )
}

export default Comments
