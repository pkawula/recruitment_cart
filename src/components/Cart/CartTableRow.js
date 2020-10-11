import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { removeFromCart as removeFromCartAction } from '../../actions';
import './CartTableRow.scss';
import Button from '../Button';
import { ReactComponent as SubstractIcon } from '../../utils/icons/minus.svg';
import { ReactComponent as AddIcon } from '../../utils/icons/plus.svg';
import { ReactComponent as RemoveIcon } from '../../utils/icons/remove.svg';

const CartTableRow = ({
    id,
    cover,
    title,
    price,
    currency,
    availability,
    removeFromCart,
    incrementTotal,
    decrementTotal,
}) => {
    const [quantity, setQuantity] = useState(1);
    const [itemValue, setItemValue] = useState(price);

    useEffect(() => {
        incrementTotal(price);
    }, [incrementTotal, price]);

    const addQuantity = () => {
        setQuantity((prevQuantity) => prevQuantity + 1);
        return incrementTotal(price);
    };
    const substractQuantity = () => {
        decrementTotal(price);
        if (quantity === 1) {
            return removeFromCart({
                title, price, cover, id, availability, currency,
            });
        }

        return setQuantity((prevQuantity) => prevQuantity - 1);
    };

    const handleChange = (e) => {
        const { value } = e.target;

        if (value <= 1) return setQuantity(1);

        return setQuantity(value);
    };

    useEffect(() => {
        setItemValue(price * quantity);
    }, [quantity, price]);

    return (
        <tr className="cartTableRow">
            <td className="cartTableRow__cell cartTableRow__cell--image"><img className="cartTableRow__image" src={cover} alt="product" /></td>
            <td className="cartTableRow__cell cartTableRow__cell--title">{title}</td>
            <td className="cartTableRow__cell cartTableRow__cell--price">
                {`${price.toFixed(2)} ${currency}`}
            </td>
            <td className="cartTableRow__cell cartTableRow__cell--quantity">
                <Button onClick={substractQuantity} warn icon>
                    <SubstractIcon />
                </Button>
                <input className="cartTableRow__cell--input" type="number" value={quantity} onChange={handleChange} />
                <Button onClick={addQuantity} icon>
                    <AddIcon />
                </Button>
            </td>
            <td className="cartTableRow__cell cartTableRow__cell--value">
                {`${itemValue.toFixed(2)} ${currency}`}
            </td>
            <td className="cartTableRow__cell cartTableRow__cell--delete">
                <Button
                    onClick={() => {
                        decrementTotal(itemValue);
                        return removeFromCart({
                            title, price, cover, id, availability, currency,
                        });
                    }}
                    icon
                    warn
                >
                    <RemoveIcon />
                </Button>
            </td>
        </tr>
    );
};

CartTableRow.propTypes = {
    cover: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    id: PropTypes.number.isRequired,
    currency: PropTypes.string.isRequired,
    availability: PropTypes.bool.isRequired,
    removeFromCart: PropTypes.func.isRequired,
    incrementTotal: PropTypes.func.isRequired,
    decrementTotal: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
    removeFromCart: (itemContent) => dispatch(removeFromCartAction(itemContent)),
});

export default connect(null, mapDispatchToProps)(CartTableRow);
