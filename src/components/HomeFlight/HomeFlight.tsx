import React from 'react';
import './HomeFlight.css'
import { AiOutlineHeart } from "react-icons/ai";

interface HomeFlight {
    image: any,
    name: any,
    date: any,
    priceDiscount: any,
    priceNotDiscount: any,
}

function HomeFlight({ image, name, date, priceDiscount, priceNotDiscount }: HomeFlight) {
    return (
        <>
            <div className='homeflight'>
                <img alt="flight" className='flightImage' src={image} />
                <div className='flightNameContent'>
                    <div className='contentFlight'>
                        <h1 className='flightName'>{name}</h1>
                        <h1 className='flightDate'>{date}</h1>
                        <div className='flightLine' />
                        <div className='flightPrice'>
                            <h1 className='priceDiscount'>{priceDiscount}{''}VND</h1>
                            <h1 className='priceNotDiscount'>{priceNotDiscount}{''}VND</h1>
                        </div>
                    </div>
                </div>
                <AiOutlineHeart className='heartIconflight' />
            </div>
        </>
    );
}

export default HomeFlight;