
import "./share.scss";

import { useContext, useState } from "react";
import "./home.scss"
import { AuthContext } from "../../context/authContext";
import Post from "../../components/post/Post";
import "./posts.scss";
import { TextField } from '@mui/material';
import Pagination from '@mui/material/Pagination';
import ImageUploader from 'react-image-upload'
import 'react-image-upload/dist/index.css'


var i=2;



const Share = () => {
  const {currentUser} = useContext(AuthContext)
 // alert(); 
 i=JSON.parse(localStorage.getItem("posts")).length;
 var img_link="";
 function getImageFileObject(imageFile) {
  img_link= imageFile.dataUrl
}

function runAfterImageDelete(file) {
  img_link = ""
}

  const addPost = (e) =>{
   

    
  
    e.preventDefault();
  
    var form = new FormData(document.getElementById("formpost"));
    var name = currentUser.name;
    
    var profile_link = currentUser.profilePic;
    var desc = form.get("caption");
    var commString = form.get("communities");
    var commArray = commString.split(', ');
    if(commString==="") commArray=[]

    var userId = 1;
    var id = ++i;
    const obj = {
      id: id,
      name: name,
      desc: desc,
      profilePic: profile_link,
      userId: userId,
      commentId: [],
      img: img_link,
      communities: commArray,
      communitiesString: commString,
  
    }
   var oldPosts = JSON.parse(localStorage.getItem("posts"));
   oldPosts.push(obj);
   localStorage.setItem("posts", JSON.stringify(oldPosts));
   window.location.reload();
   alert("Post has been added. Scroll down to check")
  
  }
 
  return (
    <form onSubmit={addPost} id="formpost">
    <div className="share">
      <div className="container">
        <div className="top">
          <img
            src={currentUser.profilePic}
            alt=""
          />
          <input type="text" name="caption" placeholder={`What's on your mind ${currentUser.name}?`} />
          <label htmlFor="caption"></label>
        </div>
        <hr />
        <div className="bottom">
         
          <div>
          <ImageUploader
      onFileAdded={(img) => getImageFileObject(img)}
      onFileRemoved={(img) => runAfterImageDelete(img)
      }
      
    /> </div> <div>
                <TextField id="filled-basic" label="Add Communities" variant="filled" className="textfield" name="communities" />
            </div>
         
        </div>

        <div>
          <div className="right">
            <button type="submit">Share</button>
            
          </div>
          </div>
        </div>

        <hr></hr>

        <div className="bottom"><p>ADD COMMUNITIES: Add a list of communities seperated by a comma and a spacebar, example "Sample1, Sample2"</p></div>
      </div>
    
    </form>
  );
};



const Posts = () =>{
  var count = Math.ceil(JSON.parse(localStorage.getItem("posts")).length / 5);
  var posts = JSON.parse(localStorage.getItem("posts"));
  const [query, setQuery] = useState("");
  var[page, setPage] = useState(1);
  var max = page*5;
  var min = page*5 - 4;

  return (
    <>
    <div className="forPagination">
      <Pagination count={count} color="primary" onChange={(e, value) => setPage(value)} />
      </div>

    <div className="searchbar">

<TextField label="Search Communities" variant="filled" color="success" focused onChange={(e) => {setQuery(e.target.value);  }} />
</div>


     
  <div className="posts">
    { posts.filter(post => post.communitiesString.toLowerCase().includes(query.toLowerCase()) && post.id<=max && post.id>=min).map(post=>(
      <Post post={post} key={post.id}/>
    ))}
  </div> </>);
}


const Home = () => {
  if(localStorage.getItem("posts")===null){
    var postsarr = [
      {
        id: 1,
        name: "Joe Biden",
        userId: 1,
        profilePic:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/6/68/Joe_Biden_presidential_portrait.jpg/440px-Joe_Biden_presidential_portrait.jpg",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
        img: "https://www.delawareonline.com/gcdn/-mm-/db3827aef1530d60fc4da68f5b86f978d37d9112/c=0-151-2000-1276/local/-/media/2017/04/05/Wilmington/B9327029776Z.1_20170405121301_000_GOMHVI6UH.1-0.jpg",
        commentId: [
          {
            id: 1,
            profilePicture: "data:image/jpeg;base64,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",
            name: "Om Buddhadev",
            desc: "Congrats!!"
          }
        ],
        communities: ["Sample1", "Sample2"],
        communitiesString: "Sample1, Sample2"
      },
      {
        id: 2,
        name: "Narendra Modi",
        img: "https://encrypted-tbn1.gstatic.com/licensed-image?q=tbn:ANd9GcQCyzdroOgXf1JRT-59-ejJoIE0a9KVvyVwXUrA5xytU8gCuncLXYXL3DO2b1_-YnaUWD0lgEsd3ddXvZg",
        userId: 2,
        profilePic:
          "https://encrypted-tbn1.gstatic.com/licensed-image?q=tbn:ANd9GcQtoPnAMsl8SpeCvaeULn48xfPOqI1qKUsIj9679NHyP2BKMxNFOQabkiDAKpjDJpGLGfq6GY4gTqJ9RzE",
        desc: "Tenetur iste voluptates dolorem rem commodi voluptate pariatur, voluptatum, laboriosam consequatur enim nostrum cumque! Maiores a nam non adipisci minima modi tempore.",
        commentId: [],
        communities: ["Sample2"],
        communitiesString: "Sample2"
      },
    ];
    localStorage.setItem("posts", JSON.stringify(postsarr));
  }
  
  
  return (
    <div className="home">
      
      <Share/>
      <Posts/>
      
    </div>
  )
}

export default Home
