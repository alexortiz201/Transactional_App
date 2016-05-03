import test from 'tape';
import {
	BALANCE_INCREASE,
	BALANCE_DECREASE,
	balanceIncrease,
	balanceDecrease
} from '../pages/Main/Main-actions';
import main from '../pages/Main/Main-reducers';

test('Passing test.', assert => {
  const actual = typeof 123;
  const expected = 'number';

  assert.equal(actual, expected,
    'Test passed.');

  assert.end();
});

// Actions
test('Main-actions: Returns an object with balance increased by 10', assert => {
  const amount = 10;
  const expected = {
		type: BALANCE_INCREASE,
		payload: amount
	};

  assert.deepEqual(balanceIncrease(amount), expected,
    'Main-actions: Balance increased by 10.');

  assert.end();
});

test('Main-actions: Returns an object with balance decreased by 10', assert => {
  const amount = 10;
  const expected = {
		type: BALANCE_DECREASE,
		payload: amount
	};

  assert.deepEqual(balanceDecrease(amount), expected,
    'Main-actions: Balance decreased by 10.');

  assert.end();
});

// Reducers
test('Main-reducers: Returns initial state', assert => {
  const expected = {
		balance: 0,
		transactionLedger: []
	};

  assert.deepEqual(main(undefined, {}), expected,
    'Main-reducers: Returned initial state.');

  assert.end();
});

test('Main-reducers: Returns increased balance and updated transaction ledger', assert => {
	const action = {
		type: BALANCE_INCREASE,
		payload: 10
	};
  const expected = {
		balance: 10,
		transactionLedger: [`${action.type} By Amount ${action.payload.toFixed(2)}:
		New Total 10.00`]
	};

  assert.equal(main(undefined, action)['balance'], expected.balance,
    'Main-reducers: Returns increased balance.');

  assert.equal(main(undefined, action)['transactionLedger'][0], expected.transactionLedger[0],
    'Main-reducers: Returns updated transaction ledger.');

  assert.end();
});

test('Main-reducers: Returns decreased balance and updated transaction ledger', assert => {
	const action = {
		type: BALANCE_DECREASE,
		payload: 10
	};
  const expected = {
		balance: -10,
		transactionLedger: [`${action.type} By Amount ${action.payload.toFixed(2)}:
		New Total -10.00`]
	};

  assert.equal(main(undefined, action)['balance'], expected.balance,
    'Main-reducers: Returns decreased balance.');

  assert.equal(main(undefined, action)['transactionLedger'][0], expected.transactionLedger[0],
    'Main-reducers: Returns updated transaction ledger.');

  assert.end();
});
