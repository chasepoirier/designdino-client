import React, {Component} from 'react';

import './customers.css'
import { getApiUrl } from '../../config/config';


class Customers extends Component {
	
	constructor() {
		super();
		this.state = {
			customers: []
		}
		this.apiURL = getApiUrl('dev')
	}

	componentDidMount() {
		fetch(`${this.apiURL}/customers`)
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