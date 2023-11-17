import { IonContent } from '@ionic/react';
import './Profile.css';
import ProfileNavbar from '../../containers/Profile/ProfileNavbar/ProfileNavbar';
import ButtonNavigation from '../../containers/Profile/ButtonNavigation/ButtonNavigation';

const Profile: React.FC = () => {
    return (
        <IonContent fullscreen>
            <div className='profileContainer'>
                <ProfileNavbar />
                <ButtonNavigation />
            </div>
        </IonContent>
    );
};

export default Profile;
