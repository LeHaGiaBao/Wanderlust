import React from 'react';
import './ItemContainer.css'
import { MdOutlinePlace } from "react-icons/md";
import { BsCalendar4Week } from "react-icons/bs";
import { RiHotelLine } from "react-icons/ri";
import { BsPerson } from "react-icons/bs";
import { MdPets } from "react-icons/md";

function ItemContainer() {
    return (
        <>
            <div className='bookingItemContainer'>
                <div className='itemDesination'>
                    <div className='item'>
                        <MdOutlinePlace className='itemIcon' />
                        <h1 className='itemContent'>Phú Quốc, Việt Nam</h1>
                    </div>
                    <div className='item'>
                        <BsCalendar4Week className='itemIcon' />
                        <h1 className='itemContent'>07-10 tháng 11</h1>
                    </div>
                </div>
                <div className='itemLine' />
                <div className='itemInformation'>
                    <div className='item'>
                        <RiHotelLine className='itemIcon' />
                        <h1 className='itemContent'>1 phòng</h1>
                    </div>
                    <div className='item'>
                        <BsPerson className='itemIcon' />
                        <h1 className='itemContent'>2 người</h1>
                    </div>
                    <div className='item'>
                        <BsPerson className='itemIcon' />
                        <h1 className='itemContent'>1 trẻ</h1>
                    </div>
                    <div className='item'>
                        <MdPets className='itemIcon' />
                        <h1 className='itemContent'>1 bé</h1>
                    </div>
                </div>
            </div>
        </>
    );
}

export default ItemContainer;