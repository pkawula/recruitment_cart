import React from 'react';
import Heading from '../Heading/Heading';
import CartTable from './CartTable';
import './Cart.scss';

const Cart = () => (
    <section className="cartWrapper">
        <Heading>Cart</Heading>
        <CartTable />
    </section>
);

export default Cart;
