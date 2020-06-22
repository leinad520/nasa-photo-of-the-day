import React, {useState} from "react";
import CommentSectionContainer from "../CommentSection/CommentSectionContainer";
import PostHeader from "./PostHeader"
import LikeSection from "../LikeSection/LikeSection"
import "./Post.css"

function Post(props) {
  const commentArr=[];

  return (      
    <div className="post-border posts-container-wrapper">
      <PostHeader username={props.username} />
      <div className="post-image-wrapper">
      <img src={props.image} alt="post image" className="post-image"></img>
      </div>
      <LikeSection date={props.date} userName={props.username} title={props.title} />
      <CommentSectionContainer explanation={props.explanation} userName={props.username} />
    </div>
  );
}

export default Post;
