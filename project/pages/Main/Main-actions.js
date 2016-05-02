// Main-actions here
export const BALANCE_INCREASE = 'BALANCE_INCREASE';
export function balanceIncrease(amount) {
	return {
		type: BALANCE_INCREASE,
		payload: amount
	}
}

export const BALANCE_DECREASE = 'BALANCE_DECREASE';
export function balanceDecrease(amount) {
	return {
		type: BALANCE_DECREASE,
		payload: amount
	}
}
