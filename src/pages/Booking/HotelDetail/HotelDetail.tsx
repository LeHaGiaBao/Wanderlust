import React from 'react';
import './HotelDetail.css'
import { IonContent } from '@ionic/react';
import { IoIosArrowDropleft } from "react-icons/io";

function HotelDetail() {
    return (
        <>
            <IonContent fullscreen>
                <div className='detailHeader'>
                    <img className='imageDetailHeader' src="https://cdn.vntrip.vn/cam-nang/wp-content/uploads/2021/03/kinh-nghiem-di-vinpearl-phu-quoc-1.jpg" alt="" />
                    <div className='detailNavbar'>
                        <div className='icon'>
                            <IoIosArrowDropleft className='iconClass' />
                        </div>
                        <div className=''>

                        </div>
                    </div>
                </div>
                <div className='hotelDetailContainer'>

                </div>
            </IonContent>
        </>
    );
}

export default HotelDetail;