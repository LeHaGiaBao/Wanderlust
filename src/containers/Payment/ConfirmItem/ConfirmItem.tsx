import React from 'react';
import './ConfirmItem.css'
import { Star1 } from 'iconsax-react'

function ConfirmItem() {
    return (
        <>
            <div className='confirmItem'>
                <div className='itemImage'>
                    <img alt="informationImage" className='informationImage' src="https://cf.bstatic.com/xdata/images/hotel/max1024x768/440883750.jpg?k=d77eeee06e1479104697a6d0748eedf6822684b194c3b56148d5e34b8eb465d5&o=&hp=1" />
                </div>
                <div className='informationContent'>
                    <h1 className='contentName'>Khu nghỉ dưỡng Vinpearl Wonderwold Phú Quốc</h1>
                    <h1 className='subContentName'>Biệt thự Rose, 1 phòng ngủ lớn</h1>
                    <div className='contentStar'>
                        <Star1 className='starIcon' variant='Bold' />
                        <h1 className='starNumber'>4.8</h1>
                    </div>
                </div>
            </div>
        </>
    );
}

export default ConfirmItem;