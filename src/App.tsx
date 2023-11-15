import { Redirect, Route } from 'react-router-dom';
import {
  IonApp,
  IonIcon,
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

import { home, calendar, compass, personCircle, thumbsUp } from 'ionicons/icons';
import Home from './pages/Home/Home';
import Booking from './pages/Booking/Booking';
import Explore from './pages/Explore/Explore';
import Recommend from './pages/Recommend/Recommend';
import Profile from './pages/Profile/Profile';
import Welcome from './pages/Welcome/Welcome/Welcome';
import Login from './pages/Auth/Login/Login';
import Register from './pages/Auth/Register/Register';
import OTP from './pages/Auth/OTP/OTP';
import ProfileComplete from './pages/Auth/ProfileComplete/ProfileComplete';

setupIonicReact();

const App: React.FC = () => (
  <IonApp>
    {/* <Welcome /> */}
    {/* <Login /> */}
    {/* <Register /> */}
    {/* <OTP /> */}
    <ProfileComplete />
    {/* <IonReactRouter>
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
          <Route exact path="/">
            <Redirect to="/home" />
          </Route>
        </IonRouterOutlet>
        <IonTabBar slot="bottom">
          <IonTabButton tab="home" href="/home">
            <IonIcon aria-hidden="true" icon={home} />
            <IonLabel>Trang chủ</IonLabel>
          </IonTabButton>
          <IonTabButton tab="booking" href="/booking">
            <IonIcon aria-hidden="true" icon={calendar} />
            <IonLabel>Đặt trước</IonLabel>
          </IonTabButton>
          <IonTabButton tab="explore" href="/explore">
            <IonIcon aria-hidden="true" icon={compass} />
            <IonLabel>Khám phá</IonLabel>
          </IonTabButton>
          <IonTabButton tab="recommend" href="/recommend">
            <IonIcon aria-hidden="true" icon={thumbsUp} />
            <IonLabel>Đề xuất</IonLabel>
          </IonTabButton>
          <IonTabButton tab="profile" href="/profile">
            <IonIcon aria-hidden="true" icon={personCircle} />
            <IonLabel>Tài khoản</IonLabel>
          </IonTabButton>
        </IonTabBar>
      </IonTabs>
    </IonReactRouter> */}
  </IonApp>
);

export default App;
