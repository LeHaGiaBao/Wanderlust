import React from 'react';
import './HomeNavBar.css'
import { GoBell } from "react-icons/go";

function HomeNavBar() {
    return (
        <>
            <div className='homeNavbar'>
                <div className='homeAvatarAndContent'>
                    <img src="https://img.freepik.com/premium-vector/portrait-teenage-girl-women-cute-characters-cartoon-style-social-network-avatar-template_411588-1268.jpg?w=360" alt="avatar" className='avatar' />
                    <div className='homeNavbarContent'>
                        <h1 className='titleHomeHello'>Xin chào</h1>
                        <h1 className='subTitleHomeHello'>Hôm nay bạn muốn đi đâu?</h1>
                    </div>
                </div>
                <div className='homeNotification'>
                    <GoBell className='iconBell' />
                </div>
            </div>
        </>
    );
}

export default HomeNavBar;