import React from 'react';
import './HeadingTitle.css'

function HeadingTitle({ title }: any) {
    return (
        <>
            <div className='headingTitle'>
                <h1 className='title'>{title}</h1>
                <h1 className='seeAll'>Xem tất cả</h1>
            </div>
        </>
    );
}

export default HeadingTitle;