import React, { useState, useRef, useEffect } from "react";
import {
    FiMenu,
    FiX,
    FiChevronDown,
    FiUser,
    FiSearch,
    FiShoppingCart,
} from "react-icons/fi";
import gsap from "gsap";
import { Link, useLocation } from "react-router-dom";

const navItems = [
    {
        label: "Corporate Overview",
        submenu: [
            "Board of Directors",
            "About Tata Chemicals",
            "Performance Review",
            "CEO’s Message",
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
            "Engaging with Our Shareholders:",
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
    const [activeDesktop, setActiveDesktop] = useState(null);
    const [openAccordions, setOpenAccordions] = useState([]);
    const submenuPanelRef = useRef();
    const mobileMenuRef = useRef();
    const submenuRefs = useRef([]);
    const location = useLocation();

    const getPathFromItem = (item) =>
        "/" +
        item
            .toLowerCase()
            .replace(/[\s&]+/g, "_")
            .replace(/[^\w_]/g, "");

    const isActive = (item) => location.pathname === getPathFromItem(item);

    submenuRefs.current = [];

    useEffect(() => {
        if (submenuPanelRef.current) {
            if (activeDesktop !== null) {
                gsap.to(submenuPanelRef.current, {
                    height: "auto",
                    opacity: 1,
                    duration: 0.35,
                    ease: "power2.out",
                    display: "block",
                });
            } else {
                gsap.to(submenuPanelRef.current, {
                    height: 0,
                    opacity: 0,
                    duration: 0.3,
                    ease: "power2.inOut",
                    onComplete: () =>
                        (submenuPanelRef.current.style.display = "none"),
                });
            }
        }
    }, [activeDesktop]);

    const toggleAccordion = (index) => {
        const isOpen = openAccordions.includes(index);
        const updated = isOpen
            ? openAccordions.filter((i) => i !== index)
            : [...openAccordions, index];
        setOpenAccordions(updated);

        const el = submenuRefs.current[index];
        if (!el) return;
        gsap.to(el, {
            height: isOpen ? 0 : "auto",
            opacity: isOpen ? 0 : 1,
            duration: 0.3,
            ease: "power2.out",
            onStart: () => (el.style.display = "block"),
            onComplete: () => {
                if (isOpen) el.style.display = "none";
            },
        });
    };

    return (
        <>
            <div className="bg-[#32568bf2] shadow-md sticky top-0 w-full z-50">
                <header className="w-full mx-auto">
                    {/* Top Row */}
                    <div className="flex justify-between items-center px-6 py-4">
                        <Link to={"/"} className="font-bold text-xl">
                            <img
                                src="/tata-chemicals-white.svg"
                                className="w-50"
                                alt=""
                            />
                        </Link>
                        <div className="hidden md:flex gap-6 text-xl text-gray-200">
                            <FiSearch className="hover:text-gray-400 cursor-pointer" />
                            <FiUser className="hover:text-gray-400 cursor-pointer" />
                            <FiShoppingCart className="hover:text-gray-400 cursor-pointer" />
                        </div>
                        <button
                            onClick={() => setMobileOpen(!mobileOpen)}
                            className="md:hidden text-2xl"
                        >
                            {mobileOpen ? <FiX /> : <FiMenu />}
                        </button>
                    </div>

                    {/* Desktop Menu */}
                    <nav
                        className="hidden md:flex border-t border-gray-400 justify-between px-6 gap-10 text-sm font-medium uppercase items-center relative"
                        onMouseLeave={() => setActiveDesktop(null)}
                    >
                        <div className="flex flex-col items-start">
                            <button className="text-white rounded-md text-sm font-semibold px-4 py-2 hover:bg-white hover:text-black transition">
                                Annual Report 2024-25
                            </button>
                        </div>

                        <div className="flex gap-8 text-gray-200">
                            {navItems.map((item, i) => (
                                <div
                                    key={i}
                                    onMouseEnter={() => setActiveDesktop(i)}
                                    className="cursor-pointer py-3 hover:text-gray-400 transition"
                                >
                                    {item.label}
                                </div>
                            ))}
                        </div>

                        {/* Submenu Panel */}
                        <div
                            ref={submenuPanelRef}
                            className="absolute top-full left-0 w-full bg-slate-900 shadow-md border-t overflow-hidden opacity-0 h-0 col-span-2"
                        >
                            {activeDesktop !== null &&
                                navItems[activeDesktop].submenu.length > 0 && (
                                    <div className="max-w-4xl ml-auto px-8 py-6 grid grid-cols-2 md:grid-cols-3 gap-6">
                                        {navItems[activeDesktop].submenu.map((sub, idx) => (
                                            <Link
                                                key={idx}
                                                to={getPathFromItem(sub)}
                                                onClick={() => {
                                                    setMobileOpen(false);
                                                    setOpenAccordions([]);
                                                }}
                                                className={`block py-1 ${isActive(sub)
                                                    ? "text-orange-600 font-semibold"
                                                    : "text-white hover:text-orange-600"
                                                    }`}
                                            >
                                                {sub}
                                            </Link>
                                        ))}
                                    </div>
                                )}
                        </div>
                    </nav>

                    {/* Mobile Menu */}
                    <div
                        ref={mobileMenuRef}
                        className={`md:hidden transition-all overflow-hidden bg-white ${mobileOpen ? "block" : "hidden"
                            }`}
                    >
                        <div className="px-6 pb-6">
                            {navItems.map((item, i) => {
                                const isOpen = openAccordions.includes(i);
                                return (
                                    <div key={i}>
                                        <div
                                            onClick={() => toggleAccordion(i)}
                                            className="flex justify-between items-center py-3 cursor-pointer text-gray-800 font-medium"
                                        >
                                            {item.label}
                                            <FiChevronDown
                                                className={`transform transition-transform ${isOpen ? "rotate-180" : ""
                                                    }`}
                                            />
                                        </div>
                                        <div
                                            ref={(el) => (submenuRefs.current[i] = el)}
                                            className="overflow-hidden h-0 opacity-0"
                                            style={{ display: "none" }}
                                        >
                                            <div className="pl-4 py-2 space-y-1 text-sm">
                                                {item.submenu.map((sub, j) => (
                                                    <Link
                                                        key={j}
                                                        to={getPathFromItem(sub)}
                                                        onClick={() => {
                                                            setMobileOpen(false);
                                                            setOpenAccordions([]);
                                                        }}
                                                        className={`block py-1 ${isActive(sub)
                                                            ? "text-orange-600 font-semibold"
                                                            : "text-gray-600 hover:text-black"
                                                            }`}
                                                    >
                                                        {sub}
                                                    </Link>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                );
                            })}
                            <div className="mt-6 flex gap-6 text-gray-700 text-xl">
                                <FiSearch />
                                <FiUser />
                                <FiShoppingCart />
                            </div>
                        </div>
                    </div>
                </header>
            </div>
        </>
    );
}
