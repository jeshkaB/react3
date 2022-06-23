/*з jsonplaceholder отримати всіх юзерів в компоненту Users.js
відобразити кожного інформацію (id,name) з кожного юзера (компонента User)
Зробити кнопку вибора юзера, при натисканні на яку в Users.js ви покажете детальну інфомацію про користувача(довільно обрану інформацію)*/

import {useEffect, useState} from "react";
import Users from "./components/Users";


// VARIANT 1 - детальна інфо в батьківському блоці

/*function App() {
    let [users, setUsers] = useState([]);
    let [user, setUser] = useState([]);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(value => value.json())
            .then(value => {
                setUsers(value)
            })
    }, []);
    const choseUser = (item) => {
        setUser(item)
    };

    return (<div className="App">
            {user.id && <div> {user.company.name} </div>}
            {users.map((user, index) =>
                <Users key={index}
                       user={user}
                       choseUser={choseUser}
                />)}
        </div>
    );
}*/

// VARIANT 2 - детальна інфо в блоці Users
function App() {
    let [users, setUsers] = useState([]);
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(value => value.json())
            .then(value => {
                setUsers(value)
            })
    }, []);


    return (<div className="App">
            {users.map((user, index) =>
                <Users key={index}
                       user={user}
                />)}
        </div>
    );
}

export default App;
