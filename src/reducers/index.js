import { ADD_TO_CART, REMOVE_FROM_CART } from '../actions';
import items from '../utils/items.json';

const validatedItems = items.filter(({ price }) => typeof price === 'number');

const initialState = {
    items: [...validatedItems],
    cart: {
        total: 0,
        items: [],
    },
};

const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TO_CART:
            return {
                items: [...state.items.filter(({ id }) => id !== action.payload.itemContent.id)],
                cart: {
                    total: action.payload.total,
                    items: [...state.cart.items, action.payload.itemContent],
                },
            };
        case REMOVE_FROM_CART:
            return {
                items: [...state.items, action.payload.itemContent],
                cart: {
                    total: action.payload.total,
                    items: [
                        ...state.cart.items.filter(
                            ({ id }) => id !== action.payload.itemContent.id,
                        ),
                    ],
                },
            };
        default:
            return state;
    }
};

export default rootReducer;
