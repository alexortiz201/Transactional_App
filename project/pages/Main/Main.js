import './main.css';

import React from 'react';
import { connect }  from 'react-redux';

// Components
import {
	balanceIncrease,
	balanceDecrease
} from './Main-actions';
import { Button } from '../../components/Button/Button'; // eslint-disable-line no-unused-vars

class Main extends React.Component {
	componentWillMount() {}

	_getAmount() {
		let amount = this.refs.amount.value;

		this.refs.amount.value = '';

		return parseFloat(amount);
	}

	_onIncrease() {
		let amount = this._getAmount();
		if (!amount || typeof amount !== 'number') {
			return;
		}

		this.props.balanceIncrease(amount);
	}

	_onDecrease() {
		let amount = this._getAmount();
		if (!amount) {
			return;
		}

		this.props.balanceDecrease(amount);
	}

	_renderTransactionLedger() {
		return this.props.transactionLedger.map((trans, index) => {
			return <li key={index} className="collection-item">{trans}</li>;
		});
	}

	render() {
		return (
			<section className="main container">
				<div className="row">
	        <div className="input-field col s6">
	          <input
	          	className="input-amount"
	          	placeholder="Amount"
	          	ref="amount"
	          	type="number" />
	        </div>
	        <div className="col s6">
		        <Button
							clazz="btn-increase"
							onClickFn={() => this._onIncrease()}
							text={'Deposit'} />

						<Button
							clazz="btn-increase"
							onClickFn={() => this._onDecrease()}
							text={'Withdraw'} />
	        </div>
				</div>
				<div className="divider"></div>
				<div className="row">
					<div className="col s12">
						<ul className="collection with-header">
							<li className="collection-header">
								<h4>Transaction History</h4>
								Balance: {this.props.balance.toFixed(2)}
							</li>
		        	{this._renderTransactionLedger()}
		        </ul>
					</div>
				</div>
			</section>
		);
	}
}

export default connect((state) => ({
	balance: state.main.balance,
	transactionLedger: state.main.transactionLedger
}), {
	balanceIncrease,
	balanceDecrease
})(Main);
