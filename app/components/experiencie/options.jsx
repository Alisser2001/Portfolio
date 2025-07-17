'use client';

export default function Options({experience, handleActualJob, actualJob}) {
    return (
        <ul className="flex flex-row md:flex-col justify-center items-center h-auto md:border-l-2 md:border-l-blue-400 w-full md:w-[30%] mb-10 md:mb-0 overflow-x-scroll md:overflow-x-hidden">
            {experience.map((obj) => {
                return (
                    <li key={obj} value={obj.company} onClick={(e) => handleActualJob(e)} className={`rounded-lg md:rounded-none flex flex-row w-auto md:w-full h-auto py-3 px-5 font-bold text-lg cursor-pointer hover:bg-blue-400 hover:bg-opacity-30 ${actualJob === obj.company ? "bg-blue-400 bg-opacity-30 md:border-l-4 border-b-blue-400 md:border-l-blue-400 text-blue-400" : ""}`}>{obj.company}</li>
                )
            })}
        </ul>
    )
}