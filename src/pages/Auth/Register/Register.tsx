import React from 'react';
import './Register.css'
import { IonContent } from '@ionic/react';

function Register() {
    return (
        <>
            <IonContent fullscreen>
                <div className='registerContainer'>
                    <div className='loginHeader'>
                        <h1 className='loginTitle'>Đăng ký</h1>
                        <h2 className='loginSubTitle'>Chào mừng bạn đến với Wanderlust!</h2>
                    </div>
                    <form className='formInput'>
                        <div className='inputField'>
                            <label className='labelText'>Số điện thoại</label>
                            <input id='email' type='email' className='inputData' />
                        </div>
                        <button className='buttonInput'>Đăng ký</button>
                    </form>
                    <div className='subFooter'>
                        Bạn đã có tài khoản?
                        {' '}
                        <span className='registerText'>Đăng nhập</span>
                    </div>
                </div>
            </IonContent>
        </>
    );
}

export default Register;