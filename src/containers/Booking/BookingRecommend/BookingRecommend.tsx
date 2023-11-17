import React from 'react';
import './BookingRecommend.css'
import BookingItemRecommend from '../../../components/BookingItemRecommend/BookingItemRecommend';

function BookingRecommend() {
    return (
        <>
            <div className='bookingRecommend'>
                <BookingItemRecommend />
                <BookingItemRecommend />
                <BookingItemRecommend />
            </div>
        </>
    );
}

export default BookingRecommend;