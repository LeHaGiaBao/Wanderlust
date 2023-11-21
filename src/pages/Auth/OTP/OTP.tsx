import React from 'react';
import './OTP.css'
import { IonContent } from '@ionic/react';
import { ArrowCircleLeft } from 'iconsax-react'

function OTP() {
    return (
        <>
            <IonContent fullscreen>
                <div className='OTPContainer'>
                    <div className='backContainer'>
                        <ArrowCircleLeft className='iconBack' />
                        <div className='textBack'>Quay lại</div>
                    </div>
                    <div className='OTPHeader'>
                        <h1 className='OTPTitle'>Nhập mã OTP</h1>
                        <h2 className='OTPSubTitle'>Nhập mã OTP được gửi về tin nhắn của bạn</h2>
                    </div>
                    <form className='formOTPInput'>
                        <div className='inputOTPField'>
                            <input type='text' inputMode='numeric' maxLength={1} className='inputOTP' />
                            <input type='text' inputMode='numeric' maxLength={1} className='inputOTP' />
                            <input type='text' inputMode='numeric' maxLength={1} className='inputOTP' />
                            <input type='text' inputMode='numeric' maxLength={1} className='inputOTP' />
                            <input type='text' inputMode='numeric' maxLength={1} className='inputOTP' />
                            <input type='text' inputMode='numeric' maxLength={1} className='inputOTP' />

                        </div>

                        <div className='OTPTime'>
                            00:30
                        </div>

                        <button className='buttonInput'>Xác nhận</button>
                    </form>
                    <div className='subFooter'>
                        Bạn chưa nhận được mã OTP?
                        {' '}
                        <br />
                        <span className='registerText'>Gửi lại mã OPT</span>
                    </div>
                </div>
            </IonContent>
        </>
    );
}

export default OTP;