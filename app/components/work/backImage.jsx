'use client';

export default function BackImage({idx, obj}) {
    return (
        <div className={`w-full justify-center ${idx % 2 === 0 ? 'md:mr-72' : 'md:ml-72'} rounded-sm z-10`}
            style={{ width: "550px", height: "350px" }}>
            <img src={obj.img} alt="project"
                className="rounded-sm 2xl:scale-110 h-[250px] md:h-[350px]"
                style={{ width: "550px" }} />
        </div>
    )
}