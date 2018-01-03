import React, { Component } from 'react';

class SearchBar extends Component {
	constructor() {
		super();
	}

	render() {
		return (
			<form id="search">
        		<input type="text" className="searchbar" name="search" placeholder="search" />
        		<div className="bottom-bar"></div>
      		</form>	
		);
	}
}

export default SearchBar;