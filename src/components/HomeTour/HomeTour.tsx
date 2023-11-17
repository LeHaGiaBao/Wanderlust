import React from 'react';
import './HomeTour.css'
import { MdLocationOn } from "react-icons/md";
import { AiOutlineHeart } from "react-icons/ai";

interface HomeTour {
    image: any,
    name: any,
    location: any,
    price: any,
    discount: any,
}

function HomeTour({ image, name, location, price, discount }: HomeTour) {
    return (
        <>
            <div className="Tour">
                <img alt='imageTour' className='imageTour' src={image} />
                <div className='TourContent'>
                    <div className='TourText'>
                        <h1 className='TourName'>{name}</h1>
                        <div className='TourLocation'>
                            <MdLocationOn className='locationIcon' />
                            <h1 className='locationName'>{location}</h1>
                        </div>
                    </div>
                    <div className='heartIconContainer'>
                        <AiOutlineHeart className='heartIcon' />
                    </div>
                </div>
                <div className='tourLine' />
                <div className='TourPrice'>
                    <h1 className='priceTour'>{price} {''}VND</h1>
                    <div className='discout'>
                        <h1 className='priceTourDiscount'>-{discount}{''}%</h1>
                    </div>
                </div>
            </div>
        </>
    );
}

export default HomeTour;