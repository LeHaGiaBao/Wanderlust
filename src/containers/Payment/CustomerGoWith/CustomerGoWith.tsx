import React from 'react';
import './CustomerGoWith.css'

function CustomerGoWith() {
    return (
        <>
            <div className='customerGoWith'>
                <div className='inputField'>
                    <label className='labelText'>Họ tên</label>
                    <input id='name' type='text' className='inputData' placeholder='Tên khách đi cùng' />
                </div>
                <div className='inputField'>
                    <input id='phone' type='text' className='inputData' placeholder='0123456789' />
                </div>
            </div>
        </>
    );
}

export default CustomerGoWith;