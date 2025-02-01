import React from 'react'
import { FiGithub } from "react-icons/fi";
import { FaXTwitter } from "react-icons/fa6";
import { PiInstagramLogo } from "react-icons/pi";
import { FaFacebookF } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa6";
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className=' fixed bottom-0 z-999 h-13 flex items-center w-full bg-white dark:bg-gray-950 border-t-gray-700 border-t-1 '>
            <div className='w-full h-fit flex items-center justify-center gap-5'>
                <Link
                    to='https://github.com/Pandava919'
                    target='_blank'
                    className='border border-gray-300 dark:border-gray-700 rounded-full p-1.5 hover:bg-cyan-500'
                >
                    <FiGithub className='text-md sm:text-lg md:text-xl font-bold text-black dark:text-white' />
                </Link>
                <Link
                    to='https://www.linkedin.com/in/panduranga-b-a86332248/'
                    target='_blank'
                    className='border border-gray-300 dark:border-gray-700 rounded-full p-1.5 hover:bg-cyan-500'
                >
                    <FaLinkedinIn className='text-md sm:text-lg md:text-xl font-bold text-black dark:text-white' />
                </Link>
                <Link
                    to='https://x.com/?lang=en-in&mx=2'
                    target='_blank'
                    className='border border-gray-300 dark:border-gray-700 rounded-full p-1.5 hover:bg-cyan-500'
                >
                    <FaXTwitter className='text-md sm:text-lg md:text-xl font-bold text-black dark:text-white' />
                </Link>
                <Link
                    to='https://www.instagram.com/'
                    target='_blank'
                    className='border border-gray-300 dark:border-gray-700 rounded-full p-1.5 hover:bg-cyan-500'
                >
                    <PiInstagramLogo className='text-md sm:text-lg md:text-xl font-bold text-black dark:text-white' />
                </Link>
                <Link
                    to='https://www.facebook.com/'
                    target='_blank'
                    className='border border-gray-300 dark:border-gray-700 rounded-full p-1.5 hover:bg-cyan-500'
                >
                    <FaFacebookF className='text-md sm:text-lg md:text-xl font-bold text-black dark:text-white' />
                </Link>
            </div>
        </footer>
    )
}

export default Footer
