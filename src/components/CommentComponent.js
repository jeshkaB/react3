import React from 'react';
import {Link} from "react-router-dom";

function CommentComponent({comment}) {
    return (
        <div>
                <p> id- {comment.id}</p>
                <p> post id- {comment.postId}</p>
                <p> name- {comment.name}</p>
                <p> email- {comment.email}</p>
                <p> body- {comment.body}</p>
                <button> <Link to={comment.postId.toString()}> post </Link></button>
                <hr/>

        </div>
    );
}

export default CommentComponent;