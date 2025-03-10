import React, { useState } from 'react';
import Button from './ui/Button';
import { useNavigate } from 'react-router-dom';
import CodeBlock from './ui/CodeBlock';


function ChatbotIntegration({ organization }) {

    const navigatorFunc = useNavigate();
    const [showInstuctions, setShowInstructions] = useState(false);
    const code = `<script>
        const integrationCode = function() {
             var chatbot = document.createElement("script");
            chatbot.type = "text/javascript";
             chatbot.async = true;
            chatbot.src = "https://example.com/chatbot.js"; // Replace with actual chatbot script URL
            document.head.appendChild(chatbot);
         };
</script>`

    const handleTestChatbot = () => {
        if (organization && organization?.website) {
            window.open(organization.website, '_blank');
        } else {
            alert("Please set up your organization and website first.");
        }
    };
    const instuctionsHandler = () => {
        console.log("kfjaskjf");

        if (organization?.website) {
            setShowInstructions(true)
        } else {
            setShowInstructions(false);
            alert('Please set up your organization and website');
        }
    }

    const TestintegrationHandler = () => {
        if (organization?.website) {
            navigatorFunc('/test-integration')
        } else {
            alert('Please set up your organization and website');
        }
    }
    const onCopyHandler = () => {
        alert('copied Successfully!!')
    }
    const mailInstuctionsHandler = () => {
        if (organization?.website && showInstuctions) {
            alert('Mail sent Successfully!!');
        } else {
            alert('Please set up your organization and website');
        }
    }

    return (
        <section className=' h-full w-full p-4 mt-10'>
            <h2 className="text-lg sm:text-2xl font-bold mb-4 text-black dark:text-white">Chatbot Integration & Testing</h2>
            <div className=' w-full flex justify-between flex-col sm:flex-row'>
                <div className='w-full'>
                    <div>
                        <Button
                            enterData='Test Chatbot'
                            onClickHandler={handleTestChatbot}
                        />
                    </div>
                    <div>
                        <Button
                            enterData='Integrate on your website'
                            style='bg-green-500 hover:bg-green-700'
                            onClickHandler={instuctionsHandler}
                        />
                    </div>
                    <div>
                        <Button
                            enterData='Test Integration'
                            onClickHandler={TestintegrationHandler}
                            style='bg-purple-600 hover:bg-purple-900'
                        />
                    </div>
                </div>
                {showInstuctions &&
                    <div className=' w-full mt-7 sm:mt-0'>
                        <h3 className='text-black dark:text-white text-3xl mb-2 font-bold'>Instructions to Integrete</h3>
                        <ol className='list-decimal text-black dark:text-white flex flex-col gap-1 ml-6'>
                            <li>Open your website’s HTML file.</li>
                            <li>Locate the {"<head>"} section.</li>
                            <li>Copy and paste the following code inside the {"<head>"} section:</li>
                            <div className='border-gray-300 border-1'>
                                <CodeBlock
                                    code={code}
                                    language='javascript'
                                    showLineNumbers={false}
                                    onCopy={onCopyHandler} />
                            </div>
                            <li>Save and upload the changes to your server.</li>
                            <li>Visit your website to confirm the chatbot is loading correctly.</li>
                        </ol>
                        <div className='w-full text-center sm:text-start mt-3 ml-3'>
                            <Button enterData='Mail Instuctions' onClickHandler={mailInstuctionsHandler} />
                        </div>
                    </div>
                }
            </div>
        </section>
    );
}

export default ChatbotIntegration