import React from 'react';
import './FeatureContainer.css'
import { IoIosArrowDropright } from "react-icons/io";
import { BsBuildingFill } from "react-icons/bs";
import { PiAirplaneTiltFill } from "react-icons/pi";
import { BiSolidDiscount } from "react-icons/bi";

function FeatureContainer() {
    return (
        <>
            <div className='featureContainer'>
                <div className='feature'>
                    <BsBuildingFill className='featureIcon' />
                    <h1 className='featureContent'>Đặt phòng của tôi</h1>
                    <IoIosArrowDropright className='arrowRight' />
                </div>
                <div className='feature'>
                    <PiAirplaneTiltFill className='featureIcon' />
                    <h1 className='featureContent'>Chuyến bay của tôi</h1>
                    <IoIosArrowDropright className='arrowRight' />
                </div>
                <div className='feature'>
                    <BiSolidDiscount className='featureIcon' />
                    <h1 className='featureContent'>Mã giảm giá</h1>
                    <IoIosArrowDropright className='arrowRight' />
                </div>
            </div>
        </>
    );
}

export default FeatureContainer;