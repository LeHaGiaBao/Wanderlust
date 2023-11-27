import { Redirect, Route, useHistory } from 'react-router-dom';
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
import {
  Home2,
  Stickynote,
  LocationDiscover,
  LikeShapes,
  ProfileCircle
} from 'iconsax-react'

import Home from './pages/Home/Home';
import Booking from './pages/Booking/Booking';
import Explore from './pages/Explore/Explore';
import Recommend from './pages/Recommend/Recommend';
import Profile from './pages/Profile/Profile';
import Login from './pages/Auth/Login/Login';
import Register from './pages/Auth/Register/Register';
import OTP from './pages/Auth/OTP/OTP';
import TermOfServices from './pages/Auth/TermOfServices/TermOfServices';
import ProfileComplete from './pages/Auth/ProfileComplete/ProfileComplete';
import FullDestination from './pages/Home/FullDestination/FullDestination';
import FullFlight from './pages/Home/FullFlight/FullFlight';
import FullHotel from './pages/Home/FullHotel/FullHotel';
import FullTour from './pages/Home/FullTour/FullTour';
import BookingFind from './pages/Booking/BookingFind/BookingFind';
import FlightFind from './pages/Booking/FlightFind/FlightFind';
import HotelDetail from './pages/Booking/HotelDetail/HotelDetail';
import AddNewCard from './pages/Payment/AddNewCard/AddNewCard';
import AddVoucher from './pages/Payment/AddVoucher/AddVoucher';
import BillDetail from './pages/Payment/BillDetail/BillDetail';
import ConfirmPayment from './pages/Payment/ConfirmPayment/ConfirmPayment';
import PaymentConfirm from './pages/Payment/PaymentConfirm/PaymentConfirm';
import PaymentInformation from './pages/Payment/PaymentInformation/PaymentInformation';
import VoucherDetail from './pages/Payment/VoucherDetail/VoucherDetail';
import Welcome from './pages/Welcome/Welcome/Welcome';
import Onboarding from './pages/Welcome/Onboarding/Onboarding';

setupIonicReact();

function App() {
  const history = useHistory()

  return (
    <IonApp>
      <IonReactRouter>
        <IonTabs>
          <IonRouterOutlet>
            <Route path="/home" component={Home} exact={true} />
            <Route exact path="/" render={() => <Redirect to="/home" />} />
            <Route path="/booking" component={Booking} exact={true} />
            <Route path="/explore" component={Explore} exact={true} />
            <Route path="/recommend" component={Recommend} exact={true} />
            <Route path="/profile" component={Profile} exact={true} />
            <Route path="/login" component={Login} exact={true} />
            <Route path="/register" component={Register} exact={true} />
            <Route path="/otp" component={OTP} exact={true} />
            <Route path="/policy" component={TermOfServices} exact={true} />
            <Route path="/profilecomplete" component={ProfileComplete} exact={true} />
            <Route path="/fulldestination" component={FullDestination} exact={true} />
            <Route path="/fullflight" component={FullFlight} exact={true} />
            <Route path="/fullhotel" component={FullHotel} exact={true} />
            <Route path="/fulltour" component={FullTour} exact={true} />
            <Route path="/bookingfind" component={BookingFind} exact={true} />
            <Route path="/flightfind" component={FlightFind} exact={true} />
            <Route path="/hoteldetail" component={HotelDetail} exact={true} />
            <Route path="/addnewcard" component={AddNewCard} exact={true} />
            <Route path="/addvoucher" component={AddVoucher} exact={true} />
            <Route path="/billdetail" component={BillDetail} exact={true} />
            <Route path="/confirmpayment" component={ConfirmPayment} exact={true} />
            <Route path="/paymentconfirm" component={PaymentConfirm} exact={true} />
            <Route path="/paymentinformation" component={PaymentInformation} exact={true} />
            <Route path="/voucherdetail" component={VoucherDetail} exact={true} />
            <Route path="/welcome" component={Welcome} exact={true} />
            <Route path="/onboarding" component={Onboarding} exact={true} />
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
  )
}

export default App;
