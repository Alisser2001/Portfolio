"use client";

export default function RightInfo(){
    return (
        <section className="flex flex-col justify-end items-end pr-16 w-1/4 h-5/6 mt-16 fixed left-3/4">
            <p className="text-[#2E28A0] text-xl font-semibold p-1 mb-5 cursor-pointer transform transition duration-300 hover:-translate-y-1" style={{ writingMode: 'vertical-rl' }}>Estiven25b777@gmail.com</p>
            <div className="w-10 h-40 flex justify-center items-center">
                <section className="w-1 bg-[#2E28A0] h-40"></section>
            </div>
        </section>
    )
}