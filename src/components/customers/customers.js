import React, {Component} from 'react';

import './customers.css'

let apiURL = '';

if (process.env.NODE_ENV === 'development') {
  	apiURL = 'http://localhost:8080'
} else {
	apiURL = 'http://api.designdino.co'
}

class Customers extends Component {
	
	constructor() {
		super();
		this.state = {
			customers: []
		}
	}

	componentDidMount() {
		console.log(apiURL);
		fetch(`${apiURL}/customers`)
			.then(res => res.json())
			.then(customers => this.setState({customers}, () => console.log(customers)))
	}

	render() {
		return (
			<div>
				<h2>Customers</h2>
				{this.state.customers.map(customer => 
					<li key={customer.id}> {customer.firstName}, {customer.lastName} </li>
				)}
			</div>
		);
	}
}	

export default Customers;