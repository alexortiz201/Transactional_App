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
			return {
				...state,
				balance: state.balance + payload,
				transactionLedger: [...state.transactionLedger,
					cleanTransaction(action, state.balance + payload)]
			};
		case BALANCE_DECREASE:
			return {
				...state,
				balance: state.balance - payload,
				transactionLedger: [...state.transactionLedger,
					cleanTransaction(action, state.balance + payload)]
			};
		default:
			return state;
	}
}

function cleanTransaction(action, newBalance) {
	return `${action.type} By Amount ${action.payload}:
		New Total ${newBalance}`;
}
