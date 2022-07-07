import {Outlet} from 'react-router-dom'

import CommentsComponent from "../components/CommentsComponent";

function CommentsPage(props) {

    return (
        <div>
            <CommentsComponent/>
            <Outlet/>
        </div>
    );
}

export default CommentsPage;