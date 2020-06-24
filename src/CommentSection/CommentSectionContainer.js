import React, {useState, useEffect } from "react";
import Comment from "./Comment";
import CommentInput from "./CommentInput";
import "../Post/Post.css"


function CommentSectionContainer(props) {
  const [comment, setComment] = useState('')
  const [outsideComments] = useState([{
    username: 'spaceboi',
    text: 'This is so cool!'
  },
  {
    username: 'elonmusk',
    text: 'I love this shot'
  }
])

  const handleSubmit = e => {
    e.preventDefault();
    outsideComments.push({
      username: 'dankim520',
      text: comment
    })
    setComment('')
  }

  const changeComment = e => {
    setComment(e.target.value);
  }

  return (
    <div>
      <Comment userName={props.userName} text={props.explanation} />
      {outsideComments.map(obj => <Comment userName={obj.username} text={obj.text} />)}
      <CommentInput comment={comment} handleSubmit={handleSubmit} changeComment={changeComment}/>
    </div>
  );
}

export default CommentSectionContainer;
