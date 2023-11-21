import React from 'react';
import './ProfileComplete.css'
import { IonContent } from '@ionic/react';
import { ArrowCircleLeft } from 'iconsax-react'

function ProfileComplete() {
    return (
        <>
            <IonContent fullscreen>
                <div className='profileCompleteContainer'>
                    <div className='backContainer'>
                        <ArrowCircleLeft className='iconBack' />
                        <div className='textBack'>Quay lại</div>
                    </div>
                    <div className='profileCompleteHeader'>
                        <h1 className='profileCompleteTitle'>Thông tin cá nhân</h1>
                        <h2 className='profileCompleteSubTitle'>Thêm các thông tin cá nhân cần thiết của bạn</h2>
                    </div>
                    <form className='formInput'>
                        <div className='inputField'>
                            <label className='labelText'>Họ và tên</label>
                            <input id='name' type='text' className='inputData' />
                        </div>
                        <div className='inputField passwordField'>
                            <label className='labelText'>Email</label>
                            <input id='email' type='email' className='inputData' />
                        </div>
                        <div className='inputField passwordField'>
                            <label className='labelText'>Số điện thoại</label>
                            <input id='phone' type='text' className='inputData' />
                        </div>
                        <div className='inputField passwordField'>
                            <label className='labelText'>Số điện thoại</label>
                            <input id='phone' type='text' className='inputData' />
                        </div>
                        <div className='inputField passwordField'>
                            <label className='labelText'>Ngày sinh</label>
                            <input id='date' type='text' className='inputData' />
                        </div>
                        <div className='inputField passwordField'>
                            <label className='labelText'>Mật khẩu</label>
                            <input id='password' type='password' className='inputData' />
                        </div>
                        <div className='inputField passwordField'>
                            <label className='labelText'>Nhập lại mật khẩu</label>
                            <input id='repassword' type='password' className='inputData' />
                        </div>
                        <div className='subFooter'>
                            Bằng cách chọn
                            {' '}
                            <span className='registerText'>Đồng ý và Tiếp tục</span>
                            , tôi đồng ý với
                            {' '}
                            <span className='registerTextUnderline'>Điều khoản dịch vụ</span>
                            {' '}
                            của
                            {' '}
                            <span className='registerText'>Wanderlust</span>
                        </div>
                        <button className='buttonInput'>Đồng ý và tiếp tục</button>
                    </form>
                </div>
            </IonContent>
        </>
    );
}

export default ProfileComplete;