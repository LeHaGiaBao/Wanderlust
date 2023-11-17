import React from 'react';
import './BookingContainer.css'
import BookingNavBar from '../BookingNavBar/BookingNavBar';

function BookingContainer() {
    return (
        <>
            <div className='bookingContainer'>
                <div className='containerBook'>
                    <BookingNavBar />
                </div>
            </div>
        </>
    );
}

export default BookingContainer;