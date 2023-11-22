import React from 'react';
import './ProfileNavbar.css'
import { ArrowRight2 } from 'iconsax-react'
import { IoIosArrowForward } from "react-icons/io";

function ProfileNavbar() {
    return (
        <>
            <div className='profileNavbar'>
                <div className='profileAvatarContent'>
                    <img className='avatarProfile' src="https://img.freepik.com/premium-vector/portrait-teenage-girl-women-cute-characters-cartoon-style-social-network-avatar-template_411588-1268.jpg?w=360" alt="avatar" />
                    <div className='profileNavbarContent'>
                        <h1 className='titleName'>Nguyễn Thị Mỹ Duyên</h1>
                        <h1 className='subTitleName'>Xem trang cá nhân của bạn</h1>
                    </div>
                </div>
                <div className='profileButton'>
                    <ArrowRight2 className='iconArrow' />
                </div>
            </div>
        </>
    );
}

export default ProfileNavbar;