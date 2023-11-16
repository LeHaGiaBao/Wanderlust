import React from 'react';
import './ListDestination.css'
import { MdLocationOn } from "react-icons/md";
import { AiOutlineHeart } from "react-icons/ai";

function ListDestination() {
    return (
        <>
            <div className='listDestination'>
                <div className="destination">
                    <img alt='imageDestination' className='imageDestination' src="https://www.centralcons.vn/wp-content/uploads/2022/04/vinwonders-phu-quoc-vinpearl-theme-parks-46333000.gif" />
                    <div className='destinationContent'>
                        <div className='destinationText'>
                            <h1 className='destinationName'>Thuỷ cung Vinpearl</h1>
                            <div className='destinationLocation'>
                                <MdLocationOn className='locationIcon' />
                                <h1 className='locationName'>Phú Quốc, Việt Nam</h1>
                            </div>
                        </div>
                        <div className='heartIconContainer'>
                            <AiOutlineHeart className='heartIcon' />
                        </div>
                    </div>
                </div>
                <div className="destination">
                    <img alt='imageDestination' className='imageDestination' src="https://i0.wp.com/datvandon.net/wp-content/uploads/2019/11/vinh-ha-long-o-tinh-nao-viet-nam.jpeg?fit=960%2C720&ssl=1" />
                    <div className='destinationContent'>
                        <div className='destinationText'>
                            <h1 className='destinationName'>Vịnh Hạ Long</h1>
                            <div className='destinationLocation'>
                                <MdLocationOn className='locationIcon' />
                                <h1 className='locationName'>Quảng Ninh, Việt Nam</h1>
                            </div>
                        </div>
                        <div className='heartIconContainer'>
                            <AiOutlineHeart className='heartIcon' />
                        </div>
                    </div>
                </div>
                <div className="destination">
                    <img alt='imageDestination' className='imageDestination' src="https://www.arttravel.com.vn/upload/news/hoi-an-7269-6259.jpg" />
                    <div className='destinationContent'>
                        <div className='destinationText'>
                            <h1 className='destinationName'>Phố cổ Hội An</h1>
                            <div className='destinationLocation'>
                                <MdLocationOn className='locationIcon' />
                                <h1 className='locationName'>Quảng Nam, Việt Nam</h1>
                            </div>
                        </div>
                        <div className='heartIconContainer'>
                            <AiOutlineHeart className='heartIcon' />
                        </div>
                    </div>
                </div>
                <div className="destination">
                    <img alt='imageDestination' className='imageDestination' src="https://upload.wikimedia.org/wikipedia/commons/c/c7/TLTY2.jpg" />
                    <div className='destinationContent'>
                        <div className='destinationText'>
                            <h1 className='destinationName'>Thung lũng Tình Yêu</h1>
                            <div className='destinationLocation'>
                                <MdLocationOn className='locationIcon' />
                                <h1 className='locationName'>Đà Lạt, Việt Nam</h1>
                            </div>
                        </div>
                        <div className='heartIconContainer'>
                            <AiOutlineHeart className='heartIcon' />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default ListDestination;