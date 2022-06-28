import React, {useEffect, useState} from 'react';
import {getUsers} from "../services";
import User from "./user";

function Users({getPostsId}) {
    let [users, setUsers] = useState([]);
    useEffect(() => {
        getUsers().then(value => setUsers([...value]))
    }, [])

    return (

        <div>
            {users.map(value => <User key={value.id} item={value} getPostsId={getPostsId}/>)}
        </div>
    );
}

export default Users;