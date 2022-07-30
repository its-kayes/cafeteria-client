import React from 'react';
import { SharedBanner } from '../../shared/SharedBanner';
import { ChooseSection } from '../home/ChooseSection';
import OurHistory from './OurHistory';
import ParallaxSection from './ParallaxSection';
import Testimonial from './Testimonial';

const About = () => {
    return (
        <div>
            <SharedBanner header={"About us"} title={"who we are"} name={"About"} />
            <OurHistory />
            <ChooseSection />
            <ParallaxSection />
            <Testimonial />
        </div>
    );
};

export default About;