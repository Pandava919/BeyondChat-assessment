import React, { useState } from 'react';
import { GoogleLogin } from '@react-oauth/google';
import Input from './ui/Input';
import { useNavigate } from 'react-router-dom';
import Button from './ui/Button';
import { jwtDecode } from 'jwt-decode';

export default function RegistrationForm() {
    const [user, setUser] = useState({
        name: '',
        email: '',
        password: ''
    });
    const navigaterFunc = useNavigate()
    const onchangeHandler = (e) => {
        const { name, value } = e.target;
        setUser({ ...user, [name]: value })
        console.log(user);

    }
    const handleSubmit = (e) => {
        e.preventDefault();
        navigaterFunc('/verify')  //navigating to otp component fot verification
    };

    return (
        <section className='min-h-screen flex justify-center items-center '>
            <div className='h-96 z-2  w-90 m-3 p-3 sm:p-4 md:p-6 flex flex-col items-center justify-center gap-1 rounded-2xl shadow shadow-gray-950 dark:shadow-gray-400'>
                <form onSubmit={handleSubmit} className=" h-full flex flex-col justify-evenly items-center">
                    <div className='flex flex-col items-center'>
                        <h2 className=' text-black dark:text-white font-semibold text-lg sm:text-xl md:text-2xl '>Welcome to <span className='text-blue-600'>BeyondChats</span></h2>
                        <span className='dark:text-white font-light'>Register for BeyondChats</span>
                    </div>
                    <div className='w-full'>
                        <Input
                            type='text'
                            placeholder='Name'
                            inpName='name'
                            id='name'
                            val={user.name}
                            labelData='Name'
                            onchangeHandler={onchangeHandler}
                            isRequired={true}
                        />
                    </div>
                    <div className='w-full'>
                        <Input
                            type='email'
                            placeholder='Email'
                            inpName='email'
                            id='email'
                            val={user.email}
                            labelData='Email'
                            onchangeHandler={onchangeHandler}
                            isRequired={true}
                        />
                    </div>
                    <div className='w-full'>
                        <Input
                            type='password'
                            placeholder='Password'
                            inpName='password'
                            id='password'
                            val={user.password}
                            labelData='Password'
                            onchangeHandler={onchangeHandler}
                            isRequired={true}
                        />
                    </div>
                    <Button
                        type='submit'
                        enterData='Register'
                    />
                </form>
                <div className='flex items-center justify-center gap-1.5'>
                    <hr className='text-black dark:text-white w-20' />
                    <span className='text-sm text-black dark:text-white'>OR</span>
                    <hr className='text-black dark:text-white w-20' />
                </div>
                <div className='bg-black'>
                    {/* google sign in component  */}
                    <GoogleLogin
                        onSuccess={credentialResponse => {
                            console.log(jwtDecode(credentialResponse.credential));
                            navigaterFunc('/org-setup');
                        }}
                        onError={() => {
                            alert('Login Failed!!');
                            console.log('Login Failed');
                        }}
                    />
                </div>
            </div>
        </section>
    );
}