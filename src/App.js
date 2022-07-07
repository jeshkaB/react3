// реалізувати 3 маршрути
// todos - при переході на який тягнуться всі todos з https://jsonplaceholder.typicode.com/todos
//
//     albums - при переході на який тягнуться всі альбоми з https://jsonplaceholder.typicode.com/albums
//
//     comments - при переході на який тягнуться всі комментарі https://jsonplaceholder.typicode.com/comments
//     при натисканні на комментар тягнеться пост, до якого належіить цей коментар всі його пости. приклад запиту https://jsonplaceholder.typicode.com/posts/ID
//     id поста взяти з коментаря (postId)
//
// відображати ті чи інші маршрути можна на будь-якому рівні на ваш вибір.

import {Link,Routes,Route} from "react-router-dom";

import TodosPage from "./pages/TodosPage";
import HomePage from "./pages/HomePage";
import AlbumsPage from "./pages/AlbumsPage";
import CommentsPage from "./pages/CommentsPage";
import PostPage from "./pages/PostPage";

function App() {
    return (
        <div className="App">
            <div>
                <h2>menu</h2>
                <h3><Link to={'/'}> home </Link></h3>
                <h3><Link to={'/todos'}> todos </Link></h3>
                <h3><Link to={'/albums'}> albums </Link></h3>
                <h3><Link to={'/comments'}> comments </Link></h3>

            </div>
            <hr/>
            <div>
                <Routes>
                    <Route path={'/'} element={<HomePage/>}/>
                    <Route path={'/todos'} element={<TodosPage/>}/>
                    <Route path={'/albums'} element={<AlbumsPage/>}/>
                    <Route path={'/comments/:id'} element={<PostPage/>}/>
                    <Route path={'/comments'} element={<CommentsPage/>}/>

                    {/*<Route path={'/comments'} element={<CommentsPage/>}>*/}
                    {/*<Route path={':id'} element={<PostPage/>}/>*/}
                    {/*</Route>*/}

                </Routes>

            </div>
        </div>
    );
}

export default App;
