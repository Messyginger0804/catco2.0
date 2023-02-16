export const initialState = {
    cart: [],
};

// the selctor
export const getCartTotal = (cart) =>
    cart?.reduce((amount, item) => item.price + amount, 0);


const reducer = (state, action) => {
    console.log(action);

    switch (action.type) {
        case 'ADD-TO-CART':
            return {
                ...state,
                cart: [...state.cart, action.item],
            };
        default:
            return state;
    }
};

export default reducer;