// This is where all the individual reducers are combined.
import {combineReducers} from 'redux';

// Importing reducers here
import main from '../pages/Main/Main-reducers';

export default combineReducers({
  main
});
