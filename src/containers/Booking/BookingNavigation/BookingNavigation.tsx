import React from 'react';
import './BookingNavigation.css'
import {
    Buliding,
    Airplane,
    Bus
} from 'iconsax-react'
import { IonLabel, IonSegment, IonSegmentButton } from '@ionic/react';

function BookingNavigation() {
    return (
        <>
            <div className='bookingNavigation'>
                <IonSegment value="room">
                    <IonSegmentButton value="room" layout="icon-start">
                        <Buliding variant='Bold' size={17} style={{ marginRight: '2px' }} />
                        <IonLabel>Đặt phòng</IonLabel>
                    </IonSegmentButton>
                    <IonSegmentButton value="flight" layout="icon-start">
                        <Airplane variant='Bold' size={17} style={{ marginRight: '2px' }} />
                        <IonLabel>Chuyến bay</IonLabel>
                    </IonSegmentButton>
                    <IonSegmentButton value="train" layout="icon-start">
                        <Bus variant='Bold' size={17} style={{ marginRight: '2px' }} />
                        <IonLabel>Vé tàu</IonLabel>
                    </IonSegmentButton>
                </IonSegment>
            </div>
        </>
    );
}

export default BookingNavigation;