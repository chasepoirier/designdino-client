import React, { Component } from 'react';

class Tag extends Component {
	 // Write some dope code...

	render() {
		return (
			<div id="tag" onClick={this.props.removeTag} className="fossil-tag add">{this.props.value}</div>
		);
	}
}

export default Tag;