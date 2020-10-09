import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import CartTableRow from './CartTableRow';
import './CartTable.scss';

const CartTable = ({ products: { items } }) => (
    <>
        {items.length > 0
            ? (
                <>
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
                            {items.map(({
                                id,
                                cover,
                                title,
                                price,
                                currency,
                                availability,
                            }) => (
                                    <CartTableRow
                                        key={id}
                                        id={id}
                                        availability={availability}
                                        cover={cover}
                                        title={title}
                                        price={price}
                                        currency={currency}
                                    />
                                ))}
                        </tbody>
                    </table>
                    {/* <span className="cartTotal">{`Total: ${totalValue}`}</span> */}
                </>
            )
            : <p className="cartEmpty__message">The cart is empty...</p>
        }
    </>
);

CartTable.propTypes = {
    products: PropTypes.shape({
        items: PropTypes.arrayOf(PropTypes.object).isRequired,
    }).isRequired,
};

const mapStateToProps = ({ cart }) => ({ products: cart });

export default connect(mapStateToProps)(CartTable);
