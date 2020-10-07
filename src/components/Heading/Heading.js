import React from 'react';
import './Heading.scss';

function Heading({ children }) {
    return <h2 className="heading">{children}</h2>;
}

export default Heading;
