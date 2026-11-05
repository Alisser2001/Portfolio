import { NAV_ITEMS } from "./navItems";

export default function Options({ activeSection }) {
    return (
        <ul className="hidden lg:flex flex-row text-white w-1/2 h-full justify-center items-center font-semibold text-lg">
            {NAV_ITEMS.map(({ id, number, label, animation }) => (
                <a
                    key={id}
                    href={`#${id}`}
                    className={`transform transition duration-200 hover:text-blue-400 cursor-pointer mr-5 ${animation} ${activeSection === id ? "text-blue-400" : "text-gray-300"}`}
                >
                    <span className="text-blue-400 font-semibold">{number}</span>{label}
                </a>
            ))}
        </ul>
    )
}
