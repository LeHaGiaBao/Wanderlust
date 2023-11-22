import React from 'react';
import './BillDetail.css'
import { IonContent } from '@ionic/react';
import Navbar from '../../../components/Navbar/Navbar';
import {
    Copy,
    Location,
    Map1,
    Call,
    Message,
    ArrowRotateLeft,
    CloseCircle,
    MessageQuestion
} from 'iconsax-react'
import ConfirmItem from '../../../containers/Payment/ConfirmItem/ConfirmItem';
import CustomerInfor from '../../../containers/Payment/CustomerInfor/CustomerInfor';

function BillDetail() {
    return (
        <>
            <IonContent fullscreen>
                <div className='billDetailContainer'>
                    <Navbar title="Thông tin đặt phòng" />
                    <h1 className='confirmTitle'>Mã xác nhận</h1>
                    <div className='billCode'>
                        <h1 className='codeContent'>1234567890</h1>
                        <Copy className='copyIcon' />
                    </div>
                    <h1 className='confirmTitle'>Thông tin đặt phòng</h1>
                    <ConfirmItem />
                    <CustomerInfor />
                    <div className='addressContainer'>
                        <div className='iconLocation'>
                            <Location className='locationIcon' variant='Bold' />
                        </div>
                        <p className='addressContent'>
                            Bãi Dài, Thị xã Gành Dầu, Phú Quốc, Kiên Giang, Việt Nam
                        </p>
                        <div className='mapItem'>
                            <Map1 className='mapIcon' />
                            <h1 className='mapContent'>Chỉ đường</h1>
                        </div>
                    </div>
                    <h1 className='confirmTitle'>Thông tin khách hàng</h1>
                    <div className='customerInfor'>Mỹ Duyên - 0343123456</div>
                    <div className='customerInfor'>Thanh Mai - 0349876543</div>
                    <h1 className='changeTitle'>Bạn muốn thay đổi thông tin khách hàng?</h1>
                    <p className='changeContent'>Vui lòng liên hệ khách sạn để thay đổi thông tin.</p>
                    <h1 className='confirmTitle'>Liên hệ khách sạn</h1>
                    <div className='hotelContact'>
                        <Call className='hotelIcon' variant='Bold' />
                        <h1 className='hotelInfor'>0123456789</h1>
                    </div>
                    <div className='hotelContact'>
                        <Message className='hotelIcon' variant='Bold' />
                        <h1 className='hotelInfor'>Gia Bảo (Quản lý khách sạn)</h1>
                    </div>
                    <div className='confirmPaymentLine' />
                    <div className='totalPrice'>
                        <h1 className='totalText'>Tổng thanh toán: </h1>
                        <h1 className='totalPrice'>8.438.920 VND</h1>
                    </div>
                    <div className='confirmPaymentLine' />
                    <h1 className='confirmTitle'>Chính sách hủy phòng</h1>
                    <div className='privacyContainer'>
                        <ArrowRotateLeft className='privacyIcon' />
                        <div className='privacyContent'>
                            <h1 className='contentHeader'>Không hoàn tiền</h1>
                            <p className='contentInfor'>
                                Xin lưu ý, trong mọi trường hợp đặt phòng bị hủy, thay đổi hoặc vắng mặt, toàn bộ tiền phòng vẫn sẽ được thu.
                            </p>
                        </div>
                    </div>
                    <div className='confirmPaymentLine' />
                    <h1 className='confirmTitle'>Quy định khách sạn</h1>
                    <div className='privacyContainer'>
                        <div className='privacyContent'>
                            <p className='contentInfor'>
                                . Căn hộ cho tối đa 2 người lớn, 1 trẻ em và 1 thú cưng dưới 5 kg.
                            </p>
                            <p className='contentInfor'>
                                . Khách hàng gửi xe tại bãi giữ xe riêng của khách sạn.
                            </p>
                            <p className='contentInfor'>
                                . Nhận phòng tại quầy lễ tân ở sảnh A của khu nghỉ dưỡng.
                            </p>
                        </div>
                    </div>
                    <div className='confirmPaymentLine' />
                    <h1 className='confirmTitle'>Trung tâm hỗ trợ</h1>
                    <div className='privacyContainer'>
                        <CloseCircle className='privacyIconClose' variant='Bold' />
                        <div className='privacyContent'>
                            <h1 className='contentHeader'>Hủy phòng</h1>
                            <p className='contentInfor'>
                                Bạn muốn hủy phòng? Vui lòng liên hệ khách sạn để hủy
                                phòng bạn đã đặt.
                            </p>
                            <p className='contentSubInfor'>
                                Liên hệ khách sạn
                            </p>
                        </div>
                    </div>
                    <div className='privacyContainer'>
                        <MessageQuestion className='privacyIcon' />
                        <div className='privacyContent'>
                            <h1 className='contentHeader'>Hỗ trợ giải đáp thắc mắc</h1>
                            <p className='contentInfor'>
                                Chúng tôi sẽ hỗ trợ bạn giải đáp thắc mắc và quản lý đặt chỗ của bạn.
                            </p>
                            <p className='contentSubInfor'>
                                Liên hệ dịch vụ khách hàng
                            </p>
                        </div>
                    </div>
                </div>
            </IonContent>
        </>
    );
}

export default BillDetail;