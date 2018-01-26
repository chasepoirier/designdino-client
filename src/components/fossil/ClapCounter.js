import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addDinoClaps } from '../../actions/Fossil';

class ClapCounter extends Component {

    constructor(props) {
        super(props);
        this.state = {
            clapCount: this.props.totalCount,
            userClapCount: 0,
            timer: 0,
            clicked: false
        }
        this.dinoClap = this.mouseEvent.bind(this);
        this.counter = function(){};
        this.timer = function(){};
        this.indexOfLike = this.props.user.likes.map(like => like.fossilId.toString()).indexOf(this.props.fossil._id);
    }

    componentWillMount() {
        document.addEventListener('mousedown', this.dinoClap);
        document.addEventListener('mouseup', this.dinoClap);

        if(this.props.user.likes) {
            let position = this.indexOfLike;
            console.log(this.props.user);

        
            if(position !== -1) {
                this.setState({ userClapCount: this.props.user.likes[position].count })
                this.indexOfLike = position;
            }
        }
    }

    renderLikes = () => {

    }

    componentWillUpdate(nextProps, nextState) {
        // console.log('update');
        if(this.props.user.loaded !== nextProps.user.loaded) {

            let position = nextProps.user.likes.map(like => like.fossilId.toString()).indexOf(nextProps.fossil._id)    
            console.log(position);
            if(position !== -1) {
                this.setState({ userClapCount: nextProps.user.likes[position].count })
                this.indexOfLike = position;
            }
        }
    }


    mouseEvent = e => {
        if (e.target === this.refs.dinoClapper && e.type === 'mousedown') {
			this.setState({ clicked: true })

			this.refs.dinoClapper.classList += " clapping"

        	if(this.state.userClapCount >= 50) {
				return
			}

            let userCount = this.state.userClapCount + 1;
            let totalCount = this.state.clapCount + 1;

            this.setState({ userClapCount: userCount, clapCount: totalCount })
            this.timer = setTimeout(() => {
                this.longPress();
            }, 300);
        }

        if (e.target === this.refs.dinoClapper && e.type === 'mouseup') {
            clearTimeout(this.timer);
            clearInterval(this.counter);

            setTimeout(() => {
            	this.refs.dinoClapper.classList.remove("clapping");
            	this.setState({ clicked: false })

                let data = {
                    fossilClaps: {
                        count: this.state.clapCount,
                        id: this.props.fossil._id
                    },
                    userClaps: {
                        count: this.state.userClapCount,
                        id: this.props.user.id,
                        index: this.indexOfLike
                    }
                }
                this.props.addDinoClaps(data);    
            }, 250)
            
        }
    }

    longPress = () => {
        this.counter = setInterval(() => {
        	if(this.state.userClapCount >= 50) {
        		clearInterval(this.counter)
        	} else {
        		
				let count = this.state.userClapCount + 1;
				let totalCount = this.state.clapCount + 1;
            	this.setState({ userClapCount: count, clapCount: totalCount })
        	}
        }, 150)
    }


    render() {
        console.log(this.indexOfLike);
        return ( 
        	<div ref="dinoClapper" className="dino-claps"> {this.state.clicked ? this.state.userClapCount : this.state.clapCount } </div>
        );
    }
}

const mapStateToProps = state => {
	return {
		fossil: state.fossil,
        user: state.user
	}
}


export default connect(mapStateToProps, { addDinoClaps })(ClapCounter);