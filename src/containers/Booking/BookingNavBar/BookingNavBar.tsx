import React from 'react';
import './BookingNavBar.css'
import { GoBell } from "react-icons/go";

function BookingNavBar() {
    return (
        <>
            <div className='bookingNavbar'>
                <div className='bookingAvatarAndContent'>
                    <img src="https://img.freepik.com/premium-vector/portrait-teenage-girl-women-cute-characters-cartoon-style-social-network-avatar-template_411588-1268.jpg?w=360" alt="avatar" className='avatar' />
                    <div className='bookingNavbarContent'>
                        <h1 className='titleHello'>Xin chào</h1>
                        <h1 className='subTitleHello'>Chọn khách sạn bạn muốn đến!</h1>
                    </div>
                </div>
                <div className='bookingNotification'>
                    <GoBell className='iconBell' />
                </div>
            </div>
        </>
    );
}

export default BookingNavBar;