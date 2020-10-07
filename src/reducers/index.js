import items from '../utils/items.json';

const initialState = items.filter(({ price }) => typeof price === 'number');

const itemsReducer = (state = initialState, action) => state;

export default itemsReducer;
