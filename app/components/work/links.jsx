'use client';

export default function Links({idx, obj}) {
    return (
        <section className={`flex flex-row ${idx % 2 === 0 ? 'justify-end' : 'justify-start'} items-center w-full h-auto`}>
            {obj.repo && <a className={`flex flex-row justify-center items-center w-auto h-auto mt-3 ${obj.link ? "mr-5" : ""}`} href={obj.repo} target="_blank">
                <img src="/code.png" alt="github code"
                    className="h-10 w-10 cursor-pointer transform transition duration-300 hover:-translate-y-1" />
            </a>}
            {obj.link && <a className="flex flex-row justify-center items-center w-auto h-auto mt-3" href={obj.link} target="_blank">
                <img src="/redirect.png" alt="view page"
                    className="h-10 w-10 cursor-pointer transform transition duration-300 hover:-translate-y-1" />
            </a>}
        </section>
    )
}