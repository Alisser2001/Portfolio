"use client";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import sendEmail from "../../../utils/email";
import OffsetButton from "../offsetButton";

const LABEL_CLASS = "flex justify-start items-center text-xl font-semibold text-blue-400 mb-1";
const FIELD_CLASS = "text-gray-900 py-2 px-3 rounded-xl";

export default function Form() {
    const { register, handleSubmit } = useForm();
    const submitNewMessage = async (data) => {
        try {
            await sendEmail(data);
            toast.success("Email was sent successfully");
        } catch (error) {
            console.error(error);
            toast.error("Something went wrong, try again");
        }
    }
    return (
        <form onSubmit={handleSubmit(submitNewMessage)} className="space-y-6 flex flex-col justify-center items-center w-full">
            <h1 className="text-2xl sm:text-4xl font-bold text-blue-400 mb-8">
                Get In Touch...
            </h1>
            <section className="flex flex-row w-full h-auto justify-center items-start flex-wrap mb-8">
                <div className="flex flex-col justify-center items-start h-44 w-full md:w-1/2 mb-2">
                    <label htmlFor="username" className={`${LABEL_CLASS} w-full md:w-[95%]`}>Name</label>
                    <input type="text" id="username" {...register("user_name")} required placeholder="Your name" className={`${FIELD_CLASS} mb-5 w-full md:w-[95%]`} />
                    <label htmlFor="useremail" className={`${LABEL_CLASS} w-full md:w-[95%]`}>Email</label>
                    <input type="email" id="useremail" {...register("user_email")} required placeholder="Yourmail@company.com" className={`${FIELD_CLASS} mb-5 w-full md:w-[95%]`} />
                </div>
                <section className="hidden md:flex flex-row justify-center items-center w-1/2 mt-2 h-44">
                    <p className="text-gray-400 text-lg w-[95%] max-w-2xl mx-auto leading-relaxed">
                        I am currently looking for new opportunities, and my inbox is always open to interesting conversations. If you have any proposals, questions, or simply want to say hello, I would be delighted to hear from you and will happily get back to you as soon as possible!
                    </p>
                </section>
                <div className="flex flex-col justify-center items-start h-auto w-full mb-2">
                    <label htmlFor="subject" className={`${LABEL_CLASS} w-full`}>Subject</label>
                    <input type="text" id="subject" {...register("subject")} required placeholder="Subject" className={`${FIELD_CLASS} mb-5 w-full`} />
                </div>
                <div className="flex flex-col justify-center items-start h-auto w-full">
                    <label htmlFor="message" className={`${LABEL_CLASS} w-full`}>Message</label>
                    <textarea id="message" {...register("message")} required rows={4} placeholder="How can i help you?" className={`${FIELD_CLASS} resize-none w-full`} />
                </div>
            </section>
            <div className="w-full h-auto flex flex-row justify-end items-center">
                <OffsetButton as="button" type="submit" className="w-44 text-xl">
                    Submit
                </OffsetButton>
            </div>
        </form>
    )
}
