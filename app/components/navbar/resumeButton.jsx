import OffsetButton from "../offsetButton";
import { DownloadIcon } from "../icons";

export default function ResumeButton() {
    return (
        <div className="w-1/2 lg:w-1/4 h-full flex flex-row justify-end items-center animate-fade-up-5 pr-5">
            <OffsetButton href="/CV.pdf" target="_blank" className="w-32 text-lg">
                <DownloadIcon className="mr-2" />
                Resume
            </OffsetButton>
        </div>
    )
}
