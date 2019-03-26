import React from "react";
import CommentSection from '../CommentSection/CommentSection';
import "./Post.css";

function PostContainer(props) {
    return (
        <div className="container">
            <div className="posts">
                <div>
                    <div className="top">
                        <img className="profilepic" src={props.eachPost.thumbnailUrl} />
                        <h2 className="name">{props.eachPost.username}</h2>
                    </div>
                    <img className="postpic" src={props.eachPost.imageUrl} />
                    <div className="mid-icons">
                        <i className="far fa-heart"></i>
                        <i className="far fa-comment"></i>
                    </div>
                    <h3 className="likes">{props.eachPost.likes} likes</h3>
                    <CommentSection 
                    eachPost= {props.eachPost}
                    />
                </div>
            </div>
        </div>
    );
};

export default PostContainer