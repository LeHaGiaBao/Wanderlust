import { IonContent } from '@ionic/react';
import './Booking.css';
import BookingContainer from '../../containers/Booking/BookingContainer/BookingContainer';

const Booking: React.FC = () => {
    return (
        <IonContent fullscreen>
            <div className='bookingContainer'>
                <BookingContainer />
            </div>
        </IonContent>
    );
};

export default Booking;
