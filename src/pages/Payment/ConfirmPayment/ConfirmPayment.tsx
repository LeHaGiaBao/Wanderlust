import React from 'react';
import './ConfirmPayment.css'
import { IonContent } from '@ionic/react';
import Navbar from '../../../components/Navbar/Navbar';
import ConfirmItem from '../../../containers/Payment/ConfirmItem/ConfirmItem';
import CustomerInfor from '../../../containers/Payment/CustomerInfor/CustomerInfor';
import CustomerGoWith from '../../../containers/Payment/CustomerGoWith/CustomerGoWith';
import PriceDetail from '../../../containers/Payment/PriceDetail/PriceDetail';
import { useHistory } from 'react-router';

function ConfirmPayment() {
    const history = useHistory()

    return (
        <>
            <IonContent fullscreen>
                <div className='confirmPaymentContainer'>
                    <Navbar title="Xác nhận thông tin" link="hoteldetail" />
                    <h1 className='confirmTitle'>Thông tin đặt phòng</h1>
                    <ConfirmItem />
                    <CustomerInfor />
                    <h1 className='confirmTitle'>Thông tin khách đi cùng</h1>
                    <CustomerGoWith />
                    <h1 className='confirmTitle' style={{ marginTop: '68px' }}>Chi tiết giá</h1>
                    <PriceDetail />
                    <button className='buttonConfirm' onClick={() => history.push('/paymentinformation')}>Tiếp tục</button>
                </div>
            </IonContent>
        </>
    );
}

export default ConfirmPayment;