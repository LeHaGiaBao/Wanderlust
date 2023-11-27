import React from 'react';
import './HeadingTitle.css'
import { useHistory } from 'react-router';

function HeadingTitle({ title, link }: any) {
    const history = useHistory()

    return (
        <>
            <div className='headingTitle'>
                <h1 className='title'>{title}</h1>
                <h1 className='seeAll' onClick={() => history.push(`/${link}`)}>Xem tất cả</h1>
            </div>
        </>
    );
}

export default HeadingTitle;