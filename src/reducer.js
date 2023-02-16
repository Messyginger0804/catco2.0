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

        case 'REMOVE_FROM_CART':

            //this removes all of the same item. 
            // return {
            //     ...state,
            //     cart: state.cart.filter(item => item.id !== action.id)
            // };

            // Try and delete just one. 
            /// something like this but idk what needs to be done

            const index = state.cart.findIndex(
                // label what index is and iterate through the array and find where the cartId = actionId
                (cartItem) => cartItem.id === action.id
            );

            const newCart = [...state.cart];
            if (index >= 0) {
                newCart.splice(index, 1)
                // the index we found we should cut out the item at that index
            } else {
                console.error(
                    `cant remove productId : ${action.id}. its not in the cart`
                )
            }

            return {
                ...state, cart: newCart
            }


        default:
            return state;
    }
};

export default reducer;