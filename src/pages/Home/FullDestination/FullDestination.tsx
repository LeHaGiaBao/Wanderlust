import React from 'react';
import './FullDestination.css'
import { IonContent } from '@ionic/react';
import Navbar from '../../../components/Navbar/Navbar';
import Filter from '../../../containers/Home/Filter/Filter';
import ListDestination from '../../../containers/Home/ListDestination/ListDestination';

function FullDestination() {
    return (
        <>
            <IonContent fullscreen>
                <div className='fullDestinationContainer'>
                    <Navbar title="Điểm đến" link="home" />
                    <Filter />
                    <ListDestination />
                    <ListDestination />
                    <ListDestination />
                </div>
            </IonContent>
        </>
    );
}

export default FullDestination;