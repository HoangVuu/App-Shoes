let initialState = [];

const reducer = (state = initialState, action) => {
  // xử lý action
  switch (action.type) {
    case 'ADD_TO_CART': {
      console.log('state1', state);
      // kiểm tra sp có sẵn trong giỏ hàng chưa
      const index = state.findIndex(
        item => item.product.id === action.payload.id,
      );
      //1.Nếu chưa có :
      if (index === -1) {
        const cardItem = {
          product: action.payload,
          quantity: 1,
        };
        state.push(cardItem);
      }
      //2.Nếu có rồi thay đổi quantity
      else {
        state[index].quantity++;
      }
      console.log('state2', state);
      //immitable
      return [...state]; // nếu dữ liệu là mảng, trả về mảng coppy của nó, redux mới so sánh được
    }

    case 'INCREASE_QUANTITY': {
      console.log('111');
      //tim vị trí sp muốn tăng số lượng.
      const index = state.findIndex(item => item.product.id === action.payload);
      state[index] = {...state[index], quantity: ++state[index].quantity};
      // state = [cardItem, cartItem]  ---- để copy object: dùng cú pháp này hoặc như bên dưới      return [...state];
      // const cloneCartItem = {...state[index]};
      // cloneCartItem.quantity++;
      // state[index] = cloneCartItem;
      return [...state];
    }

    case 'DECREASE_QUANTITY': {
      //tim vị trí sp muốn giam số lượng.
      const index = state.findIndex(item => item.product.id === action.payload);
      // state[index].quantity++;
      state[index] = {...state[index], quantity: --state[index].quantity};
      // state = [cardItem, cartItem]  ---- để copy object: dùng cú pháp này hoặc như bên dưới      return [...state];
      // const cloneCartItem = {...state[index]};
      // cloneCartItem.quantity--;
      // state[index] = cloneCartItem;

      return [...state];
    }

    case 'REMOVE_TO_CART': {
      console.log('id', action.payload);
      //tim vị trí sp muốn xoa.
      const index = state.findIndex(item => item.product.id === action.payload);
      state.splice(index, 1);
      return [...state];
    }

    default:
      return state;
  }
};

export default reducer;
