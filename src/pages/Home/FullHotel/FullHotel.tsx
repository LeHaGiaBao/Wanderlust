import React from 'react';
import './FullHotel.css'
import { IonContent } from '@ionic/react';
import Navbar from '../../../components/Navbar/Navbar';
import BookingRecommend from '../../../containers/Booking/BookingRecommend/BookingRecommend';

function FullHotel() {
    return (
        <>
            <IonContent fullscreen>
                <div className='fullHotelContainer'>
                    <Navbar title="Khách sạn" link="home" />
                    <div className='listFullHotel'>
                        <BookingRecommend />
                        <BookingRecommend />
                    </div>
                </div>
            </IonContent>
        </>
    );
}

export default FullHotel;