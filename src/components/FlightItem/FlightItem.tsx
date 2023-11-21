import React from 'react';
import './FlightItem.css'
import { Profile2User } from 'iconsax-react'

function FlightItem() {
    return (
        <>
            <div className='flightItem'>
                <div className='flightInformation'>
                    <div className='flightInformationHeader'>
                        <div className='inforFlight'>
                            <img className='flightLogo' alt="flightLogo" src="https://cdn.haitrieu.com/wp-content/uploads/2022/01/Icono-VNA.png" />
                            <h1 className='flightName'>Vietnam Airline</h1>
                        </div>
                        <h1 className='seatType'>Economy Class</h1>
                    </div>
                    <div className='fightTimeInformation'>
                        <div className='informationTimeAndDestination'>
                            <h1 className='timeFlight'>10:30</h1>
                            <h1 className='destinationFlight'>SGN</h1>
                        </div>
                        <div className='flightSimulation'>
                            <h1 className='simulationTime'>1h00</h1>
                            <div className='arrowLong' />
                            <h1 className='simulationType'>Bay thẳng</h1>
                        </div>
                        <div className='informationTimeAndDestination'>
                            <h1 className='timeFlight'>11:30</h1>
                            <h1 className='destinationFlight'>PQC</h1>
                        </div>
                    </div>
                </div>
                <div className="ticketRip">
                    <div className="ripLine"></div>
                </div>
                <div className='ticketInformation'>
                    <h1 className='ticketDetail'>Chi tiết</h1>
                    <div className='ticketInformationContent'>
                        <div className='ticketType'>
                            <Profile2User className='ticketIcon' />
                            <h1 className='typeInfor'>1 hành khách</h1>
                        </div>
                        <h1 className='ticketPrice'>1.029.000 VND</h1>
                    </div>
                </div>
            </div>
        </>
    );
}

export default FlightItem;