import {  FilmIcon } from '@heroicons/react/24/outline';
import BackgroundImage from '@/assets/images/png/howItWorksBackground.png';
import { Element } from 'react-scroll';

const HowItWorks = () => {
    return (
        <Element name="support" className='w-full mt-24'>
            <div className='w-full h-[700px] bg-gray-900/90 absolute'>
                <img className='w-full h-full object-cover mix-blend-overlay' src={BackgroundImage} alt="BackgroundImage" />
            </div>
            <div className='max-w-[1240px] mx-auto text-white relative'>
                <div className='px-4 py-12'>
                    <h2 className='text-3xl pt-8 text-slate-300 uppercase text-center'>Slik fungerer det</h2>
                    <h3 className='text-5xl font-bold py-6 text-center'>Se vår veileder video</h3>
                </div>
                <div className='relative px-4 pt-12 sm:pt-10 mx-auto md:max-w-[75%]'>
                    <div>
                        <div className='hidden sm:block sm:w-full p-8 absolute'>
                            <FilmIcon className='w-16 p-4 mx-auto bg-indigo-600 text-white rounded-lg mt-[-4rem]'/>
                        </div>
                        <iframe className='w-full h-[300px] sm:h-[505px] rounded-xl shadow-2xl' src="https://www.youtube.com/embed/aIUv6LoMIdY?autoplay=1&mute=1"  title="YouTube video player"></iframe>
                    </div>
                </div>
            </div>  
        </Element>
  );
};

export default HowItWorks;