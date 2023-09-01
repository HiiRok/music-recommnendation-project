import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../styles/App.css';
import Box from '../components/Box';
import random from '../random';


const Search = () => {
	const [randomm, setRandom] = useState([]);

    useEffect(() => {
        setRandom(random);
    }, []);
    return (
        <>
            <div className="heading-container">
                <h1 className="heading-recommend">Recommended Songs</h1>
            </div>
			<Box random={randomm}/>
        </>
    );
};

export default Search;
