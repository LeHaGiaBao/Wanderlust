import React from 'react';
import './FullFlightContainer.css'
import FlightItem from '../../../components/FlightItem/FlightItem';

function FullFlightContainer() {
    return (
        <>
            <div className='fullFlight'>
                <FlightItem />
                <FlightItem />
                <FlightItem />
                <FlightItem />
                <FlightItem />
            </div>
        </>
    );
}

export default FullFlightContainer;