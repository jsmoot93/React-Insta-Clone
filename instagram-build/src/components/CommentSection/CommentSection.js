import React from "react";
import "./Comment.css";
import PropTypes from 'prop-types';

class CommentSection extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        comments: props.eachPost.comments,
        input: ""
      };
    }

    submitComment = (event) => {
        event.preventDefault();
        const newComment = { username: "Jimbo", text: this.state.input };
        this.setState({ 
          comments: [...this.state.comments, newComment], 
          input: '' 
        });
      };
    
      inputComment = (event) => {
        this.setState({[event.target.name]: event.target.value });
      }


    render(){
        return (
            <div className="comment-container">
                <div className="comments">
                    {this.state.comments &&
                        this.state.comments.map(e => (
                            <div className="user-comment">
                                <h3>{e.username}</h3>
                                <p>{e.text}</p>
                            </div>
                    ))}
                    <form onSubmit={this.submitComment}>
                        <input name="input" value={this.state.input} onChange={this.inputComment}></input>
                    </form>
                </div>
            </div>
        );
    }
    
};

CommentSection.propTypes = {
    comments: PropTypes.shape({
      text: PropTypes.string,
      username: PropTypes.string
    })
};

export default CommentSection;