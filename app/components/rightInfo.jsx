"use client";

export default function RightInfo(){
    return (
        <section className="flex flex-col justify-end items-end pr-16 w-1/4 z-50 fixed left-3/4 mt-24 animate-fade-1 opacity-0" style={{height: "90%", animationDelay: "1s"}}>
            <p className="text-[#2E28A0] text-xl font-semibold p-1 mb-24 cursor-pointer transform transition duration-300 hover:-translate-y-1" style={{ writingMode: 'vertical-rl' }}>Estiven25b777@gmail.com</p>
            <div className="w-10 h-40 flex justify-center items-center">
                <section className="w-1 bg-[#2E28A0] h-80"></section>
            </div>
        </section>
    )
}