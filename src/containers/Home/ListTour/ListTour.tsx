import React from 'react';
import './ListTour.css'
import HomeTour from '../../../components/HomeTour/HomeTour';

const data = [
    {
        id: 1,
        image: 'https://vcdn1-dulich.vnecdn.net/2022/04/18/dulichSaPa-1650268886-1480-1650277620.png?w=0&h=0&q=100&dpr=2&fit=crop&s=JTUw8njZ_Glkqf1itzjObg',
        name: 'Săn mây Sapa 2 ngày 1 đêm',
        location: 'Lào Cai, Việt Nam',
        price: '1.425.000',
        discount: '32',
    },
    {
        id: 2,
        image: 'https://www.duthuyen-halong.com/sites/t/to/tourduthuyenhalong/uploads/ckupload/images/cruises/viewlacasta.jpg',
        name: 'Trải nghiệm du thuyền Hạ Long',
        location: 'Hạ Long, Việt Nam',
        price: '3.425.000',
        discount: '24',
    },
    {
        id: 3,
        image: 'https://ik.imagekit.io/tvlk/blog/2022/11/khu-du-lich-trang-an-2.jpg?tr=dpr-2,w-675',
        name: 'Tour du lịch Tràng An',
        location: 'Ninh Bình, Việt Nam',
        price: '2.100.000',
        discount: '18',
    },
    {
        id: 4,
        image: 'https://hoangkimlandscape.com/image/catalog/5.%20BLOG/18-BA-NA-HILL-CHAU-AU-THU-NHO-NAM-GON-GIUA-NGAN-MAY/2-cay-cau-vang.jpg',
        name: 'Tour Bà Nà Hills',
        location: 'Đà Nẵng, Việt Nam',
        price: '725.000',
        discount: '47',
    },
]

function ListTour() {
    return (
        <>
            <div className='listTour'>
                {
                    data.map(({ id, image, name, location, price, discount }) => {
                        return (
                            <HomeTour key={id} image={image} name={name} location={location} price={price} discount={discount} />
                        )
                    })
                }
            </div>
        </>
    );
}

export default ListTour;