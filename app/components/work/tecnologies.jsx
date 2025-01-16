'use client';

export default function Tecnologies({ obj }) {
    return (
        <ul className={`flex flex-row items-center w-full justify- flex-wrap h-auto mt-3`}>
            {obj.techs.map((tec, idx2) => {
                return (
                    <li className='mr-5 flex flex-row w-auto h-8 justify-center items-center text-sm font-bold' key={idx2 + 1000}>
                        <span className='mr-2 border-l-[8px] border-l-[#2E28A0] border-y-[4px] border-y-transparent border-solid'></span>{tec}
                    </li>
                )
            })}
        </ul>
    )
}