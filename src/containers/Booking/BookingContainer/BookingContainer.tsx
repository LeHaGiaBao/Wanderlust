import React from 'react';
import './BookingContainer.css'
import BookingNavBar from '../BookingNavBar/BookingNavBar';
import BookingNavigation from '../BookingNavigation/BookingNavigation';

function BookingContainer() {
    return (
        <>
            <div className='bookingContainer'>
                <div className='containerBook'>
                    <BookingNavBar />
                    <BookingNavigation />
                </div>
            </div>
        </>
    );
}

export default BookingContainer;