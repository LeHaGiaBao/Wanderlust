import React from 'react';
import './BookingForm.css'
import { IonSearchbar } from '@ionic/react';
import { location, calendar, people } from 'ionicons/icons';
import { CiSearch } from "react-icons/ci";
import { useHistory } from 'react-router';

function BookingForm() {
    const history = useHistory()

    return (
        <>
            <div className='bookingForm'>
                <form className='form'>
                    <IonSearchbar searchIcon={location} placeholder='Tìm khách sạn, homestay, ...' class="custom" />
                    <IonSearchbar searchIcon={calendar} placeholder='07 tháng 11 - 10 tháng 11.' class="custom" />
                    <IonSearchbar searchIcon={people} placeholder='2 người lớn - 1 phòng' class="custom" />
                    <button className='buttonForm'>
                        <CiSearch className='buttonIcon' />
                        <h1 className='buttonContent' onClick={() => history.push('/bookingfind')}>Tìm kiếm</h1>
                    </button>
                </form>
            </div>
        </>
    );
}

export default BookingForm;