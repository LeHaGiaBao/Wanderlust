import React from 'react';
import './HotelDetail.css'
import { IonContent } from '@ionic/react';
import {
    ExportCurve,
    Heart,
    Star1,
    Location,
    Map1,
    Wifi,

} from 'iconsax-react'
import { IoIosArrowDropleft, } from "react-icons/io";
import { CiForkAndKnife } from "react-icons/ci";
import { FaUmbrellaBeach } from "react-icons/fa";
import { LuParkingCircle } from "react-icons/lu";
import { TbSwimming } from "react-icons/tb";
import { LuCupSoda } from "react-icons/lu";
import { useHistory } from 'react-router';
import CustomerInfor from '../../../containers/Payment/CustomerInfor/CustomerInfor';

function HotelDetail() {
    const history = useHistory()

    return (
        <>
            <IonContent fullscreen>
                <div className='hotelDetailContainer'>
                    <div className='detailNavbar'>
                        <div className='icon' onClick={() => history.push('/booking')}>
                            <IoIosArrowDropleft className='iconClass' />
                        </div>
                        <div className='flexContainerHotelDetail'>
                            <div className='icon'>
                                <ExportCurve className='iconClass' />
                            </div>
                            <div className='icon'>
                                <Heart className='iconHeart' variant='Bold' />
                            </div>
                        </div>
                    </div>
                    <div className='hotelDetailNavbar'>
                        <h1 className='detailName'>Khu nghỉ dưỡng Vinpearl Wonderwold Phú Quốc</h1>
                    </div>
                    <div className='detailLocation'>
                        <div className='voteContainer'>
                            <div className='contentStar'>
                                <Star1 className='starIcon' variant='Bold' />
                                <h1 className='starNumber'>4.8</h1>
                                <h1 className='starContent'>(4.5k Lượt đánh giá)</h1>
                            </div>
                            <div className='contentStar'>
                                <Location className='locationIcon' variant='Bold' />
                                <h1 className='starContent' style={{ marginTop: '5px', marginLeft: '2px' }}>Phú Quốc, Kiên Giang, Việt Nam</h1>
                            </div>
                        </div>
                        <div className='mapItem' style={{ marginTop: '7px' }}>
                            <Map1 className='mapIcon' />
                            <h1 className='mapContent'>Chỉ đường</h1>
                        </div>
                    </div>
                    <div className='serviceItem'>
                        <div className='serviceTitle'>
                            <h1 className='titleServiceName'>Tiện nghi</h1>
                            <h1 className='titleServiceAll'>Xem tất cả</h1>
                        </div>
                        <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', marginTop: '10px' }}>
                            <div className='itemFlex'>
                                <Wifi className='itemFlexIcon' />
                                <h1 className='itemFlexTitle'>Wifi</h1>
                            </div>
                            <div className='itemFlex'>
                                <CiForkAndKnife className='itemFlexIcon' />
                                <h1 className='itemFlexTitle'>Nhà hàng</h1>
                            </div>
                            <div className='itemFlex'>
                                <FaUmbrellaBeach className='itemFlexIcon' />
                                <h1 className='itemFlexTitle'>Bãi biển riêng tư</h1>
                            </div>
                        </div>
                        <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', marginTop: '10px' }}>
                            <div className='itemFlex'>
                                <LuParkingCircle className='itemFlexIcon' />
                                <h1 className='itemFlexTitle'>Bãi đậu xe</h1>
                            </div>
                            <div className='itemFlex'>
                                <TbSwimming className='itemFlexIcon' />
                                <h1 className='itemFlexTitle'>Hồ bơi</h1>
                            </div>
                            <div className='itemFlex'>
                                <LuCupSoda className='itemFlexIcon' />
                                <h1 className='itemFlexTitle'>Quán Bar</h1>
                            </div>
                        </div>
                    </div>
                    <h1 className='generalTitle'>Tổng quan</h1>
                    <p className='generalContent'>
                        Nằm trên đảo Phú Quốc, cách Bãi Dài 700m, Vinpearl Wonderworld Phu Quoc cung cấp chỗ nghỉ với hồ bơi ngoài trời, chỗ đỗ xe riêng miễn phí, trung tâm thể dục và khu vườn. Resort 5 sao này có...
                        {' '}
                        <span className='seeAllTitle'>Xem thêm</span>
                    </p>
                    <h1 className='generalTitle'>Thông tin đặt phòng</h1>
                    <div style={{ padding: '0 16px' }}>
                        <CustomerInfor />
                    </div>
                </div>
            </IonContent>
        </>
    );
}

export default HotelDetail;