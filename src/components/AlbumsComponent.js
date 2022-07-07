import React, {useEffect, useState} from 'react';

import {apiAlbums} from "../services";
import AlbumComponent from "./AlbumComponent";

function AlbumsComponent(props) {
    const [albums,setAlbums]=useState([]);
    useEffect(()=>{apiAlbums().then(value => setAlbums([...value]))},[])
    return (
        <div>
            {albums.map((album)=> < AlbumComponent album={album} key={album.id}/>)}
        </div>
    );
}

export default AlbumsComponent;