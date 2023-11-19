import React from 'react';
import './TermOfServices.css'
import { IonContent } from '@ionic/react';
import { IoIosArrowDropleft } from 'react-icons/io';

function TermOfServices() {
    return (
        <>
            <IonContent fullscreen>
                <div className='servicesContainer'>
                    <div className='backContainer'>
                        <IoIosArrowDropleft className='iconBack' />
                        <div className='textBack'>Quay lại</div>
                    </div>
                    <div className='servicesHeader'>
                        <h1 className='servicesTitle'>Điều khoản dịch vụ</h1>
                    </div>
                    <div className='servicesCotent'>
                        <p className='contentServices'>
                            Quý khách vui lòng đọc kỹ Điều Khoản Sử Dụng (“Điều khoản”) khi tiến hành cài đặt ứng dụng Wanderlust.
                        </p>
                        <p className='contentServices'>
                            Quý khách chấp thuận các quy định và điều kiện trong Điều khoản này khi thực hiện các thao tác sau đây. Trường hợp Quý khách không đồng ý với bất kỳ điều khoản sử dụng nào của chúng tôi (phiên bản này và các phiên bản cập nhật), vui lòng không tải, cài đặt, sử dụng Wanderlust hoặc tháo gỡ Wanderlust ra khỏi thiết bị di động của Quý khách hàng.
                        </p>
                        <h1 className='contentTitle'>1. Giới thiệu về ứng dụng</h1>
                        <p className='contentServices'>
                            Wanderlust là ứng dụng tìm kiếm, đặt dịch vụ du lịch dành cho người dùng di động tại Việt Nam. Bạn sẽ được trải nghiệm trọn vẹn các dịch vụ du lịch hiện nay bao gồm nhưng không giới hạn như đặt phòng khách sạn, đặt vé máy bay, đặt vé tàu, đặt tour du lịch cũng như cung cấp các thông tin du lịch tới khách hàng. Wanderlust hiện hỗ trợ 2 nền tảng: iOS và Android.
                        </p>
                        <p className='contentServices'>
                            Wanderlust cung cấp dịch vụ cho khách hàng trên 18 tuổi, nếu dưới 18 tuổi phải truy cập dưới sự giám sát của cha mẹ hay người giám hộ hợp pháp. Để tham gia sử dụng dịch vụ của Wanderlust, bạn chỉ cần đáp ứng các điều kiện sau đây để có thể sử dụng các dịch vụ được cung cấp trên Wanderlust:
                            <br />
                            - Người dùng sử dụng thiết bị có hỗ trợ tính năng kết nối Internet.
                            <br />
                            - Người dùng đăng ký tài khoản và sử dụng dịch vụ.
                        </p>
                        <h1 className='contentTitle'>2. Cập nhật</h1>
                        <p className='contentServices'>
                            Ứng dụng có thể được cập nhật thường xuyên bởi nhà sản xuất. Chúng tôi có toàn quyền thay đổi những điều khoản, chính sách mà chúng tôi cho rằng không còn phù hợp mà không cần báo trước, bạn mặc nhiên đồng ý chấp hành các sửa đổi trong quy định mới.
                        </p>
                    </div>
                </div>
            </IonContent>
        </>
    );
}

export default TermOfServices;