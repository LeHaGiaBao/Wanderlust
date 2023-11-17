import React from 'react';
import './ApplicationInformation.css'
import { IoIosArrowDropright } from "react-icons/io";
import { TbMessage2Question } from "react-icons/tb";
import { IoWalletOutline } from "react-icons/io5";
import { LiaKeySolid } from "react-icons/lia";

function ApplicationInformation() {
    return (
        <>
            <div className='featureContainer'>
                <div className='feature'>
                    <TbMessage2Question className='featureIcon' />
                    <h1 className='featureContent'>Trung tâm hỗ trợ</h1>
                    <IoIosArrowDropright className='arrowRight' />
                </div>
                <div className='feature'>
                    <IoWalletOutline className='featureIcon' />
                    <h1 className='featureContent'>Chính sách bảo mật</h1>
                    <IoIosArrowDropright className='arrowRight' />
                </div>
                <div className='feature'>
                    <LiaKeySolid className='featureIcon' />
                    <h1 className='featureContent'>Điều khoản dịch vụ</h1>
                    <IoIosArrowDropright className='arrowRight' />
                </div>
                <div className='feature'>
                    <div className='featureIconAboutUs'>W</div>
                    <h1 className='featureContent'>Về chúng tôi</h1>
                    <IoIosArrowDropright className='arrowRight' />
                </div>
            </div>
        </>
    );
}

export default ApplicationInformation;