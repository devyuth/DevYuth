import { HiArrowRight } from 'react-icons/hi2';


const phoneNumber = "917003996182";
export function ServiceHeroLetsdicuss() {

    const defaultMessage = encodeURIComponent(
        "Hello! I would like to discuss creating a custom website for my project."
    );

    return (
        <a
            href={`https://wa.me/${phoneNumber}?text=${defaultMessage}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block"
        >
            <button className="mt-12 bg-green-600 
                hover:bg-red-700 transition px-10 
                py-4 text-white font-medium 
                uppercase tracking-wide"
            >
                Let&apos;s Discuss Your Project
            </button>
        </a>
    );
}


export function ContactNowButtonOurImpact() {
    const message = encodeURIComponent(
        "Hello! I would like to discuss a custom website project with you."
    );

    return (
        <div className="mt-8">
            <a
                href={`https://wa.me/${phoneNumber}?text=${message}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 
                bg-[#1a8061] text-white pl-6 pr-2 py-2 
                rounded-full font-medium text-sm sm:text-base 
                hover:bg-[#0b2b22] transition-colors shadow-md group"
            >
                <span>Let&apos;s Build Your Solution</span>
                <span 
                    className="w-9 h-9 rounded-full bg-white 
                    text-[#0F382C] flex items-center justify-center 
                    group-hover:translate-x-1 transition-transform">
                    <HiArrowRight className="text-base" />
                </span>
            </a>
        </div>
    );
}