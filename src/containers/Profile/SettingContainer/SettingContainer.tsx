import React from 'react';
import './SettingContainer.css'
import {
    ProfileCircle,
    EmptyWallet,
    Key,
    ArrowCircleRight
} from 'iconsax-react'

function SettingContainer() {
    return (
        <>
            <div className='featureContainer'>
                <div className='feature'>
                    <ProfileCircle className='featureIcon' />
                    <h1 className='featureContent'>Thông tin cá nhân</h1>
                    <ArrowCircleRight className='arrowRight' />
                </div>
                <div className='feature'>
                    <EmptyWallet className='featureIcon' />
                    <h1 className='featureContent'>Phương thức thanh toán</h1>
                    <ArrowCircleRight className='arrowRight' />
                </div>
                <div className='feature'>
                    <Key className='featureIcon' />
                    <h1 className='featureContent'>Đổi mật khẩu</h1>
                    <ArrowCircleRight className='arrowRight' />
                </div>
            </div>
        </>
    );
}

export default SettingContainer;