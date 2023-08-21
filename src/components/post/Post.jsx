import "./post.scss";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import FavoriteOutlinedIcon from "@mui/icons-material/FavoriteOutlined";
import TextsmsOutlinedIcon from "@mui/icons-material/TextsmsOutlined";
import ShareOutlinedIcon from "@mui/icons-material/ShareOutlined";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";

import Comments from "../comments/Comments";
import React,{ useState } from "react";

import { CommentsContext } from "../../context/forComments";
//import { useContext } from "react";
const { useContext } = React
const Post = ({ post }) => {
  //const [commentOpen, setCommentOpen] = useState(false);
  const{refresh, toggle, commentOpen} = useContext(CommentsContext);
  

 

  //TEMPORARY
  const [liked,toggleLike] = useState(false);
  const commArray = post.communities;
  

  return (
    <div className="post">
      <div className="container">
        <div className="user">
          <div className="userInfo">
            <img src={post.profilePic} alt="" />
            <div className="details">
            
                <span className="name">{post.name}</span>
             
              <span className="date">
                <p className="comms">Communities: {' '}{post.communitiesString} </p>      
              </span>
            </div>
          </div>
          <MoreHorizIcon />
        </div>
        <div className="content">
          <p>{post.desc}</p>
          <img src={post.img} alt="" />
        </div>
        <div className="info">
          <div className="item" onClick={()=>toggleLike(!liked)}>
            {liked ? <FavoriteOutlinedIcon /> : <FavoriteBorderOutlinedIcon />}
            {liked? <p>50 likes</p>: <p>49 likes</p>}
          </div>
          <div className="item" onClick={toggle}>
            <TextsmsOutlinedIcon />
            Comments
          </div>
          <div className="item">
            <ShareOutlinedIcon />
            Share
          </div>
        </div>
        {commentOpen && <Comments post={post} />}
      </div>
    </div>
  );
};

export default Post;
 