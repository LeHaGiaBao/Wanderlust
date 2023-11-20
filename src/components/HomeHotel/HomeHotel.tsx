import React from 'react';
import './HomeHotel.css'
import {
    Star1,
    Location,
    Heart
} from 'iconsax-react'

interface HomeHotel {
    image: any,
    name: any,
    star: any,
    location: any
}

function HomeHotel({ image, name, star, location }: HomeHotel) {
    return (
        <>
            <div className='homeHotel'>
                <img alt="hotel" className='hotelImage' src={image} />
                <div className='hotelNameContent'>
                    <h1 className='hotelName'>{name}</h1>
                    <div className='hotelStar'>
                        <Star1 className='starIcon' variant="Bold" />
                        <h1 className='starNumber'>{star}</h1>
                    </div>
                    <div className='hotelLocation'>
                        <Location className='locationIcon' variant="Bold" />
                        <h1 className='locationName'>{location}</h1>
                    </div>
                </div>
                <Heart className='heartIconHotel' />
            </div>
        </>
    );
}

export default HomeHotel;