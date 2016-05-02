// import './main.less';

import React, { PropTypes } from 'react';
import { connect }  from 'react-redux';

// Components
import {
	balanceIncrease,
	balanceDecrease
} from './Main-actions';
import { Button } from '../../components/Button/Button';

class Main extends React.Component {
	componentWillMount() {}

	_onIncrease(amount) {
		this.props.balanceIncrease(amount);
	}

	_onDecrease(amount) {
		this.props.balanceDecrease(amount);
	}

	render() {
		return (
			<section className="main">
				<Button
					clazz="btn-increase"
					onClickFn={() => this._onIncrease(10)}
					text={'Deposit'} />

				<Button
					clazz="btn-increase"
					onClickFn={() => this._onDecrease(10)}
					text={'Withdraw'} />

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
