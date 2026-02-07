import { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const COURSES = [
    { id: "ai-ml", label: "AI Frontier Engineering" },
    { id: "system-design", label: "Systems and Software Engineer" },
];



const EnrollForm = () => {

    const navigate = useNavigate();

    const [form, setForm] = useState({
        name: "",
        email: "",
        phone: "",
        course: "",
    });

    const [open, setOpen] = useState(false);
    const [paymentSuccess, setPaymentSuccess] = useState(false); // ✅ NEW
    const dropdownRef = useRef(null);

    const handleChange = (e) => {
        const { name, value } = e.target;
        if (name === "phone" && !/^\d*$/.test(value)) return;
        setForm({ ...form, [name]: value });
    };

   
    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!form.course) {
            alert("Please select a course");
            return;
        }

        try {
      
            const res = await fetch(
                "http://localhost:5000/api/payment/create-order",
                {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                }
            );

            const order = await res.json();

            const options = {
                key: "rzp_live_SD1J0sfZm9Er8e",
                amount: order.amount,
                currency: "INR",
                name: "Skill Point",
                description: "Course Enrollment Fee",
                order_id: order.id,
                handler: async function (response) {
                    const verify = await fetch(
                        "http://localhost:5000/api/payment/verify",
                        {
                            method: "POST",
                            headers: { "Content-Type": "application/json" },
                            body: JSON.stringify(response),
                        }
                    );

                    const result = await verify.json();

                    if (result.status === "success") {
                        setPaymentSuccess(true); // ✅ POPUP OPEN
                    } else {
                        alert("Payment Verification Failed");
                    }
                },
                theme: { color: "#6ED190" },
            };

            const rzp = new window.Razorpay(options);
            rzp.open();

        } catch (err) {
            console.error(err);
            alert("Payment Failed");
        }
    };

    useEffect(() => {
        const close = (e) =>
            dropdownRef.current &&
            !dropdownRef.current.contains(e.target) &&
            setOpen(false);

        document.addEventListener("mousedown", close);
        return () => document.removeEventListener("mousedown", close);
    }, []);

    return (
        <>
            <section className="py-30 bg-[#0b1514] text-white flex items-center justify-center px-6">
                <div className="w-full max-w-6xl grid grid-cols-1 md:grid-cols-2 gap-12">

                    {/* LEFT */}
                    <div>
                        <h1 className="text-4xl md:text-5xl font-semibold leading-tight mt-0 md:mt-20">
                            Enroll for <span className="text-[#6ED190]">Courses</span>
                        </h1>
                        <p className="mt-4 text-gray-400 max-w-md mb-8">
                            Choose your course and our team will guide you through the next steps.
                        </p>
                    </div>

                    {/* FORM */}
                    <div className="relative">
                        <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[#6ED190]/30 to-[#1fd1c1]/20"></div>

                        <form
                            onSubmit={handleSubmit}
                            className="relative bg-[#0f1d1b]/80 backdrop-blur-xl border border-white/10 rounded-2xl p-8 space-y-6"
                        >
                            <Input
                                label="Your Name"
                                name="name"
                                value={form.name}
                                onChange={handleChange}
                                placeholder="Full name"
                            />

                            <Input
                                label="Email Address"
                                name="email"
                                type="email"
                                value={form.email}
                                onChange={handleChange}
                                placeholder="Email"
                            />

                            <Input
                                label="Mobile Number"
                                name="phone"
                                value={form.phone}
                                onChange={handleChange}
                                placeholder="Mobile number"
                                maxLength={10}
                            />

                            {/* COURSE DROPDOWN */}
                            <div ref={dropdownRef} className="relative">
                                <label className="text-sm text-gray-400">Choose Course</label>

                                <button
                                    type="button"
                                    onClick={() => setOpen(!open)}
                                    className="mt-2 w-full border border-white/20 rounded-xl px-4 py-4 text-left flex items-center justify-between hover:border-white/40 transition"
                                >
                                    <span className={form.course ? "text-white" : "text-gray-500"}>
                                        {form.course || "Select a course"}
                                    </span>

                                    <svg
                                        className={`w-5 h-5 transition-transform ${open ? "rotate-180" : ""}`}
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                        viewBox="0 0 24 24"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M19 9l-7 7-7-7"
                                        />
                                    </svg>
                                </button>

                                {open && (
                                    <div className="absolute z-20 mt-3 w-full rounded-2xl bg-[#0f1d1b] border border-white/10 shadow-2xl overflow-hidden cursor-pointer">
                                        {COURSES.map((course, index) => {
                                            const isDisabled = index === 1; // 👈 2nd option disabled

                                            return (
                                                <div
                                                    key={course.id}
                                                    onClick={() => {
                                                        if (isDisabled) return;
                                                        setForm({ ...form, course: course.label });
                                                        setOpen(false);
                                                    }}
                                                    className={`px-5 py-4 cursor-pointer
                        ${isDisabled ? "opacity-40 cursor-not-allowed" : "hover:bg-[#6ED190]/10"}
                        ${form.course === course.label && !isDisabled ? "bg-[#6ED190]/15" : ""}
                    `}
                                                >
                                                    {course.label}
                                                    {isDisabled && (
                                                        <span className="ml-2 text-xs text-red-400">(Coming Soon)</span>
                                                    )}
                                                </div>
                                            );
                                        })}
                                    </div>
                                )}

                            </div>

                            <button
                                onClick={() => window.location.href = "https://rzp.io/rzp/MCGkrYG"}
                                className="mt-8 bg-[#d9e38a] text-[#0b1818] px-8 py-4 rounded-2xl text-sm font-semibold uppercase hover:bg-[#436b56] hover:text-white transition w-full cursor-pointer text-center block"
                            >
                                Enroll Now
                            </button>
                        </form>
                    </div>
                </div>
            </section>

            {/* ✅ PAYMENT SUCCESS POPUP */}
            {paymentSuccess && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm">
                    <div className="bg-[#0f1d1b] border border-[#6ED190]/40 rounded-3xl p-10 w-[90%] max-w-md text-center shadow-2xl animate-scaleIn">

                        <div className="mx-auto mb-6 w-20 h-20 rounded-full bg-[#6ED190]/20 flex items-center justify-center">
                            <svg
                                className="w-10 h-10 text-[#6ED190]"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="3"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M5 13l4 4L19 7"
                                />
                            </svg>
                        </div>

                        <h2 className="text-2xl font-semibold text-white">
                            Payment Successful 
                        </h2>

                        <p className="mt-3 text-gray-400 text-sm">
                            Your enrollment is confirmed.
                            Our team will contact you shortly.
                        </p>

                        <button
                            // onClick={() => {
                            //     setPaymentSuccess(false);
                            //     navigate("/"); 
                            // }}
                            
                            className="mt-8 w-full bg-[#6ED190] text-[#0b1514] py-3 rounded-xl font-semibold hover:opacity-90 transition cursor-pointer"
                        >
                            Continue  
                        </button>
                    </div>
                </div>
            )}
        </>
    );
};

export default EnrollForm;

// INPUT COMPONENT
const Input = ({ label, ...props }) => (
    <div>
        <label className="text-sm text-gray-400">{label}</label>
        <input
            {...props}
            required
            className="mt-2 w-full bg-transparent border border-white/15 rounded-lg px-4 py-3 outline-none focus:border-[#6ED190]"
        />
    </div>
);
