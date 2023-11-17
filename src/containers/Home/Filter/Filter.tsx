import React from 'react';
import './Filter.css'

function Filter() {
    return (
        <>
            <div className='filterContainer'>
                <div className='filter'>
                    <div className='filterContentEnable'>
                        <span className='contentEnable'>
                            Tất cả
                        </span>
                    </div>
                    <div className='filterContent'>
                        <span className='content'>
                            Phổ biến
                        </span>
                    </div>
                    <div className='filterContent'>
                        <span className='content'>
                            Gần bạn
                        </span>
                    </div>
                    <div className='filterContent'>
                        <span className='content'>
                            Ghé thăm nhiều nhất
                        </span>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Filter;