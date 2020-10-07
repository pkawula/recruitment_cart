import React from 'react';
import PropTypes from 'prop-types';
import Button from '../Button';
import './ProductCard.scss';

const Product = ({
    cover, title, price, currency,
}) => (
        <li className="productCard">
            <img className="productCard__image" src={cover} alt={title} />
            <p className="productCard__title">{title}</p>
            <span className="productCard__price">
                {price.toFixed(2)}
                <span className="productCard__price--currency">{currency}</span>
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
