import { useEffect, useRef, useState } from "react";

import inactiveMarker from "../../../assets/images/download1.svg"; // white
import activeMarker from "../../../assets/images/download.svg";   // green

const steps = [
    {
        title: "Identify Real Problems",
        desc: "Understand real-world problems before writing code.",
    },
    {
        title: "Design Systems, Not Just Code",
        desc: "Translate problems into structured technical solutions.",
    },
    {
        title: "Build & Integrate Real Systems",
        desc: "Turn designs into working systems.",
    },
    {
        title: "Iterate, Optimize, and Scale",
        desc: "Improve what you’ve built instead of moving on too fast.",
    },
];

const SalesTimeline = () => {
    const sectionRef = useRef(null);

    const [activeStep, setActiveStep] = useState(1);
    const [showTextStep, setShowTextStep] = useState(-1);
    const [hasStarted, setHasStarted] = useState(false);

    /* ================= INTERSECTION OBSERVER ================= */
    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setHasStarted(true);     // 🔥 trigger animation
                    observer.disconnect();   // run only once
                }
            },
            { threshold: 0.3 }
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => observer.disconnect();
    }, []);

    /* ================= AUTO STEP ANIMATION ================= */
    useEffect(() => {
        if (!hasStarted) return;

        if (activeStep <= steps.length) {
            const revealTimer = setTimeout(() => {
                setShowTextStep(activeStep - 1);
            }, 600);

            const nextStepTimer = setTimeout(() => {
                if (activeStep < steps.length) {
                    setActiveStep((prev) => prev + 1);
                }
            }, 1200);

            return () => {
                clearTimeout(revealTimer);
                clearTimeout(nextStepTimer);
            };
        }
    }, [activeStep, hasStarted]);

    return (
        <section
            ref={sectionRef}
            className="mx-5 md:mx-10 lg:mx-15 my-12"
        >
            <div className="bg-[#0E2E2E] border border-white/20 rounded-3xl p-6 lg:p-10">

                {/* TITLE */}
                <h2 className="text-white text-xl lg:text-2xl font-light mb-12">
                    Build Your Own Projects:{" "}
                    <span className="font-medium">
                        Learn AI by Buliding AI
                    </span>
                </h2>

                {/* ================= DESKTOP ================= */}
                <div className="hidden lg:block relative">

                    {/* BASE LINE */}
                    <div className="absolute top-[34px] left-0 w-full h-[6px] bg-[#6ED190]/30 rounded-full" />

                    {/* FILL LINE */}
                    <div
                        className="absolute top-[34px] left-0 h-[6px] bg-[#D9E38A]
                        rounded-full transition-all duration-[1400ms] ease-in-out"
                        style={{
                            width: `${((activeStep - 1) / (steps.length - 1)) * 100}%`,
                        }}
                    />

                    {/* STEPS */}
                    <div className="grid grid-cols-4 gap-10 relative mt-16">
                        {steps.map((step, i) => {
                            const markerActive = i + 1 <= activeStep;
                            const textVisible = i <= showTextStep;

                            return (
                                <div key={i}>
                                    {/* MARKER */}
                                    <div className="relative w-16 h-16">
                                        <img
                                            src={markerActive ? activeMarker : inactiveMarker}
                                            alt=""
                                            className="w-full h-full object-contain"
                                        />
                                        <span className="absolute inset-0 flex items-center justify-center font-bold text-black text-lg">
                                            {i + 1}
                                        </span>
                                    </div>

                                    {/* TEXT */}
                                    <div
                                        className={`mt-6 transition-all duration-[1000ms] ease-in-out
                                        ${textVisible
                                                ? "opacity-100 translate-y-0"
                                                : "opacity-0 translate-y-6"}`}
                                    >
                                        <h3 className="text-white text-lg mb-2">
                                            {step.title}
                                        </h3>
                                        <p className="text-white/80 text-sm leading-relaxed">
                                            {step.desc}
                                        </p>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>

                {/* ================= MOBILE ================= */}
                <div className="lg:hidden flex flex-col gap-6">
                    {steps.map((step, i) => (
                        <div
                            key={i}
                            className={`flex gap-4 items-start transition-all duration-700
                            ${i <= showTextStep ? "opacity-100" : "opacity-40"}`}
                        >
                            <div className="relative w-12 h-12 shrink-0">
                                <img
                                    src={i + 1 <= activeStep ? activeMarker : inactiveMarker}
                                    alt=""
                                    className="w-full h-full object-contain"
                                />
                                <span className="absolute inset-0 flex items-center justify-center font-bold text-black">
                                    {i + 1}
                                </span>
                            </div>

                            <div>
                                <h3 className="text-white text-base mb-1">
                                    {step.title}
                                </h3>
                                <p className="text-white/80 text-sm">
                                    {step.desc}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
};

export default SalesTimeline;
