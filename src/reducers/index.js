import { combineReducers } from 'redux';
import { ADD_PRODUCT, REMOVE_PRODUCT } from '../actions';
import items from '../utils/items.json';

const initialState = items.filter(({ price }) => typeof price === 'number');

const itemsReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_PRODUCT:
            return [
                ...state,
                action.payload,
            ];
        case REMOVE_PRODUCT:
            return [
                ...state.filter(({ id }) => id !== action.payload.id),
            ];
        default:
            return state;
    }
};

const cartReducer = (state = [], action) => {
    switch (action.type) {
        case ADD_PRODUCT:
            return [
                ...state,
                ...action.payload,
            ];
        default:
            return state;
    }
};

const rootReducer = combineReducers({
    itemsReducer,
    cartReducer,
});

export default rootReducer;
