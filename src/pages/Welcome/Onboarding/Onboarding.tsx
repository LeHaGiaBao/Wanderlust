import React from 'react';
import './Onboarding.css'
import { IonContent } from '@ionic/react';

function Onboarding() {
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