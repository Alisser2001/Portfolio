'use client';

export default function BackImage({idx, obj}) {
    return (
        <div className={`w-full md:w-[90%] flex flex-row ${idx % 2 === 0 ? 'justify-start' : 'justify-end'} rounded-sm z-10 mr-0 ml-0`}>
            <img src={obj.img} alt="project" className="rounded-md 2xl:scale-110 h-[230px] md:h-[330px] w-[90%] md:w-[550px]"/>
        </div>
    )
}