const reducer = (state, action) => {
  switch (action.type) {
    case 'CLear_All':
      return { ...state, cart: [] };

    case 'REMOVE':
      return { ...state, cart: state.cart.filter(item => item.id !== action.payload) };

    case 'INCREASE': {
      let tempcart = state.cart.map(item => {
        if (item.id === action.payload) {
          return { ...item, amount: item.amount + 1 };
        } else {
          return item;
        }
      });
      return { ...state, cart: tempcart };
    }

    case 'DECREASE':
      let tempcart = state.cart
        .map(item => {
          if (item.id === action.payload) {
            return { ...item, amount: item.amount - 1 };
          } else {
            return item;
          }
        })
        .filter(item => item.amount !== 0);
      return { ...state, cart: tempcart };

    case 'GET_TOTAL':
      let { amount, total } = state.cart.reduce(
        (cartTotal, item) => {
          const { amount, price } = item;
          const totalprice = amount * price;
          cartTotal.amount += amount;
          cartTotal.total += totalprice;
          return cartTotal;
        },
        { amount: 0, total: 0 }
      );
      total = parseFloat(total.toFixed(2));

      return { ...state, amount, total };

    default:
      return state;
  }
};

export default reducer;
