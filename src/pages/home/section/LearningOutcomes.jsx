import { useState } from "react";
import * as Icons from "lucide-react";
import videoThumb from "../../../assets/images/outcomes.png";
import outcomes from "./LearninigOutcomesData";

const LearningOutcomes = () => {
    const [course, setCourse] = useState("A");
    const [active, setActive] = useState(0);

    const courseOutcomes =
        course === "A" ? outcomes.slice(0, 9) : outcomes.slice(9, 18);

    const current = courseOutcomes[active];

    return (
        <section id="learning" className="bg-[#0c2220] border border-white/10 rounded-3xl px-8 mx-5 lg:mx-14 my-20 text-white">
            {/* TOP */}
            <div className="grid lg:grid-cols-2 gap-10 items-center py-10" >
                <div>
                    <div className="flex gap-3 mb-6">
                        <button
                            onClick={() => { setCourse("A"); setActive(0); }}
                            className={`px-4 py-2 rounded-full text-sm cursor-pointer ${course === "A"
                                ? "bg-[#D9E38A] text-black"
                                : "border border-white/30 text-white/70"
                                }`}
                        >
                            AI & Machine Learning
                        </button>
                        <button
                            onClick={() => { setCourse("B"); setActive(0); }}
                            className={`px-4 py-2 rounded-full text-sm cursor-pointer ${course === "B"
                                ? "bg-[#D9E38A] text-black"
                                : "border border-white/30 text-white/70"
                                }`}
                        >
                            System & Software Engineer Pro
                        </button>
                    </div>

                    <h2 className="text-xl lg:text-2xl font-light mb-4">
                        The <span className="font-medium">learning outcomes</span>
                    </h2>
                    <p className="text-white/80 mb-2">
                        Build rock-solid programming fundamentals covering memory, OOP, and clean code principles used in real systems.

                    </p>
                    <p className="text-white/80">
                        Develop the ability to think in logic, abstractions, and trade-offs before touching AI models or large systems.
                    </p>
                </div>

                <img src={videoThumb} className="rounded-3xl w-full " />
            </div>

            {/* DESKTOP */}
            <div className=" lg:flex border border-[#183D2C] rounded-3xl mt-10 overflow-hidden">
                {/* LEFT 9 TITLES */}
                <div className="md:w-[22rem] w-full bg-[#183D2C] py-4">
                    {courseOutcomes.map((item, index) => (
                        <div
                            key={item.id}
                            onClick={() => setActive(index)}
                            className={`px-6 py-3 cursor-pointer border-b border-white/10 text-sm md:text-base  
                ${index === active
                                    ? "text-[#D9E38A] font-semibold"
                                    : "text-white/60 hover:text-white"
                                }`}
                        >
                            <span className="mr-3">{item.id}</span>
                            {item.title}
                        </div>
                    ))}
                </div>
                <div className="hidden md:flex">
                    {/* RIGHT CONTENT */}
                    <div className="flex-1 p-10">
                        <h4 className="font-medium mb-4">{current.intro}</h4>

                        <ul className="list-disc pl-5 text-white/80 text-sm space-y-1 mb-8">
                            {current.points.map((p, i) => (
                                <li className="" key={i}>{p}</li>
                            ))}
                        </ul>

                        {/* TOOLS (IMAGE STYLE) */}
                        <div className="mb-10 ">
                            <p className="text-white/60 mb-4">Tools</p>
                            <div className="flex flex-wrap gap-4">
                                {current.tools.map((tool, i) => (
                                    <img
                                        key={i}
                                        src={tool}
                                        className="h-9 "
                                    />
                                ))}
                            </div>
                        </div>

                        {/* TECHNIQUES (LUCIDE ICONS) */}
                        <div>
                            <p className="text-white/60 mb-4">Techniques</p>
                            <div className="flex flex-wrap gap-12">
                                {current.techniques.map((tech, i) => {
                                    const Icon = Icons[tech.icon] || Icons.Circle;
                                    return (
                                        <div key={i} className="max-w-[140px]">
                                            <Icon className="w-5 h-5 text-[#7AE2B6] mb-2" />
                                            <p className="text-sm text-white/80 ">{tech.text}</p>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default LearningOutcomes;
