import React, { useState } from 'react';
import TrafficLight from 'react-trafficlight';

const TrafficLightContainer = () => {
    const [ light, setLight ] = useState({ redOn: true, yellowOn: false, greenOn: false });
    return (
        <div>
            <TrafficLight GreenOn={light.greenOn} RedOn={light.redOn} YellowOn={light.yellowOn} Horizontal />
        </div>
    );
};

export default TrafficLightContainer;