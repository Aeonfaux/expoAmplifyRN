import { combineReducers } from 'redux';
import ThemeReducer from './ThemeReducer';

export default combineReducers({
    theme: ThemeReducer
});
