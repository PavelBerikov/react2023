import React, {useEffect, useState} from 'react';
import {albumsService} from "../services/albums.service";
import Album from "../album/Album";

const Albums = () => {
    const [albums, setAlbums] = useState([]);
    useEffect(() => {
        albumsService.getAll().then(value => value.data).then(value => setAlbums([...value]))
        return () => {
            console.log('Done')
        }
    }, [])
    return (
        <div>
            {
                albums.map(album => <Album album={album} key={album.id}/>)
            }
        </div>
    );
};

export default Albums;