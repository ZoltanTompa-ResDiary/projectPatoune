import {combineReducers} from 'redux';

import testReducer from './slices/test';
import authReducer from './slices/auth';
import UI from './slices/ui';
import Books from './slices/books';


export default combineReducers({
    //add all slice-reducers here!
    test: testReducer,
    auth: authReducer,
    ui: UI,
    books: Books
});