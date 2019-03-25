import React from "react";
import "./Comment.css"

function CommentSection(props) {
    console.log(props);
    return (
        <div className="comment-container">
            <div className="comments">
                {props.dummy.comments &&
                    props.dummy.comments.map(e => (
                        <div>
                            <h2>{e.username}</h2>
                            <p>{e.text}</p>
                        </div>
                ))}
            </div>
        </div>
    );
};

export default CommentSection;