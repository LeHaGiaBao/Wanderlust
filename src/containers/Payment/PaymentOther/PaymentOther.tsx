import React from 'react';
import './PaymentOther.css'
import { IoMdRadioButtonOff } from "react-icons/io";

function PaymentOther() {
    return (
        <>
            <div className='creditCard'>
                <div className='paymentInfor'>
                    <img className='cardLogoImage' src="https://upload.wikimedia.org/wikipedia/vi/f/fe/MoMo_Logo.png" alt="" />
                    <h1 className='paymentName'>Momo</h1>
                </div>
                <IoMdRadioButtonOff className='radioButtonUncheck' />
            </div>
            <div className='creditCard' style={{ marginTop: '8px' }}>
                <div className='paymentInfor'>
                    <img className='cardLogoImage' src="https://cdn.haitrieu.com/wp-content/uploads/2022/10/Logo-ZaloPay-Square.png" alt="" />
                    <h1 className='paymentName'>Zalopay</h1>
                </div>
                <IoMdRadioButtonOff className='radioButtonUncheck' />
            </div>
            <div className='creditCard' style={{ marginTop: '8px' }}>
                <div className='paymentInfor'>
                    <img className='cardLogoImage' src="https://cdn.haitrieu.com/wp-content/uploads/2022/10/Icon-VNPAY-QR.png" alt="" />
                    <h1 className='paymentName'>VN Pay</h1>
                </div>
                <IoMdRadioButtonOff className='radioButtonUncheck' />
            </div>
        </>
    );
}

export default PaymentOther;