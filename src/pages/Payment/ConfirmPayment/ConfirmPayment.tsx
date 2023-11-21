import React from 'react';
import './ConfirmPayment.css'
import { IonContent } from '@ionic/react';
import Navbar from '../../../components/Navbar/Navbar';
import ConfirmItem from '../../../containers/Payment/ConfirmItem/ConfirmItem';

function ConfirmPayment() {
    return (
        <>
            <IonContent fullscreen>
                <div className='confirmPaymentContainer'>
                    <Navbar title="Xác nhận thông tin" />
                    <h1 className='confirmTitle'>Thông tin đặt phòng</h1>
                    <ConfirmItem />
                </div>
            </IonContent>
        </>
    );
}

export default ConfirmPayment;