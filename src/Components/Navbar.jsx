import React, { useState, useRef, useEffect } from "react";
import {
    FiMenu,
    FiX,
    FiChevronDown,
    FiChevronRight,
    FiExternalLink,
} from "react-icons/fi";

const navItems = [
    {
        label: "Corporate Overview",
        submenu: [
            "Board of Directors",
            "About Tata Chemicals",
            "CEO's Message",
            "Safety at the Core",
        ],
    },
    {
        label: "Our Businesses",
        submenu: [
            "Basic Chemistry Business",
            "Speciality Product Business",
        ],
    },
    {
        label: "Value Creation Approach",
        submenu: [
            "A 360-degree View of Operating Landscape",
            "Business Strategy",
            "A Resilient Business Model",
            "Risk Management",
            "Stakeholder Engagement",
            "Materiality Assessment",
        ],
    },
    {
        label: "Functions",
        submenu: [
            "Research and Development",
            "Technology",
        ],
    },
    {
        label: "ESG",
        submenu: [
            "Environment",
            "Human Resources",
            "Value Chain Partners",
            "Community",
            "Governance",
            "Engaging with Our Shareholders",
            "Information and Grievance",
            "Redressal",
        ],
    },
    {
        label: "Statutory Reports",
        submenu: [
            "Business Responsibility and Sustainability Report",
            "Board's Report",
            "Management Discussion and Analysis",
            "Corporate Governance Report",
        ],
    },
    {
        label: "Financial Statements",
        submenu: [
            "Standalone Financial Statements",
            "Consolidated Financial Statements",
            "Form AOC-1",
        ],
    },
];

export default function ModernNavbar() {
    const [mobileOpen, setMobileOpen] = useState(false);
    const [activeDesktop, setActiveDesktop] = useState(null);
    const [openAccordions, setOpenAccordions] = useState([]);
    const [isScrolled, setIsScrolled] = useState(false);
    const submenuRef = useRef();
    const mobileMenuRef = useRef();

    const getPathFromItem = (item) =>
        "/" +
        item
            .toLowerCase()
            .replace(/[\s&:]+/g, "_")
            .replace(/[^\w_]/g, "");

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const toggleAccordion = (index) => {
        setOpenAccordions(prev =>
            prev.includes(index)
                ? prev.filter(i => i !== index)
                : [...prev, index]
        );
    };

    const handleNavItemClick = (index) => {
        setActiveDesktop(activeDesktop === index ? null : index);
    };

    return (
        <div className={`sticky top-0 w-full z-50 transition-all duration-500 ${isScrolled
            ? 'bg-slate-900/95 backdrop-blur-lg shadow-2xl'
            : 'bg-gradient-to-r from-slate-900 via-blue-900 to-slate-900'
            }`}>
            {/* Main Header */}
            <div className="relative">
                {/* Top Bar */}
                <div className="flex justify-between items-center px-6 lg:px-8 py-4">
                    {/* Logo */}
                    <div className="flex items-center space-x-4">
                        <a href="/" >
                            <div className="relative group">
                                <div className="absolute -inset-2 bg-gradient-to-r from-blue-500 to-orange-500 rounded-lg opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
                                <img
                                    src="tata-chemicals-white.svg"
                                    className="w-48 h-auto relative z-10 transition-transform duration-300 group-hover:scale-105"
                                    alt="Tata Chemicals"
                                />
                            </div>
                        </a>
                    </div>


                    {/* Social Links - Desktop */}
                    <div className="hidden lg:flex items-center space-x-4">
                        {/* Annual Report Button */}
                        <a
                            href="#"
                            className="relative overflow-hidden bg-gradient-to-r from-orange-500 to-red-500 text-white px-6 py-3 rounded-full font-semibold text-sm transition-all duration-300 hover:shadow-lg hover:shadow-orange-500/30 hover:scale-105 group"
                        >
                            <span className="relative z-10 flex items-center space-x-2">
                                <span>Annual Report 2024-25</span>
                                <FiExternalLink className="w-4 h-4" />
                            </span>
                            <div className="absolute inset-0 bg-gradient-to-r from-red-500 to-orange-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                        </a>

                        {/* Social Icons */}
                        <div className="">
                            <div className="flex justify-center space-x-6">
                                {[
                                    { icon: "/linkedin_icon.svg", alt: "LinkedIn", link: "https://www.linkedin.com/company/tata-chemicals/"  },
                                    { icon: "twitter_icon.svg", alt: "Twitter", link: "https://x.com/TataChemicals/" },
                                    { icon: "youtube_icon.svg", alt: "YouTube", link: "https://www.youtube.com/user/TataChemicalsLtd" },
                                    { icon: "mail_icon.svg", alt: "Mail", link: "https://www.tatachemicals.com/contact-us" },
                                ].map((social, idx) => (
                                    <a
                                        key={idx}
                                        href={social.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="w-12 h-12 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110"
                                    >
                                        <img
                                            src={`${social.icon}`}
                                            alt={social.alt}
                                            className="w-6 h-6"
                                        />
                                    </a>
                                ))}
                            </div>
                        </div>

                    </div>

                    {/* Mobile Menu Toggle */}
                    <button
                        onClick={() => setMobileOpen(!mobileOpen)}
                        className="lg:hidden relative w-10 h-10 flex items-center justify-center rounded-lg bg-white/10 hover:bg-white/20 text-white transition-all duration-300"
                    >
                        <div className="relative">
                            <FiMenu
                                className={`w-6 h-6 transition-all duration-300 ${mobileOpen ? 'opacity-0 rotate-90' : 'opacity-100 rotate-0'
                                    }`}
                            />
                            <FiX
                                className={`w-6 h-6 absolute inset-0 transition-all duration-300 ${mobileOpen ? 'opacity-100 rotate-0' : 'opacity-0 -rotate-90'
                                    }`}
                            />
                        </div>
                    </button>
                </div>

                {/* Desktop Navigation */}
                <nav className="hidden lg:block border-t border-white/20">
                    <div className="px-8 py-2">
                        <div className="flex items-center justify-center space-x-8">
                            {navItems.map((item, i) => (
                                <div key={i} className="relative group">
                                    <button
                                        onClick={() => handleNavItemClick(i)}
                                        className={`flex items-center space-x-1 px-4 py-3 text-sm font-medium transition-all duration-300 rounded-lg ${activeDesktop === i
                                            ? 'text-orange-400 bg-white/10'
                                            : 'text-white/90 hover:text-white hover:bg-white/5'
                                            }`}
                                    >
                                        <span>{item.label}</span>
                                        <FiChevronDown
                                            className={`w-4 h-4 transition-transform duration-300 ${activeDesktop === i ? 'rotate-180' : 'rotate-0'
                                                }`}
                                        />
                                    </button>

                                    {/* Desktop Submenu */}
                                    <div
                                        className={`absolute top-full left-1/2 transform -translate-x-1/2 mt-2 w-72 bg-slate-800/95 backdrop-blur-lg rounded-xl shadow-2xl border border-white/10 transition-all duration-300 ${activeDesktop === i
                                            ? 'opacity-100 visible translate-y-0'
                                            : 'opacity-0 invisible -translate-y-4'
                                            }`}
                                    >
                                        <div className="p-4">
                                            {item.submenu.map((sub, idx) => (
                                                <a
                                                    key={idx}
                                                    href={getPathFromItem(sub)}
                                                    className="flex items-center justify-between px-4 py-3 text-sm text-white/80 hover:text-white hover:bg-white/10 rounded-lg transition-all duration-200 group/item"
                                                >
                                                    <span>{sub}</span>
                                                    <FiChevronRight className="w-4 h-4 opacity-0 group-hover/item:opacity-100 transition-opacity duration-200" />
                                                </a>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </nav>
            </div>

            {/* Mobile Menu */}
            <div
                ref={mobileMenuRef}
                className={`lg:hidden overflow-hidden transition-all duration-500 bg-slate-900/98 backdrop-blur-lg ${mobileOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
                    }`}
            >
                <div className="px-6 py-6 space-y-2">
                    {/* Mobile Annual Report */}
                    <div className="mb-6">
                        <a
                            href="#"
                            className="block w-full bg-gradient-to-r from-orange-500 to-red-500 text-white text-center px-6 py-4 rounded-xl font-semibold transition-all duration-300 hover:shadow-lg"
                        >
                            📄 Annual Report 2024-25
                        </a>
                    </div>

                    {/* Mobile Navigation Items */}
                    {navItems.map((item, i) => {
                        const isOpen = openAccordions.includes(i);
                        return (
                            <div key={i} className="border-b border-white/10 last:border-b-0">
                                <button
                                    onClick={() => toggleAccordion(i)}
                                    className="w-full flex justify-between items-center py-4 text-white/90 font-medium hover:text-white transition-colors duration-200"
                                >
                                    <span>{item.label}</span>
                                    <FiChevronDown
                                        className={`w-5 h-5 transition-transform duration-300 ${isOpen ? 'rotate-180' : 'rotate-0'
                                            }`}
                                    />
                                </button>

                                <div
                                    className={`overflow-hidden transition-all duration-400 ${isOpen ? 'max-h-96 opacity-100 mb-4' : 'max-h-0 opacity-0'
                                        }`}
                                >
                                    <div className="pl-4 space-y-1">
                                        {item.submenu.map((sub, j) => (
                                            <a
                                                key={j}
                                                href={getPathFromItem(sub)}
                                                onClick={() => setMobileOpen(false)}
                                                className="block py-3 px-4 text-sm text-white/70 hover:text-white hover:bg-white/5 rounded-lg transition-all duration-200"
                                            >
                                                {sub}
                                            </a>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        );
                    })}

                    {/* Mobile Social Links */}
                    <div className="pt-6 mt-6 border-t border-white/10">
                        <div className="flex justify-center space-x-6">
                            {[
                                { icon: "linkedin_icon.svg", alt: "LinkedIn", link: "https://www.linkedin.com" },
                                { icon: "twitter_icon.svg", alt: "Twitter", link: "https://www.twitter.com" },
                                { icon: "youtube_icon.svg", alt: "YouTube", link: "https://www.youtube.com" },
                                { icon: "mail_icon.svg", alt: "Mail", link: "mailto:your-email@example.com" },
                            ].map((social, idx) => (
                                <a
                                    key={idx}
                                    href={social.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-12 h-12 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110"
                                >
                                    <img
                                        src={`/assets/icons/${social.icon}`}
                                        alt={social.alt}
                                        className="w-6 h-6"
                                    />
                                </a>
                            ))}
                        </div>
                    </div>

                </div>
            </div>

            {/* Mobile Menu Overlay */}
            {mobileOpen && (
                <div
                    className="lg:hidden fixed inset-0 bg-black/50 backdrop-blur-sm -z-10"
                    onClick={() => setMobileOpen(false)}
                />
            )}
        </div>
    );
}