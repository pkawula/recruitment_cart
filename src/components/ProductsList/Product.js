import React from 'react';
import PropTypes from 'prop-types';
import Button from '../Button';

const Product = ({
    cover, title, price, currency,
}) => (
        <li className="product">
            <img className="product__image" src={cover} alt={title} />
            <p className="product__title">{title}</p>
            <span className="product__price">
                {`${price} ${currency}`}
            </span>
            <Button>Add to cart</Button>
        </li>
    );

Product.propTypes = {
    cover: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    currency: PropTypes.string.isRequired,
};

export default Product;
