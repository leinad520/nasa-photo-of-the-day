import React, {useState} from "react";
import "../Post/Post.css" 


function Comment(props) {
  

  return (
    <div className="like-section-wrapper-comment">
    <p><span className="author-post">{props.userName}</span> {props.text}</p>
    </div>
  );
}

export default Comment;
