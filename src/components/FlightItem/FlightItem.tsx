import React from 'react';
import './FlightItem.css'
import { GoPeople } from "react-icons/go";

function FlightItem() {
    return (
        <>
            <div className='flightItem'>
                <div className='flightItemInformation'>
                    <div className='informationHeader'>
                        <img alt="vietnamairline logo" className='logoFight' src="https://cdn.haitrieu.com/wp-content/uploads/2022/01/Icono-VNA.png" />
                        <h1 className='flightBrandName'>Vietnam Airline</h1>
                        <h1 className='flightRank'>Economy Class</h1>
                    </div>
                    <div className='informationTime'>
                        <div className='startTime'>
                            <h1 className='time'>10:30</h1>
                            <h1 className='destination'>SGN</h1>
                        </div>
                        <div className='simulation'>
                            <h1 className='simulationTime'>1h00</h1>
                            <div className='arrowLong' />
                            <h1 className='simulationType'>Bay thẳng</h1>
                        </div>
                        <div className='endTime'>
                            <h1 className='time'>11:30</h1>
                            <h1 className='destination'>PQC</h1>
                        </div>
                    </div>
                </div>
                <div className='dotLine' />
                <div className='informationTicket'>
                    <h1 className='inforDetail'>Chi tiết</h1>
                    <div className='customerInfo'>
                        <GoPeople className='inforIcon' />
                        <h1 className='inforContent'>1 hành khách</h1>
                    </div>
                    <h1 className='inforPrice'>1.029.000 VND</h1>
                </div>
            </div>
        </>
    );
}

export default FlightItem;