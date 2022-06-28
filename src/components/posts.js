import React from 'react';

function Posts({title, body}) {
    return (
        <div>
            <h3> {title}</h3>
            <p> {body}</p>
        </div>
    );
}

export default Posts;