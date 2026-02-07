import Logo from "../assets/images/skillpoint-white.svg";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Link, NavLink, useNavigate, useLocation } from "react-router-dom";

export default function Navbar() {

    const navigate = useNavigate();
    const location = useLocation();

    const [scrolled, setScrolled] = useState(false);
    const [open, setOpen] = useState(false);

    // ✅ COMMON SCROLL HANDLER (DESKTOP + MOBILE)
    const handleNavScroll = (id) => {
        if (location.pathname !== "/") {
            navigate("/");
            setTimeout(() => {
                document.getElementById(id)?.scrollIntoView({
                    behavior: "smooth",
                });
            }, 120);
        } else {
            document.getElementById(id)?.scrollIntoView({
                behavior: "smooth",
            });
        }
    };



    // SCROLL EFFECT
    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 20);
        window.addEventListener("scroll", onScroll);
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    return (
        <>
            {/* NAVBAR */}
            <header
                className={`
          fixed top-0 left-0 w-full z-50
          transition-all duration-500 ease-out py-2
          ${scrolled ? "backdrop-blur-2xl bg-[#06261b]/20" : ""}
        `}
            >
                <div className="lg:mx-15 md:mx-10 mx-5">
                    <div
                        className={`flex items-center justify-between transition-all duration-500 ${scrolled ? "h-14" : "h-16"
                            }`}
                    >
                        {/* LOGO */}
                        <Link to="/" className="flex items-center">
                            <img
                                src={Logo}
                                alt="skillpoint logo"
                                className={`transition-all duration-500 ${scrolled ? "w-[72px]" : "w-20"
                                    }`}
                            />
                        </Link>

                        {/* DESKTOP MENU */}
                        <nav className="hidden lg:flex items-center gap-8 text-white/90">
                            <NavLink
                                to="/"
                                end
                               
                                className={({ isActive }) =>
                                    isActive
                                        ? "text-[#6ED190] italic"
                                        : "text-white hover:text-[#6ED190]"
                                }
                            >
                                Home
                            </NavLink>

                            <button
                                onClick={() => handleNavScroll("learning")}
                                className="hover:text-[#6ED190] cursor-pointer"
                            >
                                Learning
                            </button>

                            <button
                                onClick={() => handleNavScroll("outcomes")}
                                className="hover:text-[#6ED190] cursor-pointer"
                            >
                                Outcomes
                            </button>

                            <Link
                                to="/contact"
                                className="ml-4 px-5 py-2 rounded-full border border-[#D9E38A] text-[#D9E38A]
                hover:bg-[#D9E38A]/10
                hover:shadow-[0_0_20px_rgba(217,227,138,0.35)]
                transition-all duration-300"
                            >
                                CONTACT US
                            </Link>
                        </nav>

                        {/* MOBILE TOGGLE */}
                        <button
                            onClick={() => setOpen(!open)}
                            className="lg:hidden text-white"
                        >
                            {open ? <X size={26} /> : <Menu size={26} />}
                        </button>
                    </div>
                </div>
            </header>

            {/* MOBILE OVERLAY */}
            <div
                className={`
          fixed inset-0 z-40 lg:hidden
          transition-all duration-500
          ${open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}
        `}
            >
                {/* BACKDROP */}
                <div
                    className="absolute inset-0 bg-black/40 backdrop-blur-sm"
                    onClick={() => setOpen(false)}
                />

                {/* DRAWER */}
                <div
                    className={`
            absolute top-0 right-0 h-full w-[75%] max-w-sm
            backdrop-blur-2xl bg-[#06261b]/85
            border-l border-white/10
            p-6
            transition-transform duration-500
            ${open ? "translate-x-0" : "translate-x-full"}
          `}
                >
                    <nav className="flex flex-col gap-6 text-white text-lg mt-16">
                        <Link
                            to="/"
                            onClick={() => setOpen(false)}
                            className="text-[#6ED190] italic"
                        >
                            Home
                        </Link>

                        <button
                            onClick={() => {
                                handleNavScroll("learning");
                                setOpen(false);
                            }}
                            className="text-left hover:text-[#6ED190]"
                        >
                            Learning
                        </button>

                        <button
                            onClick={() => {
                                handleNavScroll("outcomes");
                                setOpen(false);
                            }}
                            className="text-left hover:text-[#6ED190]"
                        >
                            Outcomes
                        </button>

                        <Link
                            to="/contact"
                            onClick={() => setOpen(false)}
                            className="mt-6 px-5 py-3 rounded-full border border-[#D9E38A] text-[#D9E38A]
              hover:bg-[#D9E38A]/10 transition"
                        >
                            CONTACT US
                        </Link>
                    </nav>
                </div>
            </div>

            {/* SPACER */}
            <div className="h-8" />
        </>
    );
}
