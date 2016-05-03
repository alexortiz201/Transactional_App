// Main-reducers here
import {
	BALANCE_INCREASE,
	BALANCE_DECREASE
} from './Main-actions';

const initialState = {
	balance: 0,
	transactionLedger: []
};

export default function main(state = initialState, action) {
	var payload = action.payload;

	switch (action.type) {

		case BALANCE_INCREASE:
			let newBalanceInc = state.balance + payload;

			return {
				...state,
				balance: newBalanceInc,
				transactionLedger: [...state.transactionLedger,
					cleanTransaction(action, newBalanceInc)]
			};

		case BALANCE_DECREASE:
			let newBalanceDec = state.balance - payload;

			return {
				...state,
				balance: newBalanceDec,
				transactionLedger: [...state.transactionLedger,
					cleanTransaction(action, newBalanceDec)]
			};

		default:
			return state;
	}
}

export function cleanTransaction(action, newBalance) {
	return `${action.type} By Amount ${action.payload.toFixed(2)}:
		New Total ${newBalance.toFixed(2)}`;
}
