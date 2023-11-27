import { IonContent } from '@ionic/react';
import './Home.css';
import HomeNavBar from '../../containers/Home/HomeNavBar/HomeNavBar';
import SearchBar from '../../components/SearchBar/SearchBar';
import HeadingTitle from '../../containers/Home/HeadingTitle/HeadingTitle';
import Filter from '../../containers/Home/Filter/Filter';
import ListDestination from '../../containers/Home/ListDestination/ListDestination';
import ListHotel from '../../containers/Home/ListHotel/ListHotel';
import ListFlight from '../../containers/Home/ListFlight/ListFlight';
import ListTour from '../../containers/Home/ListTour/ListTour';

const Home: React.FC = () => {
    return (
        <IonContent fullscreen>
            <div className='homeContainer'>
                <HomeNavBar />
                <SearchBar />
                <HeadingTitle title="Điểm đến" link="fulldestination" />
                <Filter />
                <ListDestination />
                <HeadingTitle title="Khách sạn" link="fullhotel" />
                <ListHotel />
                <HeadingTitle title="Chuyến bay giá rẻ" link="fullflight" />
                <ListFlight />
                <HeadingTitle title="Tour giá hời" link="fulltour" />
                <ListTour />
            </div>
        </IonContent>
    );
};

export default Home;
