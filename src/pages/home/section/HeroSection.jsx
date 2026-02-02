import calendarIcon from "../../../assets/images/Calander.svg";
import FullTime from "../../../assets/images/Full-Time-1.svg"
import Location from "../../../assets/images/location-2.svg"
import Medal from "../../../assets/images/medal-1.svg"

import coireiLogo from "../../../assets/images/coirei-logo-orange.png";
import foundersImg from "../../../assets/images/Paytm-cred-uc-meesho-Swiggy.webp";
import backedImg from "../../../assets/images/Frame-1297.webp";

import desktopVideoThumb from "../../../assets/images/banner.png";
import {  Download } from"lucide-react"
const openPDF = () => {
    window.open("/program-brochure.pdf", "_blank");
};
const HeroSection = () => {
    return (
        <section className=" text-white  py-10 lg:py-15 ">
            <div className="lg:mx-15 md:mx-10 mx-5">
                <div className="grid lg:grid-cols-[0.85fr_1fr] gap-8 lg:gap-16 items-center">

                    {/* LEFT */}
                    <div>
                        {/* Title */}
                        <h1 className="text-xl lg:text-2xl font-light leading-snug mb-5 ">
                            <span>Learn Like an </span>
                            <span className="font-medium">
                               Engineer <br className="hidden lg:block" />
                                &amp; Work Like One
                            </span>
                        </h1>

                        {/* Facts */}
                        <div className="flex flex-wrap items-center gap-4 text- text-[#cfe6db] mb-6">
                            <Fact icon={calendarIcon} text="3 Months" />
                            {/* <Fact icon={FullTime} text="Full-Time" /> */}
                            <Fact icon={Location} text="Online" />
                            <Fact icon={Medal} text="60 seats" />
                        </div>

                        {/* Tags */}
                        <div className="flex flex-wrap gap-3 mb-8">
                            {["AI & Software Tracks", "Build-First Curriculum", "Outcome-Driven"].map((tag) => (
                                <span
                                    key={tag}
                                    className="px-4 py-2 rounded-full text-xs font-medium
                  bg-[linear-gradient(90deg,rgba(17,33,33,0.26),rgba(110,209,144,0.26))]
                  border border-[#81A093] text-[#f5f7e0]"
                                >
                                    {tag}
                                </span>
                            ))}
                        </div>

                        {/* CTA */}
                        <a
                            onClick={openPDF}
                            href="/program-brochure.pdf"
                            download
                            className="inline-flex items-center gap-3
    bg-[#d9e38a] text-[#0b1818]
    px-8 py-4 rounded-2xl text-sm font-semibold uppercase
    hover:bg-[#436b56] hover:text-white transition cursor-pointer"
                        >
                            DOWNLOAD PROGRAM BROCHURE <span><Download size={20} /></span>
                        </a>


                        {/* Divider */}
                        <div className="hidden lg:block border-t border-[#81A093] my-10" />

                        {/* Logos */}
                        <div className="flex gap-3 lg:gap-3 max-lg:hidden ">
                            <LogoBlock title="Backed by:" img={coireiLogo} />
                           
                        </div>
                    </div>

                    {/* RIGHT – VIDEO CARD */}
                    <div className="relative rounded-3xl overflow-hidden">
                        <img
                            src={desktopVideoThumb}
                            alt="video"
                            className="w-full h-full object-cover"
                        />



                    </div>
                </div>
            </div>
        </section>
    );
};

export default HeroSection;

/* Small Components */

const Fact = ({ icon, text }) => (
    <div className="flex items-center gap-2">
        {icon && <img src={icon} alt="" className="w-5 h-5" />}
        <span>{text}</span>
    </div>
);

const LogoBlock = ({ title, img }) => (
    <div>
        <p className="text-xs mb-4 text-[#cfe6db] ">{title}</p>
        <img src={img} alt="Coirei-logo" className=" h-10 object-contain " />
    </div>
);
