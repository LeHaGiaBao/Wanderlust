import React from 'react';
import './FeatureContainer.css'
import {
    Buliding,
    Airplane,
    TicketDiscount,
    ArrowCircleRight
} from 'iconsax-react'

function FeatureContainer() {
    return (
        <>
            <div className='featureContainer'>
                <div className='feature'>
                    <Buliding className='featureIcon' variant='Bold' />
                    <h1 className='featureContent'>Đặt phòng của tôi</h1>
                    <ArrowCircleRight className='arrowRight' />
                </div>
                <div className='feature'>
                    <Airplane className='featureIcon' variant='Bold' />
                    <h1 className='featureContent'>Chuyến bay của tôi</h1>
                    <ArrowCircleRight className='arrowRight' />
                </div>
                <div className='feature'>
                    <TicketDiscount className='featureIcon' variant='Bold' />
                    <h1 className='featureContent'>Mã giảm giá</h1>
                    <ArrowCircleRight className='arrowRight' />
                </div>
            </div>
        </>
    );
}

export default FeatureContainer;