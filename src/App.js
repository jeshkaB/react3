// Отримати всіх користувачів з jsonplaceholder, вивести їх.
//     Біля кожного користувача зробити кнопку, при натисканні на яку в Апп компоненті з'являються всі пости поточного користувача
// Запити робити через axios, організація коду через сервіси
import {useState} from "react";
import {getPosts} from "./services";
import Users from "./components/users";
import Posts from "./components/posts";

export default function App() {
    let [posts, setPosts] = useState([]);

    const getPostsId = (id) => {
        getPosts(id).then(value => setPosts(value));
    }


    return (
        <div className="App">
            {posts.map(value => <Posts key={value.id} title={value.title} body={value.body}/>)}
            <Users getPostsId={getPostsId}/>

        </div>
    );
}
