import { IonLabel, IonRouterOutlet, IonTabBar, IonTabButton, IonTabs } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import React from 'react';
import { Redirect, Route } from 'react-router';
import {
    Home2,
    Stickynote,
    LocationDiscover,
    LikeShapes,
    ProfileCircle
} from 'iconsax-react'

import Home from '../pages/Home/Home';
import Booking from '../pages/Booking/Booking';
import Explore from '../pages/Explore/Explore';
import Recommend from '../pages/Recommend/Recommend';
import Profile from '../pages/Profile/Profile';

function Navigationbar() {
    return (
        <IonReactRouter>
            <IonTabs>
                <IonRouterOutlet>
                    <Route path="/home" component={Home} exact={true} />
                    <Route exact path="/" render={() => <Redirect to="/home" />} />
                    <Route path="/booking" component={Booking} exact={true} />
                    <Route path="/explore" component={Explore} exact={true} />
                    <Route path="/recommend" component={Recommend} exact={true} />
                    <Route path="/profile" component={Profile} exact={true} />
                </IonRouterOutlet>
                <IonTabBar slot="bottom" className='navBar'>
                    <IonTabButton tab="home" href="/home">
                        <Home2 className='iconNavbar' />
                        <IonLabel>Trang chủ</IonLabel>
                    </IonTabButton>
                    <IonTabButton tab="booking" href="/booking">
                        <Stickynote className='iconNavbar' />
                        <IonLabel>Đặt trước</IonLabel>
                    </IonTabButton>
                    <IonTabButton tab="explore" href="/explore">
                        <LocationDiscover className='iconNavbar' />
                        <IonLabel>Khám phá</IonLabel>
                    </IonTabButton>
                    <IonTabButton tab="recommend" href="/recommend">
                        <LikeShapes className='iconNavbar' />
                        <IonLabel>Đề xuất</IonLabel>
                    </IonTabButton>
                    <IonTabButton tab="profile" href="/profile">
                        <ProfileCircle className='iconNavbar' />
                        <IonLabel>Tài khoản</IonLabel>
                    </IonTabButton>
                </IonTabBar>
            </IonTabs>
        </IonReactRouter>
    );
}

export default Navigationbar;