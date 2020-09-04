import { combineReducers } from 'redux';
import {persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';  //local storage object from window
import userReducer from './user/user.reducer';
import cartReducer from './cart /cart.reducer';

const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['cart']
}

const rootReducer = combineReducers({
    user: userReducer,  //no need to persist this since its already in firebase
    cart: cartReducer 
});


export default persistReducer(persistConfig, rootReducer);