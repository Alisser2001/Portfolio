export default function Description({ job }) {
    return (
        <div className="flex flex-col justify-center items-start w-full h-auto animate-fade-1 opacity-0">
            <h1 className="w-full flex flex-row justify-start items-center text-4xl font-bold h-auto mb-3">{job.role}</h1>
            <h1 className="w-full flex flex-row justify-start items-center text-2xl font-bold h-auto mb-3"><span className="text-blue-400">@</span> {job.company}</h1>
            <h2 className="w-full flex flex-row justify-start items-center text-xl font-bold h-auto text-blue-400 mb-8">{job.start_date} - {job.end_date}</h2>
            <ul className="flex flex-col w-full h-auto text-lg font-semibold">
                {job.responsibilities.map((responsibility) => (
                    <p key={responsibility} className="flex flex-row w-full h-auto justify-start items-start text-xl font-bold mb-8">
                        <span className="mr-3 mt-3 border-l-[8px] border-l-blue-400 border-y-[4px] border-y-transparent border-solid"></span>{responsibility}
                    </p>
                ))}
            </ul>
        </div>
    )
}
