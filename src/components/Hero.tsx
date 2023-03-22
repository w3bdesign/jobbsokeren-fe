import HeroImage from '../assets/heroImage3.png'
import { Element } from 'react-scroll';
import { ClipboardDocumentCheckIcon, NewspaperIcon, PencilSquareIcon } from '@heroicons/react/24/solid';


const Hero = () => {

    return (
    <Element name="" className='w-full pt-12 h-screen bg-zinc-200 flex flex-col justify-between'>
        <div className='grid md:grid-cols-2 max-w-[1240px] m-auto'>
            <div className='flex flex-col justify-center md:items-start w-full px-2 py-8'>
               
                <h1 className='py-3 text-5xl md:text-7xl font-bold'>AI - Jobbsøknader</h1>
                <p className='text-2xl'>Sikre deg drømmejobben</p>
                <p className='text-2xl'>Unike og skreddersydde søknader</p>
                <button className='py-3 px-6 sm:w-[60%] my-4'>Kom i gang</button>
            </div>
            <div>
                <img className='w-full' src={HeroImage} alt="/" />
            </div>
            <div className='hidden absolute md:flex flex-col py-8 md:min-w-[650px] md:max-w-[500px] bottom-[5%]
            mx-1 md:left-1/2 transform md:-translate-x-1/2 bg-zinc-200
            border border-slate-300 rounded-xl text-center shadow-xl'>
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