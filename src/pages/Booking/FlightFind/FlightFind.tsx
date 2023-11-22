import React from 'react';
import './FlightFind.css'
import { IonContent } from '@ionic/react';
import Navbar from '../../../components/Navbar/Navbar';
import { LuPlaneTakeoff } from "react-icons/lu";
import { Edit, Calendar, Profile } from 'iconsax-react'
import FlightItem from '../../../components/FlightItem/FlightItem';

function FlightFind() {
    return (
        <>
            <IonContent fullscreen>
                <div className='flightFindContainer'>
                    <Navbar title="Kết quả tìm kiếm" />
                    <div className='flightFindRecommend'>
                        <div className='recommendHeader'>
                            <div className='headerRecommend'>
                                <LuPlaneTakeoff className='iconFlight' />
                                <h1 className='flightDestination'>TP Hồ Chí Minh đến Phú Quốc</h1>
                            </div>
                            <Edit className='iconFlight' variant='Bold' />
                        </div>
                        <div className='line' />
                        <div className='footerRecommend'>
                            <div className='headerRecommend'>
                                <Calendar className='iconFlight' />
                                <h1 className='flightDestination'>Thứ 3, 07 tháng 11</h1>
                            </div>
                            <div className='headerRecommend'>
                                <Profile className='iconFlight' />
                                <h1 className='flightDestination'>2 khách</h1>
                            </div>
                        </div>
                    </div>
                    <div className='listFight'>
                        <FlightItem />
                        <FlightItem />
                        <FlightItem />
                        <FlightItem />
                        <FlightItem />
                    </div>
                </div>
            </IonContent>
        </>
    );
}

export default FlightFind;