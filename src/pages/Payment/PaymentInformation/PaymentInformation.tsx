import React from 'react';
import './PaymentInformation.css'
import { IonContent } from '@ionic/react';
import Navbar from '../../../components/Navbar/Navbar';
import CreditAndDebit from '../../../containers/Payment/CreditAndDebit/CreditAndDebit';
import PaymentOther from '../../../containers/Payment/PaymentOther/PaymentOther';
import Voucher from '../../../containers/Payment/Voucher/Voucher';
import PriceDetail from '../../../containers/Payment/PriceDetail/PriceDetail';

function PaymentInformation() {
    return (
        <>
            <IonContent fullscreen>
                <div className='paymentInformationContainer'>
                    <Navbar title="Phương thức thanh toán" />
                    <h1 className='confirmTitle'>Credit hoặc Debit Card</h1>
                    <CreditAndDebit />
                    <h1 className='confirmTitle'>Phương thức khác</h1>
                    <PaymentOther />
                    <h1 className='confirmTitle'>Mã giảm giá</h1>
                    <Voucher />
                    <div className='priceDetail' style={{ marginTop: '50px' }}>
                        <div className='priceItem'>
                            <h1 className='contentTextTotal'>Tổng: </h1>
                            <h1 className='contentText'>8.638.920 VND</h1>
                        </div>
                        <div className='priceItem' style={{ marginTop: '-8px' }}>
                            <h1 className='contentText'>Giảm</h1>
                            <h1 className='contentTextDiscount'>-200.000 VND</h1>
                        </div>
                        <div className='confirmPaymentLine' />
                        <div className='totalPrice'>
                            <h1 className='totalText'>Tổng thanh toán: </h1>
                            <h1 className='totalPrice'>8.438.920 VND</h1>
                        </div>
                    </div>
                    <button className='buttonConfirm'>Tiếp tục</button>
                </div>
            </IonContent>
        </>
    );
}

export default PaymentInformation;