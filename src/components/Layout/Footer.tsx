import {FaFacebook, FaInstagram, FaLinkedin, FaTwitter} from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className="w-full h-[80px] mx-auto bg-slate-900 text-gray-300 py-y px-6">
            <div className='flex justify-center'>
                <div className='flex h-[80px] items-center justify-between w-[200px] sm:w-[250px] pt-4 text-2xl'>
                    <a href="https://www.linkedin.com/in/jobbsoknader" target="_blank" rel="noopener noreferrer">
                        <FaLinkedin className='h-6 w-6 text-gray-400 hover:text-indigo-600 hover:cursor-pointer' />
                    </a>
                    <a href="https://www.facebook.com/jobbsoknader" target="_blank" rel="noopener noreferrer">
                        <FaFacebook className='h-6 w-6 text-gray-400 hover:text-indigo-600 hover:cursor-pointer' />
                    </a>
                    <a href="https://www.instagram.com/jobbsoknader" target="_blank" rel="noopener noreferrer">
                        <FaInstagram className='h-6 w-6 text-gray-400 hover:text-indigo-600 hover:cursor-pointer' />
                    </a>
                    <a href="https://twitter.com/jobbsoknader" target="_blank" rel="noopener noreferrer">
                        <FaTwitter className='h-6 w-6 text-gray-400 hover:text-indigo-600 hover:cursor-pointer' /> 
                    </a>
                </div>
            </div>
        </footer>
    ) 
}

export default Footer;
