import React from 'react';
import './HomeDestination.css'
import { MdLocationOn } from "react-icons/md";
import { AiOutlineHeart } from "react-icons/ai";

interface HomeDestination {
    image: any,
    name: any,
    location: any,
}

function HomeDestination({ image, name, location }: HomeDestination) {
    return (
        <>
            <div className="destination">
                <img alt='imageDestination' className='imageDestination' src={image} />
                <div className='destinationContent'>
                    <div className='destinationText'>
                        <h1 className='destinationName'>{name}</h1>
                        <div className='destinationLocation'>
                            <MdLocationOn className='locationIcon' />
                            <h1 className='locationName'>{location}</h1>
                        </div>
                    </div>
                    <div className='heartIconContainer'>
                        <AiOutlineHeart className='heartIcon' />
                    </div>
                </div>
            </div>
        </>
    );
}

export default HomeDestination;