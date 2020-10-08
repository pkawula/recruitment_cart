import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import CartTableRow from './CartTableRow';
import './CartTable.scss';

const CartTable = ({ products }) => (
    <table className="cartTable">
        <tbody>
            <tr className="cartTable__headRow">
                <th className="cartTable__headRow--column cartTableRow__cell--image">Image</th>
                <th className="cartTable__headRow--column cartTableRow__cell--title">Title</th>
                <th className="cartTable__headRow--column cartTableRow__cell--price">Price</th>
                <th className="cartTable__headRow--column cartTableRow__cell--quantity">Quantity</th>
                <th className="cartTable__headRow--column cartTableRow__cell--value">Value</th>
            </tr>
            {products.map(({
                id,
                cover,
                title,
                price,
                currency,
            }) => (
                    <CartTableRow
                        key={id}
                        cover={cover}
                        title={title}
                        price={price}
                        currency={currency}
                    />
                ))}
        </tbody>
    </table>
);

CartTable.propTypes = {
    products: PropTypes.arrayOf([PropTypes.object]).isRequired,
};

const mapStateToProps = (state) => ({ products: state });

export default connect(mapStateToProps)(CartTable);
