import React, { useEffect, useState } from 'react'
import Button from './ui/Button'

const TestIntegration = () => {
    const [isChatbotIntegrated, setIsChatbotIntegrated] = useState(false)
    useEffect(() => {
        const chatBotIntegrationHandler = () => {
            const integrate = Math.random() < 0.6;
            if (integrate) {
                setIsChatbotIntegrated(true)
            } else {
                setIsChatbotIntegrated(false)
            }
        }
        chatBotIntegrationHandler()
    }, [])

    return (
        <section className='min-h-screen p-5'>
            <div className=' mt-10'>
                {isChatbotIntegrated && (
                    <div>
                        <div className="mt-4 w-full p-4 bg-green-100 border-green-400 border-2 rounded-lg">
                            <h3 className="text-lg sm:text-2xl font-semibold mb-2">Integration Successful!!</h3>
                        </div>
                        <div className='flex gap-2 flex-col sm:flex-row'>
                            <div>
                                <Button enterData='Explore Admin Panel' />
                            </div>
                            <div>
                                <Button enterData='Start talking to your chatbot' style='bg-green-500 hover:bg-green-700' />
                            </div>
                            {/* Social media sharing buttons */}
                        </div>
                    </div>
                )}

                {!isChatbotIntegrated && (
                    <div className="mt-4 p-4 bg-red-100 border border-red-400 rounded">
                        <h3 className="text-lg font-semibold mb-2">Integration Not Detected Yet.</h3>
                        <p>Please ensure the integration code is correctly placed on your website.</p>
                    </div>
                )}
            </div>
        </section>
    )
}

export default TestIntegration
