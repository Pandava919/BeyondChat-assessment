import React, { useState } from 'react'
import Input from './ui/Input';
import Button from './ui/Button';
import { useNavigate } from 'react-router-dom';

const Otp = () => {
    const [otpData, setOtpData] = useState('');
    const navigateFunc = useNavigate()
    const otpRegex = /^\d{0,6}$/;
    const otp = '123456'
    const onchangeHandler = (e) => {
        if (otpRegex.test(e.target.value)) {
            setOtpData(e.target.value)
        } else {
            alert('Enter Only Numbers')
        }
    }
    const onClickHandler = () => {
        if (otp === otpData) {
            alert('Verified successfully')
            navigateFunc('/org-setup')
            console.log('success');

        }
    }

    return (
        <section className='h-screen flex justify-center '>
            <div className='h-52 mt-24 p-4 flex justify-around flex-col items-center rounded-2xl shadow shadow-gray-950 dark:shadow-gray-400'>
                <h2 className=' text-xl sm:text-2xl md:text-4xl font-bold text-black dark:text-white'>Verify OTP</h2>
                <Input
                    type='text'
                    placeholder='OTP'
                    inpName='otp'
                    labelData='Enter the OTP'
                    inpMode='numeric'
                    style='text-center border-b'
                    val={otpData}
                    len={6}
                    pattern={otpRegex}
                    onchangeHandler={onchangeHandler}
                />
                <div>
                    <Button
                        enterData='Verify'
                        onClickHandler={onClickHandler}
                    />
                </div>
            </div>
        </section>
    )
}

export default Otp
