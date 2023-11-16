import { IonContent } from '@ionic/react';
import './Home.css';
import HomeNavBar from '../../containers/Home/HomeNavBar/HomeNavBar';
import SearchBar from '../../components/SearchBar/SearchBar';
import HeadingTitle from '../../containers/Home/HeadingTitle/HeadingTitle';
import Filter from '../../containers/Home/Filter/Filter';
import ListDestination from '../../containers/Home/ListDestination/ListDestination';
import ListHotel from '../../containers/Home/ListHotel/ListHotel';

const Home: React.FC = () => {
    return (
        <IonContent fullscreen>
            <div className='homeContainer'>
                <HomeNavBar />
                <SearchBar />
                <HeadingTitle title="Điểm đến" />
                <Filter />
                <ListDestination />
                <HeadingTitle title="Khách sạn" />
                <ListHotel />
            </div>
        </IonContent>
    );
};

export default Home;
