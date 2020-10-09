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
                id, title, price, cover, currency, availability,
            }) => (
                    <ProductCard
                        key={id}
                        cover={cover}
                        title={title}
                        price={price}
                        currency={currency}
                        id={id}
                        availability={availability}
                    />
                ))}
        </ul>
    </section>
);

ProductsList.propTypes = {
    products: PropTypes.arrayOf(PropTypes.object).isRequired,
};

const mapStateToProps = ({ items }) => ({ products: items });

export default connect(mapStateToProps)(ProductsList);
