import React from 'react';
import './BookingFindNavbar.css'
import { IoIosArrowDropleft } from "react-icons/io";

function BookingFindNavbar() {
    return (
        <>
            <div className='navBarContainer'>
                <div className='iconBack'>
                    <IoIosArrowDropleft className='iconArrowBack' />
                </div>
                <h1 className='navBarTitle'>Kết quả tìm kiếm</h1>
                <div className='iconBackItem'>
                </div>
            </div>
        </>
    );
}

export default BookingFindNavbar;