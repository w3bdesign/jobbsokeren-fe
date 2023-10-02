import { ClipboardDocumentCheckIcon, NewspaperIcon, PencilSquareIcon } from '@heroicons/react/24/solid';
import {Link as RouterLink} from 'react-router-dom';
import { Element } from 'react-scroll';
import Typewriter from 'typewriter-effect';

import HeroImage from '@/assets/images/png/heroImage.webp'


const Hero = () => {  

    return (
    <Element name="" className='w-full pt-20 md:pt-12 px-4 h-screen min-h-[900px] bg-zinc-100 flex flex-col justify-between'>
        <div className='grid md:grid-cols-2 max-w-[1240px] m-auto'>
            <div className='flex flex-col justify-center md:items-start w-full px-2 py-8'>
               
                <h1 className='py-3 text-5xl md:text-7xl font-bold'>AI - Jobbsøknader</h1>
                <p className='text-2xl'>Sikre deg drømmejobben</p> 
                <div className='text-2xl'> 
                <Typewriter
                    options={{
                        strings: ['Unike og skreddersydde søknader', 'Jobbsøknad på minutter', 'Siste generasjon AI GPT-4'],
                        autoStart: true,
                        loop: true,
                    }} />
                </div>
                <RouterLink className='w-full' to="/jobbsokeren">
                    <button className='py-3 px-6 w-full  md:w-[60%] my-4'>Kom i gang</button>
                </RouterLink>
            </div>
            <div>
                <img className='w-full' src={HeroImage} alt="/" />
            </div>
            <div className='hidden absolute 2xl:flex flex-col py-8 md:min-w-[650px] md:max-w-[500px] bottom-[5%]
            mx-1 md:left-1/2 transform md:-translate-x-1/2 bg-zinc-100
            border border-slate-300 rounded-xl text-center shadow-2xl '>
                <div className='flex justify-between flex-wrap px-4'>
                    <p className='flex px-4 py-2 text-slate-500 uppercase items-center'><ClipboardDocumentCheckIcon className='h-8 text-indigo-600 mr-2'/>Lim inn Jobbsøknad</p>
                    <p className='flex px-4 py-2 text-slate-500 uppercase items-center'><PencilSquareIcon className='h-8 text-indigo-600 mr-2' /> AI skriver søknad</p>
                    <p className='flex px-4 py-2 text-slate-500 uppercase items-center'><NewspaperIcon className='h-8 text-indigo-600 mr-2' /> Last ned</p>
                </div>
            </div>
        </div>
    </Element>
    );
};

export default Hero; 


