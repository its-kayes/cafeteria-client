import React from 'react';
import Products from '../../shared/Products';
import { ChooseSection } from './ChooseSection';
import { ChooseUs } from './ChooseUs';
import FoodAd from './FoodAd';
import { HomeBanner } from './HomeBanner';

const Home = () => {
    return (
        <div>
            <HomeBanner> </HomeBanner>
            <ChooseSection> </ChooseSection>
            <FoodAd> </FoodAd>
            {/* <Products /> */}
            <ChooseUs> </ChooseUs>
        </div>
    );
};

export default Home;