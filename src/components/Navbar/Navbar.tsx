import React from 'react';
import './Navbar.css'
import { IoIosArrowDropleft } from "react-icons/io";

function Navbar({ title }: any) {
    return (
        <>
            <div className='navBarContainer'>
                <div className='iconBack'>
                    <IoIosArrowDropleft className='iconArrowBack' />
                </div>
                <h1 className='navBarTitle'>{title}</h1>
                <div className='iconBackItem'>
                </div>
            </div>
        </>
    );
}

export default Navbar;