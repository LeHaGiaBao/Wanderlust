import React from 'react';
import './CustomerInfor.css'
import {
    LoginCurve,
    LogoutCurve,
    Buildings,
    Profile,
    Pet
} from 'iconsax-react'

function CustomerInfor() {
    return (
        <>
            <div className='customerInforContainer'>
                <div className='checkInfor'>
                    <div className='containerItem'>
                        <LoginCurve className='inforIcon' />
                        <div className='checkContainer'>
                            <h1 className='checkTitle'>Check in</h1>
                            <h1 className='checkTime'>2:00 PM, Thứ 3, 07/11</h1>
                        </div>
                    </div>
                    <div className='containerItem'>
                        <LogoutCurve className='inforIcon' />
                        <div className='checkContainer'>
                            <h1 className='checkTitle'>Check out</h1>
                            <h1 className='checkTime'>12:00 PM, CN, 10/11</h1>
                        </div>
                    </div>
                </div>
                <div className='checkLine' />
                <div className='itemInformation'>
                    <div className='item'>
                        <Buildings className='itemIcon' />
                        <h1 className='itemContent'>1 phòng</h1>
                    </div>
                    <div className='item'>
                        <Profile className='itemIcon' />
                        <h1 className='itemContent'>2 người</h1>
                    </div>
                    <div className='item'>
                        <Profile className='itemIcon' />
                        <h1 className='itemContent'>1 trẻ</h1>
                    </div>
                    <div className='item'>
                        <Pet className='itemIcon' />
                        <h1 className='itemContent'>1 bé</h1>
                    </div>
                </div>
            </div>
        </>
    );
}

export default CustomerInfor;