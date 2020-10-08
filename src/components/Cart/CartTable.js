import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import CartTableRow from './CartTableRow';
import './CartTable.scss';

const CartTable = ({ products }) => (
    <>
        {products.length > 0
            ? (
                <table className="cartTable">
                    <tbody>
                        <tr className="cartTable__headRow">
                            <th className="cartTable__headRow--column cartTableRow__cell--image">Image</th>
                            <th className="cartTable__headRow--column cartTableRow__cell--title">Title</th>
                            <th className="cartTable__headRow--column cartTableRow__cell--price">Price</th>
                            <th className="cartTable__headRow--column cartTableRow__cell--quantity">Quantity</th>
                            <th className="cartTable__headRow--column cartTableRow__cell--value">Value</th>
                            <th className="cartTable__headRow--column cartTableRow__cell--delete">Remove</th>
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
            )
            : <p className="cartEmpty__message">The cart is empty...</p>
        }
    </>
);

CartTable.propTypes = {
    products: PropTypes.arrayOf(PropTypes.object).isRequired,
};

const mapStateToProps = ({ cartReducer }) => ({ products: cartReducer });

export default connect(mapStateToProps)(CartTable);
