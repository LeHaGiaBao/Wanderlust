import React from 'react';
import './HomeDestination.css'
import {
    Location,
    Heart
} from 'iconsax-react'

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
                            <Location className='locationIcon' variant="Bold" />
                            <h1 className='locationName'>{location}</h1>
                        </div>
                    </div>
                    <div className='heartIconContainer'>
                        <Heart className='heartIcon' size="20" />
                    </div>
                </div>
            </div>
        </>
    );
}

export default HomeDestination;