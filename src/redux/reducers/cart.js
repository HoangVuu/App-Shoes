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
      //2.Nếu có rồi:
      else {
        state[index].quantity++;
      }
      console.log('state2', state);
      return state;
    }
    default:
      return state;
  }
};

export default reducer;
