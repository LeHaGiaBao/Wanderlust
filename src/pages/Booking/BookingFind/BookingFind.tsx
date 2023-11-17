import React from 'react';
import './BookingFind.css'
import { IonContent } from '@ionic/react';
import BookingFindNavbar from '../../../containers/BookingFind/BookingFindNavbar/BookingFindNavbar';
import ItemContainer from '../../../containers/BookingFind/ItemContainer/ItemContainer';
import BookingRecommend from '../../../containers/Booking/BookingRecommend/BookingRecommend';


function BookingFind() {
    return (
        <>
            <IonContent fullscreen>
                <div className='bookingFindContainer'>
                    <BookingFindNavbar />
                    <ItemContainer />
                    <BookingRecommend />
                </div>
            </IonContent>
        </>
    );
}

export default BookingFind;