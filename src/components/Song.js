import React,{useEffect} from 'react'
import '../styles/Song.css';

const Song = (props) => {
   
  return (
   <>
   <div className="col-md-4 col-sm-6 col-xs-12 song">
    <div key={props.songs.spotify_id}>
        <div className="profile-card-2">
            <img
                src={props.songs.image_url}
                alt={props.songs.song_name}
                className="img img-responsive"
            />

            <div className="profile-name">
                {props.songs.song_name}
            </div>
            <div className="profile-username">
                {props.songs.artist_name}
            </div>
        </div>
    </div>
    </div>
   </>
  )
}

export default Song;