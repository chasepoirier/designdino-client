import React, { Component } from 'react';

class HeaderImage extends Component {

	state = {
		file: '',
		imagePreviewUrl: ''
	}

    handleImageChange = e => {

        e.preventDefault();
        let file = e.target.files[0];

        let img = new Image();
        img.src = window.URL.createObjectURL(file);
        img.onload = () => {

            let width = img.naturalWidth;
            let height = img.naturalHeight;

            window.URL.revokeObjectURL(img.src);

            // if ((width === 740 && height === 400) || (width === 1480 && height === 800)) {
                let reader = new FileReader();
                reader.onloadend = () => {
                    this.setState({ file: file, imagePreviewUrl: reader.result });
                }
                reader.readAsDataURL(file)
                // console.log(file);
                this.props.file(file)
            // } else {
                console.log('try a new one');
            // }
        }
    }

	render() {
		return (
			<form id="addFossil" className="main-fossil add">
            	<input onChange={this.handleImageChange} id="mainFossil" type="file" accept="image/*" name="fossilHeaderImage" className="input" />
            	<img id="blah" alt="" src={this.state.imagePreviewUrl} />
          	</form>
		);
	}
}

export default HeaderImage;