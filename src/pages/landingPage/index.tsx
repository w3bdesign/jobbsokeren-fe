import ArticlesIndex from './components/ArticlesIndex';
import Hero from './components/Hero';
import HowItWorks from './components/HowItWorks';
import Pricing from './components/Pricing';
import SaveTime from './components/SaveTime';
import WhatWeOffer from './components/WhatWeOffer';


const LandingPage = () => {

    return  (
        <> 
            <Hero />
            <SaveTime />
            <HowItWorks />
            <WhatWeOffer />
            <Pricing />
            <ArticlesIndex/>
        </>
    )
}

export default LandingPage;