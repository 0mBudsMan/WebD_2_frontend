import { useContext } from "react";
import "./comments.scss";
import { CommentsContext } from "../../context/forComments";
import {AuthContext } from "../../context/authContext";
import { json } from "react-router-dom";

const Comments = ({ post }) => {  
  const { currentUser } = useContext(AuthContext);
  const{refresh, toggle, commentOpen} = useContext(CommentsContext);
  var postCopy = post;
  
  //console.log(JSON.parse(postCopy))
  var { commentId } = postCopy;
  const postComment = (e) => {
    e.preventDefault();
    var form = new FormData(document.getElementById("forComments"+ post.id));
   // console.log(form)
    
    var desc = form.get("desc");
    const newComment = 
      {
        id: 69, 
        profilePicture: currentUser.profilePic,
        name: currentUser.name,
        desc: desc
      }
      commentId.push(newComment);
      postCopy.commentId = commentId;
      const updatedPosts = JSON.parse(localStorage.getItem("posts")).map(obj => {
        if(obj.id === post.id){
          return postCopy;
        }
        else{
          return obj;
        }
      })

      console.log(updatedPosts);
      localStorage.setItem("posts", JSON.stringify(updatedPosts))
      
      toggle();
      alert("Comment added. Open the section to view it")
      
     
  }

var id = "forComments" + post.id;


  return (

    <div className="comments">
      <form onSubmit={postComment} id={id} >
        <div className="write">
          <img src={currentUser.profilePic} alt="" />
          <input type="text" placeholder="write a comment" name="desc" />
          <label htmlFor="desc">
              
            </label>
          <button type="submit"  >Send</button>

        </div></form>

        {commentId.map((comment) => (
        <div className="comment">
          <img src={comment.profilePicture} alt="" />
          <div className="info">
            <span>{comment.name}</span>
            <p>{comment.desc}</p>
          </div>
          <span className="date">1h</span>
        </div>
      ))}
        
     
    </div>
  );
};

export default Comments;
