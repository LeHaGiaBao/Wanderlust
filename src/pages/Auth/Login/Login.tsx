import React from 'react';
import './Login.css'
import { IonContent } from '@ionic/react';
import { FaGoogle, FaFacebookF } from "react-icons/fa";

function Login() {
    return (
        <>
            <IonContent fullscreen>
                <div className='loginContainer'>
                    <div className='loginHeader'>
                        <h1 className='loginTitle'>Đăng nhập</h1>
                        <h2 className='loginSubTitle'>Chào mừng bạn đến với Wanderlust!</h2>
                    </div>
                    <form className='formInput'>
                        <div className='inputField'>
                            <label className='labelText'>Email / Số điện thoại</label>
                            <input id='email' type='email' className='inputData' />
                        </div>
                        <div className='inputField passwordField'>
                            <label className='labelText'>Mật khẩu</label>
                            <input id='password' type='password' className='inputData' />
                            <p className='forgotPassword'>Quên mật khẩu</p>
                        </div>
                        <button className='buttonInput'>Đăng nhập</button>
                    </form>
                    <div className='orContainer'>
                        <div className='borderLine' />
                        <p className='orText'>Hoặc</p>
                        <div className='borderLine' />
                    </div>
                    <div className='socialContainer'>
                        <div className='socialButton'>
                            <FaGoogle className='iconColor' />
                        </div>
                        <div className='socialButton'>
                            <FaFacebookF className='iconColor' />
                        </div>
                    </div>
                    <div className='subFooter'>
                        Bạn chưa có tài khoản?
                        {' '}
                        <span className='registerText'>Đăng ký ngay</span>
                    </div>
                </div>
            </IonContent>
        </>
    );
}

export default Login;