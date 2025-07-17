'use client';
import { useForm } from "react-hook-form";
import emailJS from "../../../utils/email";
import { toast } from 'sonner';

export default function Form() {
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
        <form onSubmit={handleSubmit(submitNewMessage)} className="space-y-6 flex flex-col justify-center items-center w-full">
            <h1 className="text-2xl sm:text-4xl font-bold text-blue-400 mb-8">
                Get In Touch...
            </h1>
            <section className="flex flex-row w-full h-auto justify-center items-start flex-wrap mb-8">
                <div className="flex flex-col justify-center items-start h-44 w-full md:w-1/2 mb-2">
                    <label htmlFor="username" className="flex felx-row justify-start items-center text-xl font-semibold h-auto text-blue-400 mb-1 w-full md:w-[95%]">Name</label>
                    <input type="text" id="username" {...register("user_name")} required={true} placeholder="Your name" className="text-gray-900 py-2 px-3 rounded-xl mb-5 w-full md:w-[95%]" />
                    <label htmlFor="useremail" className="flex felx-row justify-start items-center text-xl font-semibold h-auto text-blue-400 mb-1 w-full md:w-[95%]">Email</label>
                    <input type="email" id="useremail" {...register("user_email")} required={true} placeholder="Yourmail@company.com" className="text-gray-900 py-2 px-3 rounded-xl mb-5 w-full md:w-[95%]" />
                </div>
                <section className="hidden md:flex flex-row justify-center items-center w-1/2 mt-2 h-44">
                    <p className="text-gray-400 text-lg max-w-2xl mx-auto leading-relaxed" style={{ width: "95%" }}>
                        I am currently looking for new opportunities, and my inbox is always open to interesting conversations. If you have any proposals, questions, or simply want to say hello, I would be delighted to hear from you and will happily get back to you as soon as possible!                    </p>
                </section>
                <div className="flex flex-col justify-center items-start h-auto w-full mb-2">
                    <label htmlFor="subject" className="flex felx-row justify-start items-center text-xl font-semibold h-auto text-blue-400 mb-1" style={{ width: "100%" }}>Subject</label>
                    <input type="text" id="subject" {...register("subject")} required={true} placeholder="Subject" style={{ width: "100%" }} className="text-gray-900 py-2 px-3 rounded-xl mb-5" />
                </div>
                <div className="flex flex-col justify-center items-start h-auto w-full">
                    <label htmlFor="message" className="flex felx-row justify-start items-center text-xl font-semibold h-auto text-blue-400 mb-1" style={{ width: "100%" }}>Message</label>
                    <textarea id="message" {...register("message")} required={true} rows={4} placeholder="How can i help you?" style={{ width: "100%" }} className="text-gray-900 py-2 px-3 rounded-xl resize-none" />
                </div>
            </section>
            <div className="w-full h-auto flex flex-row justify-end items-center">
                <input type="submit" className="bg-[#161616] absolute z-30 cursor-pointer flex justify-center items-center w-44 h-12 rounded-lg border-2 border-blue-400 font-bold text-xl text-white hover:text-blue-400 transform transition duration-300 hover:-translate-x-1 hover:-translate-y-1" value="Submit" />
                <div className="w-44 h-12 bg-blue-400 z-0 rounded-lg"></div>
            </div>
        </form>
    )
}