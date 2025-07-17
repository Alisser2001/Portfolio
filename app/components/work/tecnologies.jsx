'use client';

export default function Tecnologies({ obj, idx }) {
    return (
        <ul className={`flex flex-row items-center w-full ${idx % 2 === 0 ? 'justify-end' : 'justify-start'} flex-wrap h-auto mt-3`}>
            {obj.techs.map((tec, idx2) => {
                return (
                    <li className={`${idx % 2 === 0 ? 'ml-5' : 'mr-5'} flex flex-row w-auto h-8 justify-center items-center text-sm font-bold`} key={idx2 + Math.random()*(1000000-1)+1}>
                        <span className='mr-2 border-l-[8px] border-l-blue-400 border-y-[4px] border-y-transparent border-solid'></span>{tec}
                    </li>
                )
            })}
        </ul>
    )
}