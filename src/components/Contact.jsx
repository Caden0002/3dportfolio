import { motion, useAnimation } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';
import EarthCanvas from "./Earth.jsx";

const heading = 'GET IN TOUCH';
const heading2 = 'Contact';

const submitForm = async (formData, setFormSubmitted) => {
    try {
        formData.date = new Date().toLocaleDateString();
        formData.time = new Date().toLocaleTimeString();

        const formDatab = new FormData();
        for (const key in formData) {
            formDatab.append(key, formData[key]);
        }

        const response = await fetch(
            'https://script.google.com/macros/s/AKfycbwqrU4qMNkGm7cA2YDw0thfs6FTaAOWv-AyloHtdxlFDHUJjATA2qscGp_3gk6bNocf8A/exec',
            {
                method: 'POST',
                body: formDatab,
            }
        );

        if (response.ok) {
            console.log('Form submitted successfully');
        } else {
            console.error('Failed to submit form');
        }
    } catch (error) {
        console.error('Error submitting form:', error);
        setFormSubmitted(true);
    }
};

function Contact(props) {
    const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
    const [loading, setLoading] = useState(false);
    const [formSubmitted, setFormSubmitted] = useState(false);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async () => {
        setLoading(true);

        try {
            await submitForm(formData, setFormSubmitted);
            setFormData({ name: '', email: '', subject: '', message: '' });
            setFormSubmitted(true); // Set formSubmitted to true after successful submission
        } catch (error) {
            console.error('Error submitting form:', error);
        } finally {
            setLoading(false);
        }
    };


    return (
        <div className="bg-backgroundColorPrimary">
            <div id="Contact" className="mx-auto flex flex-col min-h-screen justify-center px-8 md:px-0 md:w-2/3 2xl:w-1/2 py-24">
                <h1 className="text-base text-textColorTertiary">
                    {heading}
                </h1>
                <h1 className="mt-4 text-5xl text-textColorPrimary font-bold">
                    {heading2}
                </h1>

                <div className="md:flex items-center justify-center z-10 mt-12 space-x-4">
                    <form className="md:w-1/2 text-textColorTertiary text-sm">
                        <div className="flex flex-col mb-4 ">
                            <input type="text" placeholder="Name*" id="name" name="name"
                                   className="border-b-2  border-textColorSecondary placeholder-textColorSecondary bg-transparent focus:outline-none w-full  py-3 transition-transform hover:border-textColorTertiary"
                                   value={formData.name} onChange={handleChange}
                            />
                        </div>
                        <div className="flex flex-col mb-4">
                            <input type="email" placeholder="Email*" id="email" name="email"
                                   className="border-b-2 border-textColorSecondary placeholder-textColorSecondary bg-transparent focus:outline-none w-full py-3 transition-transform  hover:border-textColorTertiary"
                                   value={formData.email} onChange={handleChange}
                            />
                        </div>
                        <div className="flex flex-col mb-4">
                            <input type="text" placeholder="Subject*" id="subject" name="subject"
                                   className="border-b-2  border-textColorSecondary placeholder-textColorSecondary bg-transparent focus:outline-none w-full py-3 transition-transform hover:border-textColorTertiary"
                                   value={formData.subject} onChange={handleChange}
                            />
                        </div>
                        <div className="flex flex-col mb-4">
                            <textarea placeholder="Message*" id="message" rows="4" name="message"
                                      className="border-b-2  border-textColorSecondary placeholder-textColorSecondary bg-transparent focus:outline-none w-full py-3 transition-transform hover:border-textColorTertiary"
                                      value={formData.message} onChange={handleChange}
                            />
                        </div>
                        {formSubmitted ? (
                            <button
                                type="button"
                                className="border-2 border-gradient bg-backgroundColorTertiary mt-4 p-2 w-48"
                                disabled
                            >
                                Message Sent!
                            </button>
                        ) : (
                            <button
                                onClick={handleSubmit}
                                type="button"
                                className={`border-2 border-gradient bg-backgroundColorTertiary mt-4 p-2 w-48 hover:shadow-lg hover:shadow-green-800 ${loading ? 'opacity-50 cursor-not-allowed' : ''}`}
                                disabled={loading}
                            >
                                {loading ? 'Sending...' : 'Send'}
                            </button>
                        )}
                    </form>

                    <div className='mt-12 md:mt-0 md:w-1/2 md:h-[450px] h-[350px] '>
                        <EarthCanvas />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Contact;
