import {Outlet} from 'react-router-dom'

import AlbumsComponent from "../components/AlbumsComponent";


function AlbumsPage(props) {
    return (
        <div>
            <AlbumsComponent/>
            <Outlet/>
        </div>
    );
}

export default AlbumsPage;