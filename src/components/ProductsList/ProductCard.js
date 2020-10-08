import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Button from '../Button';
import './ProductCard.scss';
import { removeProduct } from '../../actions';

const Product = ({
    id, cover, title, price, currency, addToCart,
}) => (
        <li className="productCard">
            <img className="productCard__image" src={cover} alt={title} />
            <p className="productCard__title">{title}</p>
            <span className="productCard__price">
                {price.toFixed(2)}
                <span className="productCard__price--currency">{currency}</span>
            </span>
            <Button onClick={() => addToCart(id)}>Add to cart</Button>
        </li>
    );

Product.propTypes = {
    id: PropTypes.number.isRequired,
    cover: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    currency: PropTypes.string.isRequired,
    addToCart: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
    addToCart: (id) => dispatch(removeProduct(id)),
});

export default connect(null, mapDispatchToProps)(Product);
