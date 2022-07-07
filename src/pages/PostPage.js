import {Outlet, useParams} from 'react-router-dom';

import PostComponent from "../components/PostComponent";

function PostPage(props) {
    let {id}=useParams();
    return (
        <div>
            <Outlet/>
            <PostComponent id={id}/>

        </div>

    );
}

export default PostPage;