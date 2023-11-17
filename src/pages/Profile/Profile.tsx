import { IonContent } from '@ionic/react';
import './Profile.css';
import ProfileNavbar from '../../containers/Profile/ProfileNavbar/ProfileNavbar';

const Profile: React.FC = () => {
    return (
        <IonContent fullscreen>
            <div className='profileContainer'>
                <ProfileNavbar />
            </div>
        </IonContent>
    );
};

export default Profile;
