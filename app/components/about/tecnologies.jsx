'use client';
import tecnologies from "../../../public/tecnologies.json";

export default function Tecnologies() {
    return (
        <ul className='flex flex-row flex-wrap w-full h-auto mt-8 justify-between items-center'>
            {tecnologies.map((objtec, idx) => {
                return (
                    <li key={idx} className='flex flex-row w-32 md:w-40 h-8 justify-start items-center text-sm md:text-base font-bold'><span className='mr-3 border-l-[8px] border-l-[#2E28A0] border-y-[4px] border-y-transparent border-solid'></span>{objtec}</li>
                )
            })}
        </ul>
    )
}