import ArticlesIndex from './components/ArticlesIndex';
import Hero from './components/Hero';
import HowItWorks from './components/HowItWorks';
import PricingIndex from './components/PricingIndex';
import SaveTime from './components/SaveTime';
import WhatWeOffer from './components/WhatWeOffer';


const LandingPage = () => {

    return  (
        <> 
            <Hero />
            <SaveTime />
            <HowItWorks />
            <WhatWeOffer />
            <PricingIndex />
            <ArticlesIndex/>
        </>
    )
}

export default LandingPage;