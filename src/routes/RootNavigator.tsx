import React, {memo} from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Routes} from './routes';
import AppScreen from './AppScreen';
import Home from '@/screens/tabs/Home';
import Booking from '@/screens/tabs/Booking';
import Explore from '@/screens/tabs/Explore';
import Recommend from '@/screens/tabs/Recommend';
import Account from '@/screens/tabs/Account';
import Notification from '@/screens/main/Profile/Notification';
import AllDestinations from '@/screens/main/Destination/AllDestinations';
import AllHotels from '@/screens/main/Hotel/AllHotels';
import AllFlights from '@/screens/main/Flight/AllFlights';
import AllTours from '@/screens/main/Tour/AllTours';
import Search from '@/screens/main/Search';
import Message from '@/screens/main/Profile/Message';
import Favorite from '@/screens/main/Profile/Favorite';
import MyBooking from '@/screens/main/Profile/MyBooking';
import MyFlight from '@/screens/main/Profile/MyFlight';
import MyVoucher from '@/screens/main/Profile/MyVoucher';
import ProfileFeed from '@/screens/main/Profile/ProfileFeed';
import ProfileDetail from '@/screens/main/Profile/ProfileDetail';
import ProfileEdit from '@/screens/main/Profile/ProfileEdit';
import MyPaymentMethod from '@/screens/main/Payment/MyPaymentMethod';
import SupportCenter from '@/screens/main/AboutUs/SupportCenter';
import PrivacyList from '@/screens/main/AboutUs/PrivacyList';
import AboutUs from '@/screens/main/AboutUs/AboutUs';
import ChangePassword from '@/screens/auth/ChangePassword';
import DestinationDetail from '@/screens/main/Destination/DestinationDetail';
import AllReview from '@/screens/main/Accomodation/Review/AllReview';
import AllAccomodations from '@/screens/main/Accomodation/AllAccomodations';
import AccomodationOverview from '@/screens/main/Accomodation/AccomodationOverview';
import TicketDetail from '@/screens/main/Ticket/TicketDetail';
import TourDetail from '@/screens/main/Tour/TourDetail';
import HotelDetail from '@/screens/main/Hotel/HotelDetail';
import FlightDetail from '@/screens/main/Flight/FlightDetail';
import PaymentConfirm from '@/screens/main/Payment/PaymentConfirm';
import PaymentMethod from '@/screens/main/Payment/PaymentMethod';
import PaymentEdit from '@/screens/main/Payment/PaymentEdit';
import PaymentCardList from '@/screens/main/Payment/PaymentCardList';
import AddNewVoucher from '@/screens/main/Voucher/AddNewVoucher';
import VoucherDetail from '@/screens/main/Voucher/VoucherDetail';
import PaymentCheckout from '@/screens/main/Payment/PaymentCheckout';
import PaymentDetail from '@/screens/main/Payment/PaymentDetail';

const Stack = createNativeStackNavigator();

function RootNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name={Routes.appScreen}
        component={AppScreen}
        options={{headerShown: false, animation: 'slide_from_bottom'}}
      />
      <Stack.Screen
        name={Routes.tab_home}
        component={Home}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name={Routes.tab_booking}
        component={Booking}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name={Routes.tab_explore}
        component={Explore}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name={Routes.tab_recommend}
        component={Recommend}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name={Routes.tab_account}
        component={Account}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name={Routes.notification}
        component={Notification}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name={Routes.all_destinations}
        component={AllDestinations}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name={Routes.all_hotels}
        component={AllHotels}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name={Routes.all_flights}
        component={AllFlights}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name={Routes.all_tours}
        component={AllTours}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name={Routes.search}
        component={Search}
        options={{headerShown: false, animation: 'slide_from_bottom'}}
      />
      <Stack.Screen
        name={Routes.message}
        component={Message}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name={Routes.favorite}
        component={Favorite}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name={Routes.profile_feed}
        component={ProfileFeed}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name={Routes.my_booking}
        component={MyBooking}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name={Routes.my_flight}
        component={MyFlight}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name={Routes.my_voucher}
        component={MyVoucher}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name={Routes.profile_detail}
        component={ProfileDetail}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name={Routes.profile_edit}
        component={ProfileEdit}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name={Routes.my_payment_method}
        component={MyPaymentMethod}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name={Routes.support_center}
        component={SupportCenter}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name={Routes.privacy_list}
        component={PrivacyList}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name={Routes.about_us}
        component={AboutUs}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name={Routes.change_password}
        component={ChangePassword}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name={Routes.all_review}
        component={AllReview}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name={Routes.accomodation_recommend}
        component={AllAccomodations}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name={Routes.accomodation_overview}
        component={AccomodationOverview}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name={Routes.destination_detail}
        component={DestinationDetail}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name={Routes.tour_detail}
        component={TourDetail}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name={Routes.hotel_detail}
        component={HotelDetail}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name={Routes.flight_detail}
        component={FlightDetail}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name={Routes.ticket_detail}
        component={TicketDetail}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name={Routes.payment_confirm}
        component={PaymentConfirm}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name={Routes.payment_method}
        component={PaymentMethod}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name={Routes.payment_edit}
        component={PaymentEdit}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name={Routes.payment_card_list}
        component={PaymentCardList}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name={Routes.add_new_voucher}
        component={AddNewVoucher}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name={Routes.voucher_detail}
        component={VoucherDetail}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name={Routes.payment_checkout}
        component={PaymentCheckout}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name={Routes.payment_detail}
        component={PaymentDetail}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
}

export default memo(RootNavigator);
