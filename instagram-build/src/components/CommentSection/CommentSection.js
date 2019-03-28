import React from "react";
import "./Comment.css";
import PropTypes from 'prop-types';

function CommentSection(props) {
    return (
        <div className="comment-container">
            <div className="comments">
                {props.eachPost.comments &&
                    props.eachPost.comments.map(e => (
                        <div className="user-comment">
                            <h3>{e.username}</h3>
                            <p>{e.text}</p>
                        </div>
                ))}
            </div>
        </div>
    );
};

CommentSection.propTypes = {
    comments: PropTypes.shape({
      text: PropTypes.string,
      username: PropTypes.string
    })
};

export default CommentSection;