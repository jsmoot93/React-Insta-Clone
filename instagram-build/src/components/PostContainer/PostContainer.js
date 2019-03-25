import React from "react";
import CommentSection from '../CommentSection/CommentSection'
import "./Post.css"

function PostContainer(props) {
    return (
        <div className="container">
            <div className="posts">
            {props.dummy.map(dummy => (
                <div>
                    <img className="profilepic" src={dummy.thumbnailUrl} />
                    <h1 className="name">{dummy.username}</h1>
                    <img className="postpic" src={dummy.imageUrl} />
                    <div className="mid-icons">
                        <i className="far fa-heart"></i>
                        <i className="far fa-comment"></i>
                    </div>
                    <CommentSection 
                    dummy= {dummy}
                    />
                </div>
            ))}
            </div>
        </div>
    );
};

export default PostContainer