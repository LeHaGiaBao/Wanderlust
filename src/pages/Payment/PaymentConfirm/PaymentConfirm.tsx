import React from 'react';
import './PaymentConfirm.css'
import { IonContent } from '@ionic/react';
import Navbar from '../../../components/Navbar/Navbar';
import ConfirmItem from '../../../containers/Payment/ConfirmItem/ConfirmItem';
import CustomerInfor from '../../../containers/Payment/CustomerInfor/CustomerInfor';
import { useHistory } from 'react-router';

function PaymentConfirm() {
    const history = useHistory()

    return (
        <>
            <IonContent fullscreen>
                <div className='paymentConfirmContainer'>
                    <Navbar title="Xác nhận thanh toán" link="home" />
                    <h1 className='confirmTitle'>Thông tin đặt phòng</h1>
                    <ConfirmItem />
                    <CustomerInfor />
                    <div className='containerText'>
                        <h1 className='confirmTitle'>Thông tin khách hàng</h1>
                        <h1 className='changeText'>Thay đổi</h1>
                    </div>
                    <div className='customerInfor'>Mỹ Duyên - 0343123456</div>
                    <div className='customerInfor'>Thanh Mai - 0349876543</div>
                    <div className='containerText'>
                        <h1 className='confirmTitle'>Phương thức thanh toán</h1>
                        <h1 className='changeText'>Thay đổi</h1>
                    </div>
                    <div className='creditCard'>
                        <div className='cardInfor'>
                            <img className='cardLogo' src="https://www.visa.com.au/dam/VCOM/regional/ve/romania/blogs/hero-image/visa-logo-800x450.jpg" alt="" />
                            <h1 className='cardNumber'>**** **** **** 9090</h1>
                        </div>
                    </div>
                    <div className='confirmPaymentLine' style={{ marginTop: '70px' }} />
                    <div className='totalPrice'>
                        <h1 className='totalText'>Tổng thanh toán: </h1>
                        <h1 className='totalPrice'>8.438.920 VND</h1>
                    </div>
                    <button className='buttonConfirm' onClick={() => history.push('/billdetail')}>Thanh toán</button>
                </div>
            </IonContent>
        </>
    );
}

export default PaymentConfirm;