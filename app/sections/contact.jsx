'use client';
import React from "react";
import { useForm } from "react-hook-form";
import emailJS from "../services/email";
import { toast } from 'sonner';
import { useRef } from "react";
import {useIsVisible} from "../../hooks/useIsVisible";

export default function Contact() {
    const refAbout = useRef();
    const isVisibleAbout = useIsVisible(refAbout);
    const { register, handleSubmit } = useForm();
    const submitNewMessage = (data) => {
        emailJS(data).then(function (response) {
            toast.success("Email was sent successfully");
        }, function (error) {
            console.log(error)
            toast.error("Something went wrong, try again");
        });
    }
    return (
        <section ref={refAbout} className={`flex flex-col w-1/2 min-h-screen h-auto justify-center items-start text-white opacity-0 ${isVisibleAbout ? 'animate-fade-bottom-y-4' : ''}`} style={{animationDelay: ".2"}} id='contact'>
            <div className='flex flex-row w-full h-auto justify-end items-center px-10 mb-32'>
                <h1 className='font-bold text-4xl w-1/3 flex justify-center items-center'><span className='text-[#2E28A0] mr-5'>04.</span> Say Hello</h1>
                <div className='h-1 w-2/3 bg-[#2E28A0] ml-5'></div>
            </div>
            <form onSubmit={handleSubmit(submitNewMessage)} className="flex flex-row flex-wrap justify-center items-start w-full h-auto px-10">
                <h1 className="flex flex-row justify-center items-center w-full h-auto text-4xl font-bold text-[#2E28A0] mb-16">
                    Get In Touch...
                </h1>
                <section className="flex flex-row w-full h-auto justify-center items-start flex-wrap">
                    <div className="flex flex-col justify-center items-start h-auto w-1/2 mb-5">
                        <label htmlFor="username" className="flex felx-row justify-start items-center text-xl font-semibold h-auto text-[#2E28A0] mb-1" style={{ width: "95%" }}>Name</label>
                        <input type="text" id="username" {...register("user_name")} required={true} placeholder="Your name" style={{ width: "95%" }} className="flex flex-row text-lg font-semibold h-auto py-2 px-3 text-black rounded-xl mb-5" />
                        <label htmlFor="useremail" className="flex felx-row justify-start items-center text-xl font-semibold h-auto text-[#2E28A0] mb-1" style={{ width: "95%" }}>Email</label>
                        <input type="email" id="useremail" {...register("user_email")} required={true} placeholder="Yourmail@company.com" style={{ width: "95%" }} className="flex flex-row text-lg font-semibold h-auto py-2 px-3 text-black rounded-xl" />
                    </div>
                    <section className="flex flex-row justify-end items-center w-1/2 mt-2">
                        <p className="h-auto text-white text-xl font-semibold" style={{ width: "95%" }}>
                            I am currently looking for new opportunities, and my inbox is always open to interesting conversations. If you have any proposals, questions, or simply want to say hello, I would be delighted to hear from you and will happily get back to you as soon as possible!                    </p>
                    </section>
                    <div className="flex flex-col justify-center items-start h-auto w-full mb-5">
                        <label htmlFor="subject" className="flex felx-row justify-start items-center text-xl font-semibold h-auto text-[#2E28A0] mb-1" style={{ width: "100%" }}>Subject</label>
                        <input type="text" id="subject" {...register("subject")} required={true} placeholder="Subject" style={{ width: "100%" }} className="flex flex-row text-lg font-semibold h-auto py-2 px-3 text-black rounded-xl resize-none" />
                    </div>
                    <div className="flex flex-col justify-center items-start h-auto w-full">
                        <label htmlFor="message" className="flex felx-row justify-start items-center text-xl font-semibold h-auto text-[#2E28A0] mb-1" style={{ width: "100%" }}>Message</label>
                        <textarea id="message" {...register("message")} required={true} rows={4} placeholder="How can i help you?" style={{ width: "100%" }} className="flex flex-row text-lg font-semibold h-auto py-2 px-3 text-black rounded-xl resize-none" />
                    </div>

                </section>
                <div className="w-full h-auto flex flex-row justify-center items-center mt-16">
                    <input type="submit" className="left-16 bg-[#161616] relative z-30 cursor-pointer flex justify-center items-center w-32 h-12 rounded-lg border-2 border-[#2E28A0] font-bold text-xl text-white transform transition duration-300 hover:-translate-x-1 hover:-translate-y-1" value="Submit" />
                    <div className="w-32 h-12 bg-[#2E28A0] z-0 relative rounded-lg right-16"></div>
                </div>
            </form>
        </section>
    )
}