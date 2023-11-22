import React from 'react';
import './ButtonNavigation.css'
import {
    Heart,
    Message,
    Notification
} from 'iconsax-react'

function ButtonNavigation() {
    return (
        <>
            <div className='buttonNavigation'>
                <div className='btnNavContainer'>
                    <div className='btnIcon'>
                        <Heart className='btnIconClass' />
                    </div>
                    <h1 className='btnContent'>Đã lưu</h1>
                </div>
                <div className='btnNavContainer'>
                    <div className='btnIcon'>
                        <Message className='btnIconClass' />
                    </div>
                    <h1 className='btnContent'>Tin nhắn</h1>
                </div>
                <div className='btnNavContainer'>
                    <div className='btnIcon'>
                        <Notification className='btnIconClass' />
                    </div>
                    <h1 className='btnContent'>Thông báo</h1>
                </div>
            </div>
        </>
    );
}

export default ButtonNavigation;