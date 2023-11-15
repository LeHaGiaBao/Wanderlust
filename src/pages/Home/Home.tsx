import { IonContent } from '@ionic/react';
import './Home.css';
import HomeNavBar from '../../containers/Home/HomeNavBar/HomeNavBar';
import SearchBar from '../../components/SearchBar/SearchBar';
import HeadingTitle from '../../containers/Home/HeadingTitle/HeadingTitle';
import Filter from '../../containers/Home/Filter/Filter';

const Home: React.FC = () => {
    return (
        <IonContent fullscreen>
            <div className='homeContainer'>
                <HomeNavBar />
                <SearchBar />
                <HeadingTitle title="Điểm đến" />
                <Filter />
            </div>
        </IonContent>
    );
};

export default Home;
