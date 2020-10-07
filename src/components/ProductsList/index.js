import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Product from './Product';

const ProductsList = ({ products }) => (
    <div>
        <h1>ProductsList</h1>
        {products.map(({
            id, title, price, cover, currency,
        }) => (
                <Product
                    key={id}
                    cover={cover}
                    title={title}
                    price={price}
                    currency={currency}
                />
            ))}
    </div>
);

ProductsList.propTypes = {
    products: PropTypes.arrayOf([PropTypes.object]).isRequired,
};

const mapStateToProps = (state) => ({ products: state });

export default connect(mapStateToProps)(ProductsList);
