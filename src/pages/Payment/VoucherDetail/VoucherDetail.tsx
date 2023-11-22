import React from 'react';
import './VoucherDetail.css'
import { IonContent } from '@ionic/react';
import Navbar from '../../../components/Navbar/Navbar';
import { AddCircle, TicketDiscount } from 'iconsax-react';


function VoucherDetail() {
    return (
        <>
            <IonContent fullscreen>
                <div className='voucherDetailContainer'>
                    <Navbar title="Chi tiết mã giảm giá" />
                    <div className='voucherContainer'>
                        <div className='voucherHeader'>
                            <div className='containerContent'>
                                <TicketDiscount className='voucherIcon' />
                                <div className='voucherContent'>
                                    <h1 className='voucherTitle'>Giảm 200.000 VND</h1>
                                    <h1 className='voucherSubTitle'>Cho hóa đơn từ 1.000.000 VND</h1>
                                </div>
                            </div>
                        </div>
                        <div className='voucherFooter'>
                            <h1 className='footerTitle'>Áp dụng cho khách hàng mới</h1>
                        </div>
                    </div>
                    <h1 className='voucherTitleContent'>Thời hạn sử dụng mã</h1>
                    <h1 className='voucherSubTitleContent'>Đến 23:59 ngày 25 - 12 - 2023 </h1>
                    <h1 className='voucherTitleContent'>Ưu đãi</h1>
                    <h1 className='voucherSubTitleContent'>
                        Dành cho khách hàng sử dụng đặt phòng khách sạn lần đầu tiên tại Wanderlust.
                    </h1>
                    <h1 className='voucherTitleContent'>Phương thức thanh toán</h1>
                    <h1 className='voucherSubTitleContent'>Áp dụng cho mọi hình thức thanh toán. </h1>
                    <h1 className='voucherTitleContent'>Điều kiện</h1>
                    <h1 className='voucherSubTitleContent'>
                        Giảm ngay 200.000 VND cho hóa đơn từ 1.000.000 VND
                        thanh toán đặt phòng khách sạn.
                        <br />

                        Áp dụng đến 23:59 ngày 25 - 12 - 2023.
                        <br />

                        Mỗi tài khoản chỉ được sử dụng một lần duy nhất.
                        <br />

                        Mã giảm giá được phát hành bởi Wanderlust và sẽ không
                        được hoàn lại với bất kỳ lí do nào.
                    </h1>
                    <button className='buttonConfirm'>Dùng ngay</button>
                </div>
            </IonContent>
        </>
    );
}

export default VoucherDetail;