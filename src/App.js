import React from 'react';
import { Provider } from 'react-redux';
import store from './store';
import ProductsList from './components/ProductsList';
import Cart from './components/Cart';

function App() {
  return (
    <Provider store={store}>
      <ProductsList />
      <Cart />
    </Provider>
  );
}

export default App;
