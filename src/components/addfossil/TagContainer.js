import React, { Component } from 'react';
import Tag from './Tag';

class TagContainer extends Component {

	constructor(props) {
		super(props);

		this.state = {
			tag: '',
			tags: []
		}

		this.boundEvent = this.onSubmit.bind(this)
	};

	componentDidMount() {
		document.addEventListener('keypress', this.boundEvent);
	};

	componentWillUnmount() {
		document.removeEventListener('keypress', this.boundEvent);
	};

	onChange = e => {
    	this.setState({ tag: e.target.value });
    };

    onSubmit = e => {
		if(e.key === "Enter") {
			e.preventDefault();
			if(this.state.tag) {
				let tags = [...this.state.tags]

				if (tags.indexOf(this.state.tag) === -1 && tags.length < 5) {
					this.props.addTag(this.state.tag);
					tags.push(this.state.tag);
					this.setState({ tags, tag: '' });
					this.refs.input.value = '';
				}
			}
		}
    };

    removeTag = e => {
    	let tags = [...this.state.tags];
    	let index = tags.indexOf(e.target.innerHTML)
		this.props.removeTag(index)
    	tags.splice(index, 1);
    	this.setState({ tags });
    }

	render() {
		let tags = this.state.tags.map(tag => {
			return <Tag key={tag} removeTag={this.removeTag} value={tag} />
		})
		return (
			<div className="field top">
              <div className="title counter">Tags <span className="count"> {tags.length + 0} of 5 </span></div>
              <input ref="input" onChange={this.onChange} type="text" name="tagContainer" placeholder="UI Design" />
              <span className="enter">Press Enter</span>
              <div className="fossil-tags-container">
              	{tags}
              </div>
            </div>
		);
	}
}

export default TagContainer;