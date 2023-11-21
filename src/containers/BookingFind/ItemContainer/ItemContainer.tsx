import React from 'react';
import './ItemContainer.css'
import {
    Location,
    Calendar,
    Buildings,
    Profile,
    Pet
} from 'iconsax-react'

function ItemContainer() {
    return (
        <>
            <div className='bookingItemContainer'>
                <div className='itemDesination'>
                    <div className='item'>
                        <Location className='itemIcon' />
                        <h1 className='itemContent'>Phú Quốc, Việt Nam</h1>
                    </div>
                    <div className='item'>
                        <Calendar className='itemIcon' />
                        <h1 className='itemContent'>07-10 tháng 11</h1>
                    </div>
                </div>
                <div className='itemLine' />
                <div className='itemInformation'>
                    <div className='item'>
                        <Buildings className='itemIcon' />
                        <h1 className='itemContent'>1 phòng</h1>
                    </div>
                    <div className='item'>
                        <Profile className='itemIcon' />
                        <h1 className='itemContent'>2 người</h1>
                    </div>
                    <div className='item'>
                        <Profile className='itemIcon' />
                        <h1 className='itemContent'>1 trẻ</h1>
                    </div>
                    <div className='item'>
                        <Pet className='itemIcon' />
                        <h1 className='itemContent'>1 bé</h1>
                    </div>
                </div>
            </div>
        </>
    );
}

export default ItemContainer;