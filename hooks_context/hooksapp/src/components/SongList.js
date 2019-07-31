import React, {useState, useEffect} from 'react';
import uuid from 'uuid/v1';
import NewSongForm from './NewSongForm';
const SongList = () => {
    const [songs, setSongs] = useState([
        {title:'almost home', id: 1},
        {title: 'memory gospel', id: 2},
        {title: 'this world darkness', id: 3 }
    ]);
    const [age, setAge] = useState(20);
    const addSong = (title) => {
        setSongs([...songs,{title: title ,id: uuid()}])
    }
    useEffect(() => {
        console.log('useeffect hook ran', songs);
    }, [songs])
    useEffect(() => {
        console.log('useeffect hook ran', age);
    }, [age])
    return ( 
        <div className="song-list">
            <ul>
                {songs.map(song => {
                    return ( <li key={song.id}>{songs.title}</li> );
                })}
            </ul>
            <NewSongForm addSong= {addSong}/>
            <button onClick= {() => setAge(age + 1)}>Add 1 to age:{age}</button>
        </div>
     );
}
 
export default SongList;