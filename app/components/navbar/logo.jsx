import OffsetButton from "../offsetButton";

export default function Logo() {
    return (
        <div className="flex flex-row w-1/2 lg:w-1/4 h-full justify-start items-center pl-5 animate-fade-1 opacity-0" style={{ animationDelay: ".5s" }}>
            <OffsetButton href="/" radius="rounded-none" className="w-10 text-2xl">
                A
            </OffsetButton>
        </div>
    )
}
