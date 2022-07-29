import React from 'react';
import { ChooseSection } from '../home/ChooseSection';
import OurHistory from './OurHistory';
import ParallaxSection from './ParallaxSection';
import Testimonial from './Testimonial';

const About = () => {
    return (
        <div>
            <OurHistory />
            <ChooseSection />
            <ParallaxSection />
            <Testimonial />
        </div>
    );
};

export default About;