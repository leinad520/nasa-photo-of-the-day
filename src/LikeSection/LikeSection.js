import React, {useState} from "react";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faComment, faHeart } from '@fortawesome/free-regular-svg-icons'
import "../Post/Post.css"

function LikeSection(props) {
  const [likeCount, setLikeCount] = useState(0);

  return (
    <>
    <div className="like-section-wrapper">
      <FontAwesomeIcon icon={faHeart} className="icon" onClick={function() {setLikeCount(likeCount+1)}} />
      <FontAwesomeIcon icon={faComment} className="icon" />
      <div className="timestamp">{props.date}</div>
    </div>
    <div className="like-section-wrapper">
    <p className="like-count">{likeCount} likes</p>
  </div>
  <div className="like-section-wrapper">
  <p><span className="author-post">{props.userName}</span> {props.title}</p>
  </div>
  <div className="like-section-wrapper">
    <p className="view-comments">View comments...</p>
  </div>
  </>
  );
}

export default LikeSection;
