import React from 'react';
import './ButtonNavigation.css'
import { FiHeart } from "react-icons/fi";
import { BiMessageAltDots } from "react-icons/bi";
import { GoBell } from "react-icons/go";

function ButtonNavigation() {
    return (
        <>
            <div className='buttonNavigation'>
                <div className='btnNavContainer'>
                    <div className='btnIcon'>
                        <FiHeart className='btnIconClass' />
                    </div>
                    <h1 className='btnContent'>Đã lưu</h1>
                </div>
                <div className='btnNavContainer'>
                    <div className='btnIcon'>
                        <BiMessageAltDots className='btnIconClass' />
                    </div>
                    <h1 className='btnContent'>Tin nhắn</h1>
                </div>
                <div className='btnNavContainer'>
                    <div className='btnIcon'>
                        <GoBell className='btnIconClass' />
                    </div>
                    <h1 className='btnContent'>Thông báo</h1>
                </div>
            </div>
        </>
    );
}

export default ButtonNavigation;