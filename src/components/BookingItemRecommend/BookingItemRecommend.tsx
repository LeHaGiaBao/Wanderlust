import React from 'react';
import './BookingItemRecommend.css'
import { TiStarFullOutline } from "react-icons/ti";
import { MdLocationOn } from "react-icons/md";
import { AiOutlineHeart } from "react-icons/ai";

function BookingItemRecommend() {
    return (
        <>
            <div className='bookingItem'>
                <img alt="image" className='itemImage' src="https://dulichvn.org.vn/nhaptin/uploads/images/2022/Thang3/resort-phu-quoc-1.jpg" />
                <div className='itemContent'>
                    <div className='contentItem'>
                        <h1 className='titleHotel'>Khu nghỉ dưỡng Vinpearl Wonderwold Phú Quốc</h1>
                        <div className='hotelStar'>
                            <TiStarFullOutline className='hotelStarIcon' />
                            <h1 className='hotelStarNumber'>4.8</h1>
                        </div>
                        <div className='hotelLocation'>
                            <MdLocationOn className='hotelLocationIcon' />
                            <h1 className='hotelLocationName'>Phú Quốc, Kiên Giang, Việt Nam</h1>
                        </div>
                    </div>
                    <div className='heartIconContainer'>
                        <AiOutlineHeart className='heartIcon' />
                    </div>
                </div>
                <div className='bookingLine' />
                <div className='bookingPrice'>
                    <h1 className='pricebooking'>7.999.000 {''}VND</h1>
                    <div className='discout'>
                        <h1 className='pricebookingDiscount'>-32{''}%</h1>
                    </div>
                </div>
            </div>
        </>
    );
}

export default BookingItemRecommend;