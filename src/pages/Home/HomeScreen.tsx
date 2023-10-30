import React, { useState } from 'react';
import * as Style from './style'
import { Category } from '../../utils/types'
import InputSearch from '../../containers/InputSearch/InputSearch';

const CATEGORIES: Category[] = [
    {
        description: 'All Places',
        key: 'ALL',
    },
    {
        description: 'Popular',
        key: 'POPULAR',
    },
    {
        description: 'Top Rated',
        key: 'TOP_RATED',
    },
    {
        description: 'Featured',
        key: 'FEATURED',
    },
    {
        description: 'Luxury',
        key: 'LUXURY',
    },
];

function HomeScreen() {
    const [selectedCategory, setSelectedCategory] = useState<Category>(
        CATEGORIES[0],
    );

    const handleCategoryClick = (categoryKey: string) => {
        const categoryClicked = CATEGORIES.find(
            category => category.key === categoryKey,
        ) as Category;

        setSelectedCategory(categoryClicked);
    };

    return (
        <Style.Container>
            <Style.Header>
                <Style.UserIcon />
                <Style.SubHeader>
                    <Style.Title>
                        Xin chào,
                    </Style.Title>
                    <Style.Subtitle>
                        Hôm nay bạn muốn đi đâu?
                    </Style.Subtitle>
                </Style.SubHeader>
                <Style.NotificationIcon />
            </Style.Header>

            <Style.InputContainer>
                <InputSearch placeholder="Tìm kiếm trong Wanderlust" />
            </Style.InputContainer>
        </Style.Container>
    );
}

export default HomeScreen;