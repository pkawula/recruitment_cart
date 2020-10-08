import React from 'react';
import { Provider } from 'react-redux';
import store from './store';
import ProductsList from './components/ProductsList';
import Cart from './components/Cart';
import './utils/scss/_global.scss';

function App() {
  return (
    <Provider store={store}>
      <div className="appWrapper">
        <ProductsList />
        <Cart />
      </div>
    </Provider>
  );
}

export default App;
