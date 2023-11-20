import { Redirect, Route } from 'react-router-dom';
import {
  IonApp,
  IonLabel,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonTabs,
  setupIonicReact
} from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import './theme/variables.css';

import Home from './pages/Home/Home';
import Booking from './pages/Booking/Booking';
import Explore from './pages/Explore/Explore';
import Recommend from './pages/Recommend/Recommend';
import Profile from './pages/Profile/Profile';
import {
  Home2,
  Stickynote,
  LocationDiscover,
  LikeShapes,
  ProfileCircle
} from 'iconsax-react'
import FullFlight from './pages/Home/FullFlight/FullFlight';

setupIonicReact();

const App: React.FC = () => (
  <IonApp>
    {/* <FullFlight /> */}
    <IonReactRouter>
      <IonTabs>
        <IonRouterOutlet>
          <Route exact path="/home">
            <Home />
          </Route>
          <Route exact path="/booking">
            <Booking />
          </Route>
          <Route exact path="/explore">
            <Explore />
          </Route>
          <Route exact path="/recommend">
            <Recommend />
          </Route>
          <Route exact path="/profile">
            <Profile />
          </Route>
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
  </IonApp>
);

export default App;
