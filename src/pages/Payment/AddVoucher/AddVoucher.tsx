import React from 'react';
import './AddVoucher.css'
import { IonContent } from '@ionic/react';
import Navbar from '../../../components/Navbar/Navbar';
import {
    TicketDiscount,
    AddCircle
} from 'iconsax-react'

function AddVoucher() {
    return (
        <>
            <IonContent fullscreen>
                <div className='addVoucherContainer'>
                    <Navbar title="Chọn mã giảm giá" />
                    <h1 className='confirmTitle'>Nhập mã code</h1>
                    <input id='code' type="text" className='inputCode' placeholder='Nhập mã của bạn tại đây' />
                    <h1 className='confirmTitle'>Mã giảm giá có sẵn</h1>
                    <div className='voucherContainer'>
                        <div className='voucherHeader'>
                            <div className='containerContent'>
                                <TicketDiscount className='voucherIcon' />
                                <div className='voucherContent'>
                                    <h1 className='voucherTitle'>Giảm 200.000 VND</h1>
                                    <h1 className='voucherSubTitle'>Cho hóa đơn từ 1.000.000 VND</h1>
                                </div>
                            </div>
                            <AddCircle className='addCircle' />
                        </div>
                        <div className='voucherFooter'>
                            <h1 className='footerTitle'>Áp dụng cho khách hàng mới</h1>
                            <h1 className='footerDetail'>Chi tiết</h1>
                        </div>
                    </div>
                    <div className='voucherContainer'>
                        <div className='voucherHeader'>
                            <div className='containerContent'>
                                <TicketDiscount className='voucherIcon' />
                                <div className='voucherContent'>
                                    <h1 className='voucherTitle'>Giảm 250.000 VND</h1>
                                    <h1 className='voucherSubTitle'>Cho hóa đơn từ 3.000.000 VND</h1>
                                </div>
                            </div>
                            <AddCircle className='addCircle' />
                        </div>
                        <div className='voucherFooter'>
                            <h1 className='footerTitle'>Hóa đơn đủ điều kiện áp dụng</h1>
                            <h1 className='footerDetail'>Chi tiết</h1>
                        </div>
                    </div>
                    <div className='voucherContainerUncheck'>
                        <div className='voucherHeaderUncheck'>
                            <div className='containerContentUncheck'>
                                <TicketDiscount className='voucherIconUncheck' />
                                <div className='voucherContentUncheck'>
                                    <h1 className='voucherTitleUncheck'>Giảm 250.000 VND</h1>
                                    <h1 className='voucherSubTitleUncheck'>Cho hóa đơn từ 3.000.000 VND</h1>
                                </div>
                            </div>
                            <AddCircle className='addCircleUncheck' />
                        </div>
                        <div className='voucherFooterUncheck'>
                            <h1 className='footerTitleUncheck'>Hóa đơn đủ điều kiện áp dụng</h1>
                            <h1 className='footerDetailUncheck'>Chi tiết</h1>
                        </div>
                    </div>
                    <div className='priceDetail' style={{ marginTop: '50px' }}>
                        <div className='priceItem'>
                            <h1 className='contentTextTotal'>Tổng: </h1>
                            <h1 className='contentText'>8.638.920 VND</h1>
                        </div>
                        <div className='priceItem' style={{ marginTop: '-8px' }}>
                            <h1 className='contentText'>Giảm</h1>
                            <h1 className='contentTextDiscount'>0 VND</h1>
                        </div>
                        <div className='confirmPaymentLine' />
                        <div className='totalPrice'>
                            <h1 className='totalText'>Tổng thanh toán: </h1>
                            <h1 className='totalPrice'>8.438.920 VND</h1>
                        </div>
                    </div>
                    <button className='buttonConfirm'>Hoàn tất</button>
                </div>
            </IonContent>
        </>
    );
}

export default AddVoucher;