import React from 'react';
import './CreditAndDebit.css'
import { IoMdRadioButtonOn } from "react-icons/io";
import { AddCircle } from 'iconsax-react'

function CreditAndDebit() {
    return (
        <>
            <div className='creditCard'>
                <div className='cardInfor'>
                    <img className='cardLogo' src="https://www.visa.com.au/dam/VCOM/regional/ve/romania/blogs/hero-image/visa-logo-800x450.jpg" alt="" />
                    <h1 className='cardNumber'>**** **** **** 9090</h1>
                </div>
                <IoMdRadioButtonOn className='radioButton' />
            </div>
            <div className='addNewCard'>
                <AddCircle className='addIcon' />
                <h1 className='addTitle'>Thêm thẻ mới</h1>
            </div>
        </>
    );
}

export default CreditAndDebit;