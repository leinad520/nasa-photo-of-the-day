import React from "react";
import "./Post.css";
import nasaLogo from "../Images/nasaLogo.png"

function PostHeader(props) {

  return (
    <div className="post-header">
      <div className="post-thumb-wrapper">
        <img src={nasaLogo} alt="" className="post-thumb" />
      </div>
      <h2>{props.username}</h2>
    </div>
  );
}

export default PostHeader;
