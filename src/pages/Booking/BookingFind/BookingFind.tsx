import React from 'react';
import './BookingFind.css'
import { IonContent } from '@ionic/react';
import { IoIosArrowDropleft } from "react-icons/io";

function BookingFind() {
    return (
        <>
            <IonContent fullscreen>
                <div className='bookingFindContainer'>
                    <div className='navBarContainer'>
                        <div className='iconBack'>
                            <IoIosArrowDropleft className='iconArrowBack' />
                        </div>
                        <h1 className='navBarTitle'>Kết quả tìm kiếm</h1>
                        <div className='iconBackItem'>
                        </div>
                    </div>
                </div>
            </IonContent>
        </>
    );
}

export default BookingFind;