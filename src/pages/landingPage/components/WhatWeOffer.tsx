import {  CheckCircleIcon} from '@heroicons/react/24/solid'
import { Element } from 'react-scroll';

import { aiPitchData } from '@/data/aiPitchData';

const WhatWeOffer = () => {

    return (
       <Element name="platforms" className="flex justify-center items-center w-full my-32 md:h-[1300px]">
            <div className="max-w-[1240px] px-2">
                <h2 className="text-5xl font-bold text-center">Hva vår AI løsning kan tilby</h2>
                <p className="text-2xl py-8 text-gray-500 text-center">Det er viktig å huske på at det å bruke AI til å skrive jobbsøknader ikke erstatter behovet for å tilpasse søknaden din til den spesifikke jobben du søker på og arbeidsgiverens behov. Men med riktig tilnærming kan AI være en nyttig ressurs i jobbsøknadsprosessen.</p>
                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-14  pt-12 ">
                {aiPitchData.map((item, index) => {
                    return (
                        <div key={index} className="border rounded-xl shadow-xl relative ">
                             <div className="absolute mx-auto w-full mt-[-2rem]">
                                    <CheckCircleIcon className="w-16 text-indigo-600 mx-auto pb-2" />  
                                </div> 
                            <div className="p-8 mt-5">
                                <h3 className="font-bold text-lg">{item.title}</h3>
                                <p className="text-lg pt-2 pb-4">{item.description}</p>
                            </div>
                        </div>
                    )
                } )}
                </div>
            </div> 
       </Element>
    )
}

export default WhatWeOffer

