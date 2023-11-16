import React from 'react';
import './ListHotel.css'
import HomeHotel from '../../../components/HomeHotel/HomeHotel';

const dataHotel = [
    {
        id: 1,
        image: 'https://du-lich.chudu24.com/f/m/2105/25/khach-san-muong-thanh-quy-nhon-0.jpg?w=550&c=1',
        name: 'Khách sạn Mường Thanh',
        star: '5.0',
        location: 'Quy Nhơn, Việt Nam',
    },
    {
        id: 2,
        image: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1c/d6/fc/ac/avs-hotel-phu-quo-c.jpg?w=1200&h=-1&s=1',
        name: 'Khách sạn Dương Đông',
        star: '4.8',
        location: 'Phú Quốc, Việt Nam',
    },
    {
        id: 3,
        image: 'https://cf.bstatic.com/xdata/images/hotel/max1024x768/486805808.jpg?k=065777e30e4feb7ba86e1e85972fa7629498f05fe4ec49fa5d3a48dd1f59be4a&o=&hp=1',
        name: 'Khách sạn JW Mariott',
        star: '5.0',
        location: 'Hà Nội, Việt Nam',
    },
]

function ListHotel() {
    return (
        <div className='hotelContainer'>
            <div className='hotelList'>
                {
                    dataHotel.map(({ id, image, name, star, location }) => {
                        return (
                            <HomeHotel key={id} image={image} name={name} star={star} location={location} />
                        )
                    })
                }
            </div>
        </div>
    );
}

export default ListHotel;