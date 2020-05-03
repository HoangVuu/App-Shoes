import {combineReducers} from 'redux';
import productReducer from './product';
import cartReducer from './cart';

const reducer = combineReducers({
  // toan bo du lieu lưu trữ tại đây
  // tên dữ liệu: reducer Con
  product: productReducer,
  cart: cartReducer,
});

export default reducer;
