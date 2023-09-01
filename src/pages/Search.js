import React from 'react';
import '../styles/App.css'

const Search = () => {
  return (
	<div className="main">
		<div className="button-container">
			<input
				type="text"
				placeholder="Song"
				//onChange={(e) => getResults(e)}
				//value={search}
			/>
			<input
				type="text"
				placeholder="Artist"
				//onChange={(e) => getResults(e)}
				//value={search}
			/>
			<div className="search"></div>
		</div>
	</div>
	
  )
}

export default Search