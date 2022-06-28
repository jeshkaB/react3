import React from 'react';


function User({item, getPostsId}) {
    return (
        <div>
            <h2> {item.id} {item.name}</h2>
            <button onClick={() => getPostsId(item.id)}> posts</button>
        </div>
    );
}

export default User;