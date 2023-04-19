import Hero from './components/Hero';
import SaveTime from './components/SaveTime';
import HowItWorks from './components/HowItWorks';
import WhatWeOffer from './components/WhatWeOffer';
import Pricing from './components/Pricing';

const LandingPage = () => {
    return  (
        <> 
            <Hero />
            <SaveTime />
            <HowItWorks />
            <WhatWeOffer />
            {/* <Pricing /> */}
        </>
    )
}

export default LandingPage;