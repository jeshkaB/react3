import React from 'react';

function AlbumComponent({album}) {
    return (

        <div>
            <p>id - {album.id}</p>
            <p>user id - {album.userId}</p>
            <p>title - {album.title}</p>
            <hr/>

        </div>
    );
}

export default AlbumComponent;