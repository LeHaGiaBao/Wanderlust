import React, { useEffect, useState } from 'react';
import './Welcome.css'
import { IonContent } from '@ionic/react';
import Onboarding from '../Onboarding/Onboarding';

function Welcome() {
    const [showInitialView, setShowInitialView] = useState(true)
    const [step, setStep] = useState(0);

    const onNextStep = () => {
        if (step !== 2) {
            setStep(step + 1);
        }
    };

    useEffect(() => {
        const timer = setTimeout(() => {
            setShowInitialView(false);
        }, 3000);

        return () => clearTimeout(timer);
    }, [])

    if (showInitialView) {
        return (
            <>
                <IonContent fullscreen>
                    <Onboarding />
                </IonContent>
            </>
        )
    } else {

        return (
            <>
                <IonContent fullscreen>
                    {
                        step !== 2
                            ?
                            <>
                                {
                                    step === 0
                                        ?
                                        <div className='containerWelcome1'>
                                            <h1 className='titleWelcome'>Wanderlust</h1>
                                            <h2 className='subTitleWelcome'>Khám phá những vùng đất mới!</h2>
                                            <button className='buttonWelcome' onClick={onNextStep}>Tiếp theo</button>
                                        </div>
                                        :
                                        <div className='containerWelcome2'>
                                            <h1 className='titleWelcome'>Booking</h1>
                                            <h2 className='subTitleWelcome'>Dễ dàng tìm kiếm và đặt phòng</h2>
                                            <button className='buttonWelcome' onClick={onNextStep}>Tiếp theo</button>
                                        </div>
                                }
                            </>
                            :
                            <div className='containerWelcome3'>
                                <h1 className='titleWelcome'>Vi vu</h1>
                                <h2 className='subTitleWelcome'>Tìm kiếm chuyến bay dễ dàng</h2>
                                <button className='buttonWelcome'>Bắt đầu</button>
                            </div>
                    }
                </IonContent>
            </>
        );
    }
}

export default Welcome;