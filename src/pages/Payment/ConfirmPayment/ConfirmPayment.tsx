import React from 'react';
import './ConfirmPayment.css'
import { IonContent } from '@ionic/react';
import Navbar from '../../../components/Navbar/Navbar';
import ConfirmItem from '../../../containers/Payment/ConfirmItem/ConfirmItem';
import CustomerInfor from '../../../containers/Payment/CustomerInfor/CustomerInfor';
import CustomerGoWith from '../../../containers/Payment/CustomerGoWith/CustomerGoWith';
import PriceDetail from '../../../containers/Payment/PriceDetail/PriceDetail';

function ConfirmPayment() {
    return (
        <>
            <IonContent fullscreen>
                <div className='confirmPaymentContainer'>
                    <Navbar title="Xác nhận thông tin" />
                    <h1 className='confirmTitle'>Thông tin đặt phòng</h1>
                    <ConfirmItem />
                    <CustomerInfor />
                    <h1 className='confirmTitle'>Thông tin khách đi cùng</h1>
                    <CustomerGoWith />
                    <h1 className='confirmTitle' style={{ marginTop: '68px' }}>Chi tiết giá</h1>
                    <PriceDetail />
                </div>
            </IonContent>
        </>
    );
}

export default ConfirmPayment;