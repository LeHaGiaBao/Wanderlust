import React from 'react';
import './Voucher.css'
import { TicketDiscount, ArrowCircleRight } from 'iconsax-react'

function Voucher() {
    return (
        <>
            <div className='voucherContainer'>
                <div className='voucherInfor'>
                    <TicketDiscount className='voucherIcon' />
                    <h1 className='voucherName'>Giảm 200.000 VND</h1>
                </div>
                <ArrowCircleRight className='arrowRight' />
            </div>
        </>
    );
}

export default Voucher;