import React from 'react';
import './HomeHotel.css'
import { AiFillStar } from "react-icons/ai";
import { MdLocationOn } from "react-icons/md";
import { AiOutlineHeart } from "react-icons/ai";

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
                        <AiFillStar className='starIcon' />
                        <h1 className='starNumber'>{star}</h1>
                    </div>
                    <div className='hotelLocation'>
                        <MdLocationOn className='locationIcon' />
                        <h1 className='locationName'>{location}</h1>
                    </div>
                </div>
                <AiOutlineHeart className='heartIconHotel' />
            </div>
        </>
    );
}

export default HomeHotel;