import React from 'react';
import './FullTour.css'
import { IonContent } from '@ionic/react';
import Navbar from '../../../components/Navbar/Navbar';
import Filter from '../../../containers/Home/Filter/Filter';
import ListDestination from '../../../containers/Home/ListDestination/ListDestination';
import ListTour from '../../../containers/Home/ListTour/ListTour';

function FullTour() {
    return (
        <>
            <IonContent fullscreen>
                <div className='fullTourContainer'>
                    <Navbar title="Tour giá hời" />
                    <div className='listFullTour'>
                        <ListTour />
                        <ListTour />
                        <ListTour />
                    </div>
                </div>
            </IonContent>
        </>
    );
}

export default FullTour;