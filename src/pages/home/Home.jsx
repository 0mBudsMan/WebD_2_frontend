
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
 i=0; 
 if(JSON.parse(localStorage.getItem("posts")).length!==0) {i=JSON.parse(localStorage.getItem("posts"))[0].id}
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
    var id = --i;
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
   oldPosts.unshift(obj);
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
      
    /> <p>Add image</p></div> <div>
                <TextField id="filled-basic" label="Add Communities" variant="filled" className="textfield" name="communities" />
            </div>
         
        </div>
        <hr></hr>

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

var displayOnlyOnce=0;

const Posts = () =>{
  var count = Math.ceil(JSON.parse(localStorage.getItem("posts")).length / 5);
  var posts = JSON.parse(localStorage.getItem("posts"));
  const [query, setQuery] = useState("");
  var[page, setPage] = useState(1);
  var x=0;
  if(JSON.parse(localStorage.getItem("posts")).length!==0) {x=JSON.parse(localStorage.getItem("posts"))[0].id}
  if(JSON.parse(localStorage.getItem("posts")).length!==0 && displayOnlyOnce!==1){
    displayOnlyOnce++;
    console.log(JSON.parse(localStorage.getItem("posts")).length);
    alert("Regarding Unspash: The posts are randomly generated from unspash api. Also, the user details are real time users of unsplash who uploaded the picture on the platform. The caption is also real time description of that image")
    alert("To regenerate the posts, go to local storage in chrome and clear posts")
  }
  else if(JSON.parse(localStorage.getItem("posts")).length===0){
    alert("Failed to fetch from unspash api. Refresh to reload")
  }
  
  var min = page*5 - 5 + x;
  var max = min+4;

  return (
    <>
   

    <div className="searchbar">

<TextField label="Search Communities" variant="filled" color="success" focused onChange={(e) => {setQuery(e.target.value);  }} />
</div>


     
  <div className="posts">
    { posts.filter(post => post.communitiesString.toLowerCase().includes(query.toLowerCase()) && post.id<=max && post.id>=min).map(post=>(
      <Post post={post} key={post.id}/>
    ))}
  </div> 
  <div className="forPagination">
      <Pagination count={count} color="primary" onChange={(e, value) => setPage(value)} />
      </div></>);
}


const Home = () => {
  if(!localStorage.getItem("posts")) localStorage.setItem("posts", JSON.stringify([]))
  
  
  return (
    <div className="home">
      
      <Share/>
      <Posts/>
      
    </div>
  )
}

export default Home
