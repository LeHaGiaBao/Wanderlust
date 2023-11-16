import React from 'react';
import './ListDestination.css'
import HomeDestination from '../../../components/HomeDestination/HomeDestination';

const data = [
    {
        id: 1,
        image: 'https://www.centralcons.vn/wp-content/uploads/2022/04/vinwonders-phu-quoc-vinpearl-theme-parks-46333000.gif',
        name: 'Thuỷ cung Vinpearl',
        location: 'Phú Quốc, Việt Nam',
    },
    {
        id: 2,
        image: 'https://i0.wp.com/datvandon.net/wp-content/uploads/2019/11/vinh-ha-long-o-tinh-nao-viet-nam.jpeg?fit=960%2C720&ssl=1"',
        name: 'Vịnh Hạ Long',
        location: 'Quảng Ninh, Việt Nam',
    },
    {
        id: 3,
        image: 'https://www.arttravel.com.vn/upload/news/hoi-an-7269-6259.jpg',
        name: 'Phố cổ Hội An',
        location: 'Quảng Nam, Việt Nam',
    },
    {
        id: 4,
        image: 'https://upload.wikimedia.org/wikipedia/commons/c/c7/TLTY2.jpg',
        name: 'Thung lũng Tình Yêu',
        location: 'Đà Lạt, Việt Nam',
    },
]

function ListDestination() {
    return (
        <>
            <div className='listDestination'>
                {
                    data.map(({ id, image, name, location }) => {
                        return (
                            <HomeDestination key={id} image={image} name={name} location={location} />
                        )
                    })
                }
            </div>
        </>
    );
}

export default ListDestination;