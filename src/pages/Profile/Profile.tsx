import { IonContent } from '@ionic/react';
import './Profile.css';
import ProfileNavbar from '../../containers/Profile/ProfileNavbar/ProfileNavbar';
import ButtonNavigation from '../../containers/Profile/ButtonNavigation/ButtonNavigation';
import FeatureContainer from '../../containers/Profile/FeatureContainer/FeatureContainer';

const Profile: React.FC = () => {
    return (
        <IonContent fullscreen>
            <div className='profileContainer'>
                <ProfileNavbar />
                <ButtonNavigation />
                <FeatureContainer />
            </div>
        </IonContent>
    );
};

export default Profile;
