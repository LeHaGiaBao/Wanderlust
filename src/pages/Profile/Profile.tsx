import { IonContent } from '@ionic/react';
import './Profile.css';
import ProfileNavbar from '../../containers/Profile/ProfileNavbar/ProfileNavbar';
import ButtonNavigation from '../../containers/Profile/ButtonNavigation/ButtonNavigation';
import FeatureContainer from '../../containers/Profile/FeatureContainer/FeatureContainer';
import SettingContainer from '../../containers/Profile/SettingContainer/SettingContainer';
import ApplicationInformation from '../../containers/Profile/ApplicationInformation/ApplicationInformation';
import { RiShutDownLine } from "react-icons/ri";

const Profile: React.FC = () => {
    return (
        <IonContent fullscreen>
            <div className='profileContainer'>
                <ProfileNavbar />
                <ButtonNavigation />
                <FeatureContainer />
                <h1 className='profileTitle'>Cài đặt</h1>
                <SettingContainer />
                <h1 className='profileTitle'>Về ứng dụng</h1>
                <ApplicationInformation />
                <div className='logoutContainer'>
                    <div className='feature'>
                        <RiShutDownLine className='featureIcon' />
                        <h1 className='featureContent'>Đăng xuất</h1>
                    </div>
                </div>
            </div>
        </IonContent>
    );
};

export default Profile;
