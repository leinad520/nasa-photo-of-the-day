import React, {useState } from "react";
import "../Post/Post.css"


function CommentInput(props) {


  return (
    <form onSubmit={props.handleSubmit} >
      <input type="text" 
      placeholder="comment..." 
      value={props.comment} 
      onChange={props.changeComment}></input>
    </form>
  );
}

export default CommentInput;
