'use client';

export default function BackImage({idx, obj}) {
    return (
        <div className={`rounded-sm z-10`}>
            <img src={obj.img} alt="project" className="rounded-md 2xl:scale-110 h-[230px] md:h-[330px] w-[90%] md:w-[550px]"/>
        </div>
    )
}