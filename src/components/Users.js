import {useEffect, useState} from "react";

import User from "./User";
import Company from "./Company";
export default function Users() {
    let [users, setUsers] = useState([]);
    let [user, setUser] = useState({});
    useEffect(() => (
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(value => value.json())
            .then(value => setUsers(value))
    ), []);
    const choseUser = (item)=> {setUser(item)};


    return (
        <div>
            {user.company && <Company user={user}/> }
            {users.map(users => <User key={users.id} users={users} choseUser={choseUser}
        />)}


        </div>
    );
}


