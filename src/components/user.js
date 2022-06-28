import React, {useState} from 'react';
import {getPostsNew} from "../services";


function User({item, getPostsId}) {
    let [postsNew, setPostsNew] = useState([]);
    const getPostsNewId = (id) => getPostsNew(item.id).then(value => setPostsNew(value));
    return (
        <div>
            <h2> {item.id} {item.name} </h2>
            {postsNew.map(value => <p>{value.title}</p>)}
            <button onClick={() => getPostsId(item.id)}> posts</button>
            <button onClick={() => getPostsNewId(item.id)}> new Button</button>
        </div>
    );
}

export default User;