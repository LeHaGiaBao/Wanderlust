import React from 'react';
import './BookingNavigation.css'
import { IonLabel, IonSegment, IonSegmentButton } from '@ionic/react';

function BookingNavigation() {
    return (
        <>
            <div className='bookingNavigation'>
                <IonSegment value="heart">
                    <IonSegmentButton value="call" layout="icon-start">
                        <IonLabel>Đặt phòng</IonLabel>
                    </IonSegmentButton>
                    <IonSegmentButton value="heart" layout="icon-start">
                        <IonLabel>Tìm chuyến bay</IonLabel>
                    </IonSegmentButton>
                    <IonSegmentButton value="pin" layout="icon-start">
                        <IonLabel>Tìm vé tàu</IonLabel>
                    </IonSegmentButton>
                </IonSegment>
            </div>
        </>
    );
}

export default BookingNavigation;