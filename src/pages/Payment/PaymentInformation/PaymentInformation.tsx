import React from 'react';
import './PaymentInformation.css'
import { IonContent } from '@ionic/react';
import Navbar from '../../../components/Navbar/Navbar';
import CreditAndDebit from '../../../containers/Payment/CreditAndDebit/CreditAndDebit';

function PaymentInformation() {
    return (
        <>
            <IonContent fullscreen>
                <div className='paymentInformationContainer'>
                    <Navbar title="Phương thức thanh toán" />
                    <h1 className='confirmTitle'>Credit hoặc Debit Card</h1>
                    <CreditAndDebit />
                </div>
            </IonContent>
        </>
    );
}

export default PaymentInformation;