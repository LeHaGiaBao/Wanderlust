import React from 'react';
import './SearchBar.css'
import { IonSearchbar } from '@ionic/react';

function SearchBar() {
    return (
        <>
            <div className='searchBar'>
                <IonSearchbar placeholder='Tìm kiếm trong Wanderlust' class="custom" />
            </div>
        </>
    );
}

export default SearchBar;