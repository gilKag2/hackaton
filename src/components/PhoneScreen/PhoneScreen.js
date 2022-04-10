import React from 'react';
import waze from '../../assets/waze.PNG';

const PhoneScreen = () => {
    return (
        <div style={{ maxWidth: '100%', maxHeight: '100%', display: 'block' }}>
            <img style={{ height: '80vh' }} src={waze} alt="waze" />
        </div>
    );
};

export default PhoneScreen;