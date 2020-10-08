import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import ProductCard from './ProductCard';
import './index.scss';
import Heading from '../Heading/Heading';

const ProductsList = ({ products }) => (
    <section className="productsWrapper">
        <Heading>Our products</Heading>
        <ul className="productsList">
            {products.map(({
                id, title, price, cover, currency,
            }) => (
                    <ProductCard
                        key={id}
                        cover={cover}
                        title={title}
                        price={price}
                        currency={currency}
                        id={id}
                    />
                ))}
        </ul>
    </section>
);

ProductsList.propTypes = {
    products: PropTypes.arrayOf(PropTypes.object).isRequired,
};

const mapStateToProps = ({ itemsReducer }) => ({ products: itemsReducer });

export default connect(mapStateToProps)(ProductsList);
