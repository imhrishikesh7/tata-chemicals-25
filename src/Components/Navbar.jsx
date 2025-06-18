import React, { useState, useRef, useEffect } from "react";
import { ChevronDown, Menu, X, ExternalLink } from "lucide-react";
import { FaLinkedin, FaXTwitter, FaYoutube, FaEnvelope } from 'react-icons/fa6'
import { Link } from "react-router-dom";
const navItems = [
    {
        label: "Corporate Overview",
        submenu: [
            "Board of Directors",
            "About Tata Chemicals",
            "Performance Review",
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

export default function Navbar() {
    const [mobileOpen, setMobileOpen] = useState(false);
    const [activeSubmenu, setActiveSubmenu] = useState(null);
    const [openAccordions, setOpenAccordions] = useState([]);
    const [scrollY, setScrollY] = useState(0);
    const [showTopBar, setShowTopBar] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);
    const dropdownRef = useRef();

    const getPathFromItem = (item) =>
        "/" +
        item
            .toLowerCase()
            .replace(/[\s&:]+/g, "_")
            .replace(/[^\w_]/g, "");

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY;

            // Show/hide top bar based on scroll direction
            if (currentScrollY > lastScrollY && currentScrollY > 100) {
                // Scrolling down and past threshold
                setShowTopBar(false);
            } else if (currentScrollY < lastScrollY) {
                // Scrolling up
                setShowTopBar(true);
            }

            setScrollY(currentScrollY);
            setLastScrollY(currentScrollY);
        };

        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setActiveSubmenu(null);
            }
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        document.addEventListener('mousedown', handleClickOutside);

        return () => {
            window.removeEventListener('scroll', handleScroll);
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [lastScrollY]);

    const toggleAccordion = (index) => {
        setOpenAccordions(prev =>
            prev.includes(index)
                ? prev.filter(i => i !== index)
                : [...prev, index]
        );
    };

    const handleSubmenuToggle = (index) => {
        setActiveSubmenu(activeSubmenu === index ? null : index);
    };

    return (
        <>
            {/* Top Bar - Logo Section */}
            <div className={`fixed top-0 w-full z-50 transition-all duration-500 ease-in-out ${showTopBar
                    ? 'translate-y-0 opacity-100'
                    : '-translate-y-full opacity-0'
                }`}>
                <div className="bg-white/80 backdrop-blur-xl border-b border-white/20 shadow-g">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="flex items-center justify-between h-16">
                            {/* Logo */}
                            <div className="flex-shrink-0">
                                <Link to="/" className="flex items-center">
                                    <img
                                        src="/tata-chemicals-blue.svg"
                                        alt="Tata Chemicals"
                                        className="h-4 w-auto"
                                    />
                                </Link>
                            </div>

                            {/* Right Section - Desktop */}
                            <div className="hidden lg:flex items-center space-x-6">
                                {/* Annual Report */}
                                <a
                                    href="#"
                                    className="inline-flex items-center px-4 py-2 text-sm font-medium text-white bg-[#1467b3] hover:bg-[#1467b3]/80 rounded-lg backdrop-blur-sm transition-all duration-200 shadow-lg hover:shadow-xl"
                                >
                                    Annual Report 2024-25
                                    <ExternalLink className="ml-2 h-4 w-4" />
                                </a>

                                {/* Social Icons */}
                                <div className="flex justify-center space-x-6">
                                    <a
                                        href="https://www.linkedin.com/company/tata-chemicals/"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-gray-500 hover:text-blue-700 transition-all duration-200 hover:scale-110"
                                    >
                                        <FaLinkedin className="h-6 w-6" />
                                    </a>

                                    <a
                                        href="https://x.com/TataChemicals/"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-gray-500 hover:text-black transition-all duration-200 hover:scale-110"
                                    >
                                        <FaXTwitter className="h-6 w-6" />
                                    </a>

                                    <a
                                        href="https://www.youtube.com/user/TataChemicalsLtd"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-gray-500 hover:text-red-600 transition-all duration-200 hover:scale-110"
                                    >
                                        <FaYoutube className="h-6 w-6" />
                                    </a>

                                    <a
                                        href="mailto:contact@tatachemicals.com"
                                        className="text-gray-500 hover:text-[#1467b3] transition-all duration-200 hover:scale-110"
                                    >
                                        <FaEnvelope className="h-6 w-6" />
                                    </a>
                                </div>
                            </div>

                            {/* Mobile menu button */}
                            <div className="lg:hidden">
                                <button
                                    onClick={() => setMobileOpen(!mobileOpen)}
                                    className="inline-flex items-center justify-center p-2 rounded-lg text-gray-600 hover:text-gray-900 hover:bg-white/20 backdrop-blur-sm transition-all duration-200"
                                >
                                    {mobileOpen ? (
                                        <X className="h-6 w-6" />
                                    ) : (
                                        <Menu className="h-6 w-6" />
                                    )}
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Main Navigation - Always Sticky */}
            <nav className={`sticky top-0 w-full z-40 transition-all duration-500 ease-in-out ${showTopBar ? 'top-16' : 'top-0'
                }`}>
                <div className="bg-white/70 backdrop-blur-xl border-b border-white/20 shadow-lg">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        {/* Mobile Logo (shown when top bar is hidden) */}
                        <div className={`lg:hidden flex items-center justify-between py-3 transition-all duration-300 ${!showTopBar ? 'opacity-100 max-h-16' : 'opacity-0 max-h-0 overflow-hidden'
                            }`}>
                            <Link to="/" className="flex items-center">
                                <img
                                    src="/tata-chemicals-blue.svg"
                                    alt="Tata Chemicals"
                                    className="h-4 w-auto"
                                />
                            </Link>
                            <button
                                onClick={() => setMobileOpen(!mobileOpen)}
                                className="inline-flex items-center justify-center p-2 rounded-lg text-gray-600 hover:text-gray-900 hover:bg-white/20 backdrop-blur-sm transition-all duration-200"
                            >
                                {mobileOpen ? (
                                    <X className="h-5 w-5" />
                                ) : (
                                    <Menu className="h-5 w-5" />
                                )}
                            </button>
                        </div>

                        {/* Desktop Navigation */}
                        <div className="hidden lg:flex justify-center">
                            <div className="flex space-x-8" ref={dropdownRef}>
                                {navItems.map((item, index) => (
                                    <div key={index} className="relative">
                                        <button
                                            onClick={() => handleSubmenuToggle(index)}
                                            className={`flex items-center px-3 py-4 text-sm font-medium transition-all duration-200 ${activeSubmenu === index
                                                    ? 'text-blue-600 border-b-2 border-blue-600'
                                                    : 'text-gray-700 hover:text-[#1467b3]'
                                                }`}
                                        >
                                            {item.label}
                                            <ChevronDown className={`ml-1 h-4 w-4 transition-transform duration-200 ${activeSubmenu === index ? 'rotate-180' : ''
                                                }`} />
                                        </button>

                                        {/* Dropdown Menu */}
                                        {activeSubmenu === index && (
                                            <div className="absolute top-full left-0 mt-0 w-72 bg-white/90 backdrop-blur-xl rounded-lg shadow-xl border border-white/30 py-2 z-50">
                                                {item.submenu.map((subItem, subIndex) => (
                                                    <Link
                                                        key={subIndex}
                                                        to={getPathFromItem(subItem)}
                                                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-white/50 hover:text-[#1467b3] transition-all duration-200 rounded-md mx-2"
                                                    >
                                                        {subItem}
                                                    </Link>
                                                ))}
                                            </div>
                                        )}
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </nav>

            {/* Mobile Navigation */}
            <div className={`lg:hidden fixed w-full z-30 transition-all duration-300 ${showTopBar ? 'top-16' : 'top-12'
                } ${mobileOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0 overflow-hidden'
                }`}>
                <div className="bg-white/90 backdrop-blur-xl border-b border-white/20 shadow-lg">
                    <div className="px-4 py-4 mt-2 space-y-1">
                        {/* Mobile Annual Report */}
                        <a
                            href="#"
                            className="flex items-center justify-center w-full px-4 py-3 text-sm font-medium text-white bg-blue-600/90 hover:bg-blue-700/90 rounded-lg backdrop-blur-sm transition-all duration-200 mb-4 shadow-lg"
                        >
                            Annual Report 2024-25
                            <ExternalLink className="ml-2 h-4 w-4" />
                        </a>

                        {/* Mobile Navigation Items */}
                        {navItems.map((item, index) => (
                            <div key={index} className="border-b border-white/20 last:border-b-0">
                                <button
                                    onClick={() => toggleAccordion(index)}
                                    className="w-full flex items-center justify-between px-4 py-3 text-left text-gray-700 hover:bg-white/30 rounded-lg transition-all duration-200"
                                >
                                    <span className="text-sm font-medium">{item.label}</span>
                                    <ChevronDown className={`h-4 w-4 transition-transform duration-200 ${openAccordions.includes(index) ? 'rotate-180' : ''
                                        }`} />
                                </button>

                                {openAccordions.includes(index) && (
                                    <div className="bg-white/30 backdrop-blur-sm rounded-lg mt-1 mb-2">
                                        {item.submenu.map((subItem, subIndex) => (
                                            <Link
                                                key={subIndex}
                                                to={getPathFromItem(subItem)}
                                                className="block px-6 py-2 text-sm text-gray-600 hover:text-[#1467b3] hover:bg-white/40 transition-all duration-200 rounded-md mx-2"
                                                onClick={() => setMobileOpen(false)}
                                            >
                                                {subItem}
                                            </Link>
                                        ))}
                                    </div>
                                )}
                            </div>
                        ))}

                        {/* Mobile Social Links */}
                        <div className="pt-4 mt-4 border-t border-white/20">
                            <div className="flex justify-center space-x-6">
                                <a href="https://www.linkedin.com/company/tata-chemicals/"
                                    className="text-gray-500 hover:text-[#1467b3] transition-all duration-200 hover:scale-110">
                                    <FaLinkedin className="h-6 w-6" />
                                </a>
                                <a href="https://x.com/TataChemicals/"
                                    className="text-gray-500 hover:text-gray-900 transition-all duration-200 hover:scale-110">
                                    <FaXTwitter className="h-6 w-6" />
                                </a>
                                <a href="https://www.youtube.com/user/TataChemicalsLtd"
                                    className="text-gray-500 hover:text-red-600 transition-all duration-200 hover:scale-110">
                                    <FaYoutube className="h-6 w-6" />
                                </a>
                                <a href="mailto:contact@tatachemicals.com"
                                    className="text-gray-500 hover:text-[#1467b3] transition-all duration-200 hover:scale-110">
                                    <FaEnvelope className="h-6 w-6" />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Mobile Menu Overlay */}
            {mobileOpen && (
                <div
                    className="lg:hidden fixed inset-0 bg-black/20 backdrop-blur-sm z-20"
                    onClick={() => setMobileOpen(false)}
                />
            )}


        </>
    );
}