import React, { useEffect, useState } from 'react';
import './Onboarding.css'
import { IonContent, IonProgressBar } from '@ionic/react';

function Onboarding() {
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setProgress((prevProgress) => prevProgress + 0.01);
        }, 50);

        return () => clearInterval(interval);
    }, []);

    if (progress > 1) {
        setTimeout(() => {
            setProgress(0);
        }, 1000);
    }

    return (
        <>
            <IonContent fullscreen>
                <div className='container'>
                    <h1 className='onboardingTitle'>Wanderlust</h1>
                </div>
            </IonContent>
        </>
    );
}

export default Onboarding;