import React from 'react';
import './BookingContainer.css'
import BookingNavBar from '../BookingNavBar/BookingNavBar';
import BookingNavigation from '../BookingNavigation/BookingNavigation';
import BookingForm from '../BookingForm/BookingForm';

function BookingContainer() {
    return (
        <>
            <div className='bookingContainer'>
                <div className='containerBook'>
                    <BookingNavBar />
                    <BookingNavigation />
                    <BookingForm />
                </div>
            </div>
        </>
    );
}

export default BookingContainer;