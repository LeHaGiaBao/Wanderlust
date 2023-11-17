import React from 'react';
import './ListFlight.css'
import HomeFlight from '../../../components/HomeFlight/HomeFlight';

const dataFight = [
    {
        id: 1,
        image: 'https://s3-symbol-logo.tradingview.com/tct-hang-khong-viet-nam--600.png',
        name: 'TP.HCM - Quy Nhơn',
        date: '14.12.2023',
        priceDiscount: '1.234.000',
        priceNotDiscount: '1.800.000',
    },
    {
        id: 2,
        image: 'https://inkythuatso.com/uploads/images/2021/09/1571733729-logo-vietjet-air-15-13-34-40.jpg',
        name: 'Hà Nội - TP.HCM',
        date: '10.12.2023',
        priceDiscount: '2.452.000',
        priceNotDiscount: '2.637.000',
    },
    {
        id: 3,
        image: 'https://cdn.haitrieu.com/wp-content/uploads/2022/01/Logo-Bamboo-Airways-V.png',
        name: 'TP.HCM - Phú Quốc',
        date: '20.12.2023',
        priceDiscount: '1.175.000',
        priceNotDiscount: '1.375.000',
    },
]

function ListFlight() {
    return (
        <div className='hotelContainer'>
            <div className='hotelList'>
                {
                    dataFight.map(({ id, image, name, date, priceDiscount, priceNotDiscount }) => {
                        return (
                            <HomeFlight key={id} image={image} name={name} date={date} priceDiscount={priceDiscount} priceNotDiscount={priceNotDiscount} />
                        )
                    })
                }
            </div>
        </div>
    );
}

export default ListFlight;