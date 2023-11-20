import React from 'react';
import './FullFlight.css'
import { IonContent } from '@ionic/react';
import Navbar from '../../../components/Navbar/Navbar';
import FullFlightContainer from '../../../containers/Home/FullFlightContainer/FullFlightContainer';

function FullFlight() {
    return (
        <>
            <IonContent fullscreen>
                <div className='fullFlightContainer'>
                    <Navbar title="Chuyến bay giá rẻ" />
                    <FullFlightContainer />
                </div>
            </IonContent>
        </>
    );
}

export default FullFlight;