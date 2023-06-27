import { ClockIcon, CpuChipIcon, InformationCircleIcon } from '@heroicons/react/24/outline';
import { Element } from 'react-scroll';

const SaveTime = () => {
    return (
        <Element name="about" className='flex w-full md:h-[650px] my-32'>
            <div className='max-w-[1240px] m-auto'>
                <div className='text-center'>
                    <h2 className='text-5xl font-bold'>Spar tid på å skrive jobbsøknader</h2>
                    <p className='text-3xl py-6 text-gray-500'>Ved å bruke AI-teknologi kan vi generere en tilpasset søknad som er skreddersydd for å imøtekomme arbeidsgiverens krav og behov.</p>
                </div>
                <div className='grid md:grid-cols-3 gap-5 px-2 text-center'>
                    <div className='border py-8 rounded-xl shadow-xl'>
                        <ClockIcon className='w-16 text-indigo-600 mx-auto pb-2 '/>
                        <p className='text-gray-400'>Søknad på minutter</p>
                    </div>
                    <div className='border py-8 rounded-xl shadow-xl'>
                        <CpuChipIcon className='w-16 text-indigo-600 mx-auto pb-2 '/>
                        <p className='text-gray-400'>Siste generasjon AI GPT-4</p>
                    </div>
                    <div className='border py-8 rounded-xl shadow-xl'>
                        <InformationCircleIcon className='w-16 text-indigo-600 mx-auto pb-2 '/>
                        {/* <p className='text-6xl font-blod text-indigo-600 '>0,–</p> */}
                        <p className='text-gray-400' >Prøv vår jobbsøker gratis</p>
                    </div> 
                </div> 
            </div>
        </Element>
    )
}


export default SaveTime;