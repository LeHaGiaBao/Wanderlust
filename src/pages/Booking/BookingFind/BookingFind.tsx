import React from 'react';
import './BookingFind.css'
import { IonContent } from '@ionic/react';
import ItemContainer from '../../../containers/BookingFind/ItemContainer/ItemContainer';
import BookingRecommend from '../../../containers/Booking/BookingRecommend/BookingRecommend';
import Navbar from '../../../components/Navbar/Navbar';


function BookingFind() {
    return (
        <>
            <IonContent fullscreen>
                <div className='bookingFindContainer'>
                    <Navbar title="Kết quả tìm kiếm" />
                    <ItemContainer />
                    <BookingRecommend />
                </div>
            </IonContent>
        </>
    );
}

export default BookingFind;