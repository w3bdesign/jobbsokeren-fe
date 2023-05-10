import Hero from './components/Hero';
import SaveTime from './components/SaveTime';
import HowItWorks from './components/HowItWorks';
import WhatWeOffer from './components/WhatWeOffer';
import Pricing from './components/Pricing';
import Articles from './components/Articles';

const LandingPage = () => {
    return  (
        <> 
            <Hero />
            <SaveTime />
            <HowItWorks />
            <WhatWeOffer />
            <Articles/>
            {/* <Pricing />  */}
        </>
    )
}

export default LandingPage;