import { IonContent } from '@ionic/react';
import './Booking.css';
import BookingContainer from '../../containers/Booking/BookingContainer/BookingContainer';
import BookingRecommend from '../../containers/Booking/BookingRecommend/BookingRecommend';

const Booking: React.FC = () => {
    return (
        <IonContent fullscreen>
            <div className='bookingContainer'>
                <BookingContainer />
                <h1 className='bookingTitle'>Đề xuất</h1>
                <BookingRecommend />
            </div>
        </IonContent>
    );
};

export default Booking;
