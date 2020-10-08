import React from 'react';
import PropTypes from 'prop-types';
import './Button.scss';

const Button = ({ icon, warn, children, ...props }) => {
    const { onClick } = props;
    const warnClass = warn ? 'warn' : '';

    return (
        <>
            {
                icon
                    ? <button type="button" className={`button icon ${warnClass}`} onClick={onClick}>{children}</button>
                    : <button type="button" className={`button ${warnClass}`} onClick={onClick}>{children}</button>
            }
        </>
    );
};

Button.propTypes = {
    children: PropTypes.oneOfType([PropTypes.node, PropTypes.element]).isRequired,
    onClick: PropTypes.func.isRequired,
    warn: PropTypes.bool,
    icon: PropTypes.bool,
};

Button.defaultProps = {
    warn: false,
    icon: false,
};

export default Button;
