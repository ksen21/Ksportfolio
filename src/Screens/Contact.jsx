


import React from 'react';

import LineGradient from '../components/LineGradient';
import { useForm } from 'react-hook-form';


import { motion } from 'framer-motion';

export default function Contact() {

    const { register, triger, formState: {errors} } = useForm();

const handleSubmit = () =>{
    setTimeout(() => {
        console.log("Delayed for 1 second.");
      }, "2000");
}


    return (
        <section id="contact" className='py-36'>

            {/* HEADINGS */}

            <motion.div className='flex justify-end w-full'
                initial="hidden"
                whileInView='visible'
                viewport={{ once: true, amount: 0.5 }}
                transition={{ delay: 0.1, duration: 0.5 }}
                variants={{ hidden: { opacity: 0, y: -30 }, visible: { opacity: 1, y: 0 } }}
            >

                <div>
                    <p className="font-playfair font-semibold text-4xl  ">
                        <span className='text-yellow'>CONTACT ME</span> TO GET STARTED
                    </p>
                    <div className="flex md:justify-end my-5  ">
                        <LineGradient width="w-1/2" />
                    </div>
                </div>

            </motion.div>

            {/* FORM AND IMAGE SECTION */}

            <div className='md:flex md:justify-between gap-16 mt-10'>

                <motion.div
                    className='basis-1/2 flex justify-center'
                    initial="hidden"
                    whileInView='visible'
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ delay: 0.2, duration: 0.5 }}
                    variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0 } }}
                >

                    {/* <img src="./src/assets/contact-image.jpeg" alt="Contact" /> */}

                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3679.8534025882996!2d75.88792791404839!3d22.733689585100127!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3962fd4f3d8318a3%3A0xa8ca1cebf90d849d!2sLIG%20Square%2C%20Rss%20Nagar%2C%20Indore%2C%20Madhya%20Pradesh%20452001!5e0!3m2!1sen!2sin!4v1678895507748!5m2!1sen!2sin" width="600" height="450" style={{border:0}} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>

                </motion.div>

                <motion.div className='basis-1/2 mt-10 md:mt-0'
                    initial="hidden"
                    whileInView='visible'
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ delay: 0.2, duration: 0.5 }}
                    variants={{ hidden: { opacity: 0, y: 50 }, visible: { opacity: 1, y: 0 } }}>
                    <form
                         action='https://formspree.io/f/xyyapopq'
                        method='POST'>
                        <input type="text" className='w-full bg-blue font-semibold placeholder-opaque-black p-3'name='username' placeholder='Name' {...register('name', {
                            required: true,
                            maxLength: 100
                        })} />
                        {errors.name && (
                            <p className='text-red mt-1' >
                                {errors .name.type === 'required' && "This field is required"}
                                {errors.name.type === 'maxLength' && "Max length is 100 char"}
                            </p>
                        )
                        }

                        <input type="text" name='Email' className='w-full bg-blue font-semibold placeholder-opaque-black p-3 mt-5' placeholder='Email' {...register('email', {
                            required: true,
                            pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                        })}/>
                        {errors.email && (
                            <p className='text-red mt-1' >
                                {errors.email.type === 'required' && "This field is required"}
                                {errors.email.type === 'pattern' && "Invalid Email Address"}

                            </p>
                        )
                        }

                        <textarea type="text" name="message" className='w-full bg-blue font-semibold placeholder-opaque-black p-3 mt-5' placeholder='Message' row="4" cols="50" {...register('message', {
                            required: true,
                            maxLength:2000
                        })}/>
                        {errors.message && (
                            <p className='text-red mt-1' >
                                {errors.message.type === 'required' && "This field is required"}
                                {errors.message.type === 'maxLength' && "Max Length is 2000 char"}

                            </p>
                        )
                        }

                        <button type='submit' onClick={handleSubmit} className='p-5 bg-yellow font font-semibold text-deep-blue mt-5 hover:bg-red hover:text-white transition duration-500'> Send Messsage

                        </button>
                    </form>
                </motion.div>

            </div>

        </section>
    )
}



