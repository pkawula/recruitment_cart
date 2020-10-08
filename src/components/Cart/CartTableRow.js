import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './CartTableRow.scss';
import Button from '../Button';
import { ReactComponent as SubstractIcon } from '../../utils/icons/minus.svg';
import { ReactComponent as AddIcon } from '../../utils/icons/plus.svg';
import { ReactComponent as RemoveIcon } from '../../utils/icons/remove.svg';

const CartTableRow = ({
    cover,
    title,
    price,
    currency,
}) => {
    const [quantity, setQuantity] = useState(1);

    const addQuantity = () => setQuantity((prevQuantity) => prevQuantity + 1);
    const substractQuantity = () => {
        if (quantity === 1) return setQuantity(1);

        return setQuantity((prevQuantity) => prevQuantity - 1);
    };

    const handleChange = (e) => {
        const { value } = e.target;

        if (value <= 1) return setQuantity(1);

        return setQuantity(value);
    };

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
                {`${(quantity * price).toFixed(2)} ${currency}`}
            </td>
            <td className="cartTableRow__cell cartTableRow__cell--delete">
                <Button icon warn>
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
    currency: PropTypes.string.isRequired,
};

export default CartTableRow;
