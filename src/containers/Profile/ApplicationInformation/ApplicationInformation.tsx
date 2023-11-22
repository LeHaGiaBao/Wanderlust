import React from 'react';
import './ApplicationInformation.css'
import {
    MessageQuestion,
    SecuritySafe,
    DirectboxNotif,
    ArrowCircleRight
} from 'iconsax-react'

function ApplicationInformation() {
    return (
        <>
            <div className='featureContainer'>
                <div className='feature'>
                    <MessageQuestion className='featureIcon' />
                    <h1 className='featureContent'>Trung tâm hỗ trợ</h1>
                    <ArrowCircleRight className='arrowRight' />
                </div>
                <div className='feature'>
                    <SecuritySafe className='featureIcon' />
                    <h1 className='featureContent'>Chính sách bảo mật</h1>
                    <ArrowCircleRight className='arrowRight' />
                </div>
                <div className='feature'>
                    <DirectboxNotif className='featureIcon' />
                    <h1 className='featureContent'>Điều khoản dịch vụ</h1>
                    <ArrowCircleRight className='arrowRight' />
                </div>
                <div className='feature'>
                    <div className='featureIconAboutUs'>W</div>
                    <h1 className='featureContent'>Về chúng tôi</h1>
                    <ArrowCircleRight className='arrowRight' />
                </div>
            </div>
        </>
    );
}

export default ApplicationInformation;