import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import LoadingBar from 'react-top-loading-bar';
import '../styles/App.css';
import axios from 'axios';

const Search = () => {
  const [songName, setSong] = React.useState('');
  const [artistName, setArtist] = React.useState('');
  const [recommendation, setRecommendation] = useState([]);
  const [progress, setProgress] = useState(0);
  const [showError, setShowError] = useState(false);
  const [showGif, setShowGif] = useState(false);
  const history = useHistory();
  

  useEffect(() => {
    console.log('Updated Recommendation:', recommendation);
  }, [recommendation, history]);

  const handleSearch = async () => {
    try {
      setProgress(50); // Set initial progress value
      const response = await axios.get(`http://127.0.0.1:5000/${songName}/${artistName}`);
      console.log(response.data);

      if (response.status !== 200) {
        throw new Error('Invalid response from server');
      }

      setRecommendation(response.data);
      history.push(`/recommend?recommendation=${encodeURIComponent(JSON.stringify(response.data))}`);
    } catch (error) {
      console.error('Error fetching recommendation:', error);
      setShowError(true);
      setShowGif(true);
    } finally {
      setProgress(100); // Set progress to 100% when the request is complete
    }
  };

  const handleRetry = () => {
    setShowError(false);
    setShowGif(false);
    setProgress(0);
  };

  const mainStyle = {
    background: showGif
      ? 'url(https://media.giphy.com/media/Vu7FU5T4RJPo1esgna/giphy.gif) center/cover no-repeat'
      : 'none',
  };

  return (
    <div className="main" style={mainStyle}>
      {showError ? (
        <>
        <div className="overlay" >
          <h2>Oops! Something went wrong.</h2>
          <button className="retry" onClick={handleRetry}>
            Retry
          </button>
        </div>
        </>
      ) : (
        <>
          <LoadingBar
            color="#f11946"
            progress={progress}
            onLoaderFinished={() => setProgress(0)}
          />

          <div className="form-container">
            <input
              type="text"
              placeholder="Song"
              onChange={(e) => setSong(e.target.value)}
              value={songName}
            />
            <input
              type="text"
              placeholder="Artist"
              onChange={(e) => setArtist(e.target.value)}
              value={artistName}
            />

            <button className="search" onClick={handleSearch}>
              Search
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default Search;
