import Attribution from "./components/Attribution";
import Comment from "./components/Comment";

function App() {
  return (
    <div className="App">
      <Comment 
      activeuser={false} 
      imagePath={"./images/avatars/image-amyrobson.png"} 
      username={"amyrobson"} 
      creationDate={"1 month ago"} 
      text={"Impressive! Though it seems the drag feature could be improved. But overall it looks incredible. You've nailed the design and the responsiveness at various breakpoints works really well."} 
      score={12} />
      <Comment />

      <Attribution />
    </div>
  );
}



export default App;
