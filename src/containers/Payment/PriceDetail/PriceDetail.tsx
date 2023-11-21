import React from 'react';
import './PriceDetail.css'

function PriceDetail() {
    return (
        <>
            <div className='priceDetail'>
                <div className='priceItem'>
                    <h1 className='contentText'>1 phòng x 5 đêm</h1>
                    <h1 className='contentText'>7.999.000 VND</h1>
                </div>
                <div className='priceItem' style={{ marginTop: '-8px' }}>
                    <h1 className='contentText'>Thuế và phí (8%)</h1>
                    <h1 className='contentText'>639.920 VND</h1>
                </div>
                <div className='confirmPaymentLine' />
                <div className='totalPrice'>
                    <h1 className='totalText'>Tổng: </h1>
                    <h1 className='totalPrice'>8.638.920 VND</h1>
                </div>
            </div>
        </>
    );
}

export default PriceDetail;