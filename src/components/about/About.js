import React from 'react';
import { SharedBanner } from '../../shared/SharedBanner';
import { ChooseSection } from '../home/ChooseSection';
import OurHistory from './OurHistory';
import ParallaxSection from './ParallaxSection';
import Testimonial from './Testimonial';

const About = () => {
    return (
        <div>
            <SharedBanner props={"About us"} />
            <OurHistory />
            <ChooseSection />
            <ParallaxSection />
            <Testimonial />
        </div>
    );
};

export default About;