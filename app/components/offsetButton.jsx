export default function OffsetButton({ as: Component = "a", radius = "rounded-lg", className, ...props }) {
    return (
        <span className="relative inline-flex">
            <span className={`absolute inset-0 bg-blue-400 ${radius}`}></span>
            <Component
                className={`relative flex justify-center items-center h-12 border-2 border-blue-400 bg-background font-bold text-white hover:text-blue-400 cursor-pointer transition duration-300 hover:-translate-x-1 hover:-translate-y-1 ${radius} ${className}`}
                {...props}
            />
        </span>
    )
}
