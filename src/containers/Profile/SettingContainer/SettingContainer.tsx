import React from 'react';
import './SettingContainer.css'
import { IoIosArrowDropright } from "react-icons/io";
import { CgProfile } from "react-icons/cg";
import { IoWalletOutline } from "react-icons/io5";
import { LiaKeySolid } from "react-icons/lia";

function SettingContainer() {
    return (
        <>
            <div className='featureContainer'>
                <div className='feature'>
                    <CgProfile className='featureIcon' />
                    <h1 className='featureContent'>Thông tin cá nhân</h1>
                    <IoIosArrowDropright className='arrowRight' />
                </div>
                <div className='feature'>
                    <IoWalletOutline className='featureIcon' />
                    <h1 className='featureContent'>Phương thức thanh toán</h1>
                    <IoIosArrowDropright className='arrowRight' />
                </div>
                <div className='feature'>
                    <LiaKeySolid className='featureIcon' />
                    <h1 className='featureContent'>Đổi mật khẩu</h1>
                    <IoIosArrowDropright className='arrowRight' />
                </div>
            </div>
        </>
    );
}

export default SettingContainer;