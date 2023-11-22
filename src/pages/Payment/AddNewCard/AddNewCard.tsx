import React from 'react';
import './AddNewCard.css'
import { IonContent } from '@ionic/react';
import Navbar from '../../../components/Navbar/Navbar';

function AddNewCard() {
    return (
        <>
            <IonContent fullscreen>
                <div className='addNewCardContainer'>
                    <Navbar title="Thêm thẻ mới" />
                    <div className='cardContainer'>
                        <div className='cardHeader'>
                            <h1 className='cardType'>CREDIT</h1>
                            <h1 className='bankName'>ABC BANK</h1>
                        </div>
                        <div className='cardSymbol'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="40" height="30" viewBox="0 0 40 30" fill="none">
                                <path d="M1 6H20" stroke="#6D6D6D" stroke-linecap="round" />
                                <path d="M1 12H13" stroke="#6D6D6D" stroke-linecap="round" />
                                <path d="M1 18H13" stroke="#6D6D6D" stroke-linecap="round" />
                                <path d="M1 24H39" stroke="#6D6D6D" stroke-linecap="round" />
                                <path d="M26 18H39" stroke="#6D6D6D" stroke-linecap="round" />
                                <path d="M27 12H39" stroke="#6D6D6D" stroke-linecap="round" />
                                <path d="M19 1L19 6" stroke="#6D6D6D" stroke-linecap="round" />
                                <path d="M19 24L19 29" stroke="#6D6D6D" stroke-linecap="round" />
                                <path d="M21 1L21 6" stroke="#6D6D6D" stroke-linecap="round" />
                                <path d="M21 24L21 29" stroke="#6D6D6D" stroke-linecap="round" />
                                <path d="M20.0249 6C14.2416 6 12.9751 9.62256 13.0533 11.6252C13.0586 11.7616 13.1304 11.8872 13.2349 11.9748C16.2989 14.5438 14.6172 17.0027 13.2362 18.0409C13.1295 18.1212 13.0521 18.2356 13.0351 18.3681C12.7777 20.3694 13.8217 24 20.0249 24C25.9745 24 26.872 20.6601 26.5465 18.6213C26.5049 18.3602 26.2225 18.1642 26.0378 17.9749C25.1822 17.0983 24.3434 13.4686 26.7445 11.9735C26.8891 11.8835 26.9943 11.7364 26.9986 11.5661C27.0496 9.5522 25.7518 6 20.0249 6Z" stroke="#6D6D6D" />
                                <rect x="0.5" y="0.5" width="39" height="29" rx="3.5" stroke="#6D6D6D" />
                            </svg>
                        </div>
                        <h1 className='cardNumber'>4321 9876 5432 1234</h1>
                        <div className='cardFooter'>
                            <div className='userInformation'>
                                <h1 className='cardUserName'>NGUYEN THI MY DUYEN</h1>
                                <h1 className='cardDate'>08/2023</h1>
                            </div>
                            <div className='logoImage'>
                                <img className='cardLogo' alt="" src="https://cdn.pixabay.com/photo/2021/12/06/13/48/visa-6850402_960_720.png" />
                            </div>
                        </div>
                    </div>
                    <form className='formInput'>
                        <div className='inputField'>
                            <label className='labelText'>Tên chủ thẻ</label>
                            <input id='email' type='email' className='inputData' />
                        </div>
                        <div className='inputField'>
                            <label className='labelText'>Số thẻ</label>
                            <input id='email' type='email' className='inputData' />
                        </div>
                        <div className='inputField'>
                            <label className='labelText'>Thời hạn</label>
                            <input id='email' type='email' className='inputData' />
                        </div>
                        <div className='inputField'>
                            <label className='labelText'>Mã bảo mật</label>
                            <input id='email' type='email' className='inputData' />
                        </div>
                        <button className='buttonInput'>Thêm thẻ</button>
                    </form>
                </div>
            </IonContent>
        </>
    );
}

export default AddNewCard;