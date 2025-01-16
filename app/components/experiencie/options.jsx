'use client';

export default function Options({experience, handleActualJob, actualJob}) {
    return (
        <ul className="flex flex-col justify-center items-center h-auto border-l-2 border-l-[#2E28A0] w-full md:w-[30%] mb-10 md:mb-0">
            {experience.map((obj, idx) => {
                return (
                    <li key={idx + Math.random()*(1000000-1)+1} value={obj.company} onClick={(e) => handleActualJob(e)} className={`flex flex-row w-full h-auto py-3 px-5 font-bold text-lg cursor-pointer hover:bg-[#2E28A0] hover:bg-opacity-30 ${actualJob === obj.company ? "border-l-4 border-l-[#2E28A0] text-[#2E28A0]" : ""}`}>{obj.company}</li>
                )
            })}
        </ul>
    )
}