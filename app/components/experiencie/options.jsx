'use client';

export default function Options({experience, handleActualJob, actualJob}) {
    return (
        <div className="w-full md:w-[30%] mb-10 md:mb-0">
            <ul className="flex flex-row md:flex-col justify-start md:justify-center items-center h-auto md:border-l-2 md:border-l-blue-400 w-full overflow-x-auto md:overflow-x-hidden">
                {experience.map((obj) => {
                    return (
                        <li 
                            key={obj.company} 
                            value={obj.company} 
                            onClick={(e) => handleActualJob(e)} 
                            className={`
                                rounded-lg md:rounded-none 
                                flex flex-row 
                                w-auto md:w-full 
                                min-w-max md:min-w-0
                                h-auto 
                                py-3 px-5 
                                font-bold text-lg 
                                cursor-pointer 
                                hover:bg-blue-400 hover:bg-opacity-30 
                                whitespace-nowrap md:whitespace-normal
                                ${actualJob === obj.company ? 
                                    "bg-blue-400 bg-opacity-30 md:border-l-4 border-b-0 border-blue-400 md:border-l-blue-400 text-blue-400" : 
                                    ""
                                }
                            `}
                        >
                            {obj.company}
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}