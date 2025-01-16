'use client';

export default function Description({ idx, obj }) {
    return (
        <div key={idx + Math.random()*(1000000-1)+1} className="flex flex-col justify-center items-start w-full h-auto animate-fade-1 opacity-0">
            <h1 className="w-full flex flex-row justify-start items-center text-4xl font-bold h-auto mb-3">{obj.role}</h1>
            <h1 className="w-full flex flex-row justify-start items-center text-2xl font-bold h-auto mb-3"><span className="text-[#2E28A0]">@</span> {obj.company}</h1>
            <h2 className="w-full flex flex-row justify-start items-center text-xl font-bold h-auto text-[#2E28A0] mb-8">{obj.start_date} - {obj.end_date}</h2>
            <ul className="flex flex-col w-full 2xl:w-[90%] h-auto text-lg font-semibold">
                {obj.responsibilities.map((obj2, idx2) => {
                    return (
                        <p key={idx2 + Math.random()*(1000000-1)+1} className='flex flex-row w-full h-auto justify-start items-start text-xl font-bold mb-8'>
                            <span className='mr-3 mt-3 border-l-[8px] border-l-[#2E28A0] border-y-[4px] border-y-transparent border-solid'></span>{obj2}
                        </p>
                    )
                })}
            </ul>
        </div>
    )
}