import OffsetButton from "../offsetButton";
import { ArrowRightIcon, GithubIcon, LinkedinIcon, MailIcon } from "../icons";

const SOCIAL_LINKS = [
    { href: "https://github.com/Alisser2001", Icon: GithubIcon },
    { href: "https://www.linkedin.com/in/alisser2001/", Icon: LinkedinIcon },
    { href: "#", Icon: MailIcon },
];

export default function Description() {
    return (
        <div className="w-full h-auto flex flex-row justify-start items-center gap-3 animate-fade-bottom-y-5 opacity-0 mt-8" style={{ animationDelay: ".8s" }}>
            <OffsetButton href="https://alidev-certificates.vercel.app/" target="_blank" className="w-56 text-xl">
                Certificates
                <ArrowRightIcon className="ml-2" />
            </OffsetButton>
            <div className="flex space-x-3">
                {SOCIAL_LINKS.map(({ href, Icon }) => (
                    <a key={href} href={href} className="text-gray-400 hover:text-blue-400 transition-colors">
                        <Icon size={32} />
                    </a>
                ))}
            </div>
        </div>
    )
}
