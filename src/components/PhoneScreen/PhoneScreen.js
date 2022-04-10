import React from 'react';
import waze from '../../assets/waze.PNG';

const PhoneScreen = () => {
    return (
        <div>
            <img style={{ maxWidth: '100%', maxHeight: '100%', display: 'block' }} src={waze} alt="waze" />
        </div>
    );
};

export default PhoneScreen;