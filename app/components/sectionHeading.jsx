export default function SectionHeading({ number, title, align = "left" }) {
    return (
        <div className={`flex items-center gap-8 mb-12 w-full ${align === "right" ? "flex-row-reverse" : ""}`}>
            <h2 className="text-3xl font-bold text-gray-100">
                <span className="text-blue-400 font-mono mr-4">{number}</span>
                {title}
            </h2>
            <div className="flex-1 h-px bg-blue-400"></div>
        </div>
    )
}
