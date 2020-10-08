import React from 'react';
import PropTypes from 'prop-types';
import './CartTableRow.scss';

const CartTableRow = ({
    cover,
    title,
    price,
    currency,
}) => (
        <tr className="cartTableRow">
            <td className="cartTableRow__cell cartTableRow__cell--image"><img className="cartTableRow__image" src={cover} alt="product" /></td>
            <td className="cartTableRow__cell cartTableRow__cell--title">{title}</td>
            <td className="cartTableRow__cell cartTableRow__cell--price">{price.toFixed(2)} {currency}</td>
            <td className="cartTableRow__cell cartTableRow__cell--quantity">1</td>
            <td className="cartTableRow__cell cartTableRow__cell--value">{price.toFixed(2)} {currency}</td>
        </tr>
    );

CartTableRow.propTypes = {
    cover: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    currency: PropTypes.string.isRequired,
};

export default CartTableRow;
