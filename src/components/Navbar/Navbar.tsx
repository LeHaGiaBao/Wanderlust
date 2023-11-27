import React from 'react';
import './Navbar.css'
import { IoIosArrowDropleft } from "react-icons/io";
import { useHistory } from 'react-router';

function Navbar({ title, link }: any) {
    const history = useHistory()

    return (
        <>
            <div className='navBarContainer'>
                <div className='iconBack' onClick={() => history.push(`/${link}`)}>
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