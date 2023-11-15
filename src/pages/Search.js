import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/App.css';

const Search = () => {
  
  const [song, setSong] = React.useState('');
  const [artist, setArtist] = React.useState('');

  
  const handleSearch = () => {
    
    
  };

  return (
    <div className="main">
      <div className="form-container">
        <input
          type="text"
          placeholder="Song"
          onChange={(e) => setSong(e.target.value)}
          value={song}
        />
        <input
          type="text"
          placeholder="Artist"
          onChange={(e) => setArtist(e.target.value)}
          value={artist}
        />

        <button className="search"><Link
          to="/recommend"
          className="search"
          onClick={handleSearch}
        >
          Search
        </Link></button>
        
      </div>
    </div>
  );
};

export default Search;
