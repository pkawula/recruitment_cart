export const REMOVE_FROM_CART = 'REMOVE_FROM_CART';
export const ADD_TO_CART = 'ADD_TO_CART';

export const addToCart = (itemContent) => ({
    type: ADD_TO_CART,
    payload: {
        itemContent,
        quantity: 1,
    },
});

export const removeFromCart = (itemContent) => ({
    type: REMOVE_FROM_CART,
    payload: {
        itemContent,
    },
});
