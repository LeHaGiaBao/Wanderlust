import React from 'react';
import './BookingRecommend.css'
import BookingItemRecommend from '../../../components/BookingItemRecommend/BookingItemRecommend';
import { useHistory } from 'react-router';

function BookingRecommend() {
    const history = useHistory()

    return (
        <>
            <div className='bookingRecommend' onClick={() => history.push('/hoteldetail')}>
                <BookingItemRecommend />
                <BookingItemRecommend />
                <BookingItemRecommend />
            </div>
        </>
    );
}

export default BookingRecommend;