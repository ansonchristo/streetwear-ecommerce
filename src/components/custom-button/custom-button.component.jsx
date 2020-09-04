import React from 'react';

import './custom-button.styles.scss';

const CustomButton = ({children, isGoogleSignIn, inverted, ...Otherprops}) => (
    <button 
    className = {`${inverted ? 'inverted' : ''} 
    ${isGoogleSignIn ? 'google-sign-in' : ''} custom-button`} {...Otherprops} >
        {children}
    </button>
);

export default CustomButton;