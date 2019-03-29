import React from "react";
import CommentSection from '../CommentSection/CommentSection';
import "./Post.css";

class PostContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            likes: props.eachPost.likes
        };
    }

    incrementLike = (event) => {
        let likes = this.state.likes + 1;
        this.setState({likes});
    };

    render(props) {
        return (
            <div className="container">
                <div className="posts">
                    <div>
                        <div className="top">
                            <img className="profilepic" src={this.props.eachPost.thumbnailUrl} />
                            <h2 className="name">{this.props.eachPost.username}</h2>
                        </div>
                        <img className="postpic" src={this.props.eachPost.imageUrl} />
                        <div className="mid-icons">
                            <i className="far fa-heart" onClick={this.incrementLike}></i>
                            <i className="far fa-comment"></i>
                        </div>
                        <h3 className="likes">{this.state.likes} likes</h3>
                        <CommentSection 
                        eachPost= {this.props.eachPost}
                        />
                    </div>
                </div>
            </div>
        );    
    };
};


export default PostContainer