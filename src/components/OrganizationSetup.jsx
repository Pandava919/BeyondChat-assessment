import React, { useState, useEffect } from 'react';
import Input from './ui/Input';
import Textarea from './ui/Textarea';
import Button from './ui/Button';
import { useNavigate } from 'react-router-dom';

export default function OrganizationSetup({ onSetup }) {
    const [organization, setOrganization] = useState({
        name: '',
        website: '',
        description: ''
    });
    const [metaDescription, setMetaDescription] = useState('');
    const [webpages, setWebpages] = useState([]);
    const [selectedWebpage, setSelectedWebpage] = useState(null);
    const naviagateFunc = useNavigate()

    const onchangeHandler = (e) => {
        const { name, value } = e.target;
        setOrganization({ ...organization, [name]: value })
    }
    useEffect(() => {
        if (organization.website) {
            setTimeout(() => {
                setMetaDescription("This is a dummy meta description fetched from the website."); // Replace with actual API call
            }, 500);

            // Simulate fetching webpages (replace with actual API call)
            setTimeout(() => {
                setWebpages([
                    { url: organization.website + '/home' || 'https://www.example.com/home', status: 'scraped', chunks: ['Chunk 1', 'Chunk 2', 'Chunk 3'] },
                    { url: organization.website + '/about' || 'https://www.example.com/about', status: 'pending' },
                    { url: organization.website + '/contact' || 'https://www.example.com/contact', status: 'detected' },
                    { url: organization.website + '/products' || 'https://www.example.com/products', status: 'scraped', chunks: ['Chunk A', 'Chunk B'] },
                ]);
            }, 1000); // Simulate delay for fetching webpages
        } else {
            setWebpages([]); // Clear webpages if website is empty
            setMetaDescription('');
        }
    }, [organization.website]);


    const onNextHandler = () => {
        onSetup(organization);
        naviagateFunc('/bot-integration')

    }
    const handleWebpageClick = (webpage) => {
        setSelectedWebpage(webpage);
    };

    return (
        <section className='min-h-screen w-full mt-10 p-5'>
            <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-black dark:text-white">Organizarion Setup</h2>

            <div className='h-full w-full grid grid-cols-3 justify-center items-start gap-4'>
                <div className='h-60 flex flex-col items-center justify-center col-span-3 sm:col-span-1 mb-0 sm:mb-35'>
                    <div className=" w-full sm:max-w-md flex flex-col justify-center items-center gap-3 p-3 sm:px-10">
                        <div className='w-full'>
                            <Input
                                type='text'
                                placeholder='Company Name'
                                inpName='name'
                                val={organization.name}
                                onchangeHandler={onchangeHandler}
                                isRequired={false}
                            />
                        </div>
                        <div className='w-full'>
                            <Input
                                type='url'
                                placeholder='Company Website'
                                inpName='website'
                                val={organization.website}
                                onchangeHandler={onchangeHandler}
                                isRequired={false}
                            />
                        </div>
                        <div className='w-full'>
                            <Textarea
                                type='text'
                                placeholder='Company Description'
                                inpName='description'
                                val={organization.description}
                                onchangeHandler={onchangeHandler}
                                isRequired={false}
                            />
                        </div>
                        {/* {metaDescription && <p className="text-gray-600 dark:text-white mb-2">Meta Description: {metaDescription}</p>} */}
                    </div>
                    <div>
                        <Button
                            type='submit'
                            enterData='Next'
                            onClickHandler={onNextHandler}
                        />
                    </div>
                </div>
                {webpages &&
                    <div className=" mt-0 w-full sm:w-72  flex justify-center items-start mx-auto sm:mt-30 rounded-2xl col-span-3 sm:col-span-1 p-3 sm:p-0 ">
                        {/* <h3 className="text-lg font-semibold mb-2 text-white">Webpages</h3> */}
                        <ul className='w-full flex flex-col gap-1'>
                            {webpages?.map((page) => (
                                <li
                                    key={page.url}
                                    className={`p-2 cursor-pointer rounded-md  ${page.status === 'scraped' ? 'bg-green-100' : page.status === 'pending' ? 'bg-yellow-100 animate-pulse' : 'bg-red-100'} hover:bg-gray-200`}
                                    onClick={() => handleWebpageClick(page)}
                                >
                                    {page.url} ({page.status})
                                </li>
                            ))}
                        </ul>
                    </div>}
                {selectedWebpage?.chunks &&
                    <div className="h-full p-3 sm:p-3 border w-full sm:w-80 flex flex-col justify-start mx-auto rounded col-span-3 sm:shadow shadow-gray-400 sm:col-span-1 mt-0 ">
                        <h4 className="font-semibold text-gray-800 dark:text-white">Chunks from {selectedWebpage.url}</h4>
                        <ul className=' list-disc pl-5'>
                            {selectedWebpage?.chunks.map((chunk, index) => (
                                <li key={index} className='text-gray-800 dark:text-white'>{chunk}</li>
                            ))}
                        </ul>
                    </div>
                }
            </div>
        </section >
    );
}
