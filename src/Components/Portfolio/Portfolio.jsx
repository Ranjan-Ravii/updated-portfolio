import React, { useState, useRef, useEffect } from "react";

const Portfolio = () => {
    const [activeIndex, setActiveIndex] = useState(0);
    const projectRefs = useRef([]);
    const scrollContainerRef = useRef(null);

    const projects = [
    {
        id: 1,
        title: "Video Streaming Platform",
        url: "https://example.com/", // Replace with actual URL
        img_url : "/live-streaming.png",
        description:
            "A YouTube-like full-stack video streaming platform built using the MERN stack. Includes user authentication, video upload/update, likes, comments, and a modern UI.",
        tags: ["MongoDB", "Express", "React", "Node.js", "Authentication"],
        bgColor: "bg-red-600",
        textColor: "text-red-500",
        borderColor: "border-red-600",
        tagColor: "bg-red-600/80",
    },
    {
        id: 2,
        title: "Local DNS Server",
        url: "https://github.com/Ranjan-Ravii/dns-server/",
        img_url : "dns-server.jpg",
        description:
            "Custom local DNS server setup using BIND to resolve domain names within a private network. Useful for educational, testing, and internal network configurations.",
        tags: ["Linux", "BIND", "DNS", "Networking"],
        bgColor: "bg-indigo-600",
        textColor: "text-indigo-500",
        borderColor: "border-indigo-600",
        tagColor: "bg-indigo-600/80",
    },
    {
        id: 3,
        title: "Currency Converter",
        url : "https://ranjan-ravii.github.io/currency-converter/",
        img_url : "/currency_converter.jpg",
        description:
            "Real-time currency conversion app using public exchange rate APIs. Includes conversion history, favorite currencies, and a responsive UI.",
        tags: ["React", "API", "Tailwind"],
        bgColor: "bg-green-600",
        textColor: "text-green-500",
        borderColor: "border-green-600",
        tagColor: "bg-green-600/80",
    },
    {
        id: 4,
        title: "Password Generator",
        url : "https://ranjan-ravii.github.io/password-generator/",
        img_url : "/keyboard-with-latter.jpg",
        description:
            "Customizable password generator that allows users to select length and character types. Features strength indicator and one-click copy.",
        tags: ["React", "Clipboard", "Tailwind"],
        bgColor: "bg-yellow-600",
        textColor: "text-yellow-500",
        borderColor: "border-yellow-600",
        tagColor: "bg-yellow-600/80",
    },
];


    const handleScroll = () => {
        if (!scrollContainerRef.current) return;

        const scrollTop = scrollContainerRef.current.scrollTop;
        const containerHeight = scrollContainerRef.current.clientHeight;

        let closestIndex = 0;
        let closestDistance = Infinity;

        projectRefs.current.forEach((ref, i) => {
            if (ref) {
                const refTop = ref.offsetTop - scrollContainerRef.current.offsetTop;
                const refHeight = ref.offsetHeight;
                const refCenter = refTop + refHeight / 2;
                const containerCenter = scrollTop + containerHeight / 2;
                const distance = Math.abs(refCenter - containerCenter);

                if (distance < closestDistance) {
                    closestDistance = distance;
                    closestIndex = i;
                }
            }
        });

        // console.log("Active Index:", closestIndex); // Debugging
        setActiveIndex(closestIndex);
    };

    useEffect(() => {
        const scrollContainer = scrollContainerRef.current;
        if (scrollContainer) {
            scrollContainer.addEventListener("scroll", handleScroll);
            return () => scrollContainer.removeEventListener("scroll", handleScroll);
        }
    }, []);

    return (
        <section className="min-h-screen bg-gradient-to-br from-gray-800 to-[#0A0A23] text-gray-100 py-12">
            <div className="max-w-6xl mx-auto px-4">
                <h2 className="text-4xl font-bold mb-10 text-center">Projects</h2>

                <div className="grid grid-cols-1 md:grid-cols-3 items-center gap-14">
                    {/* Left navigation panel */}
                    <div className="flex flex-col gap-4">
                        {projects.map((project, index) => (
                            <div
                                key={project.id}
                                className={`flex items-center gap-4 p-4 rounded-lg transition-all duration-300 ${index === activeIndex
                                    ? `${project.bgColor} text-white shadow-lg !important`
                                    : "bg-gray-700 hover:bg-gray-600"
                                    }`}
                            >
                                <span className="w-8 h-8 flex items-center justify-center rounded-full bg-gray-900 text-white font-bold">
                                    {project.id}
                                </span>
                                <span className="font-medium">{project.title}</span>
                            </div>
                        ))}
                    </div>

                    {/* Right scrollable content */}
                    <div
                        ref={scrollContainerRef}
                        className="scroll-container col-span-2 h-[600px] overflow-y-auto pr-4 rounded-lg shadow-lg bg-gray-900 flex-col justify-center"
                    >
                        <div className="h-[100px]"></div>

                        {projects.map((project, index) => (
                            <div
                                key={project.id}
                                ref={(el) => (projectRefs.current[index] = el)}
                                className={`mb-[100px] p-6 rounded-xl h-[400px] flex flex-col transition-all duration-300 ${index === activeIndex
                                    ? `bg-opacity-10 border-l-4 ${project.borderColor} ${project.bgColor} !important`
                                    : "bg-gray-800/80  "
                                    }`}
                            >
                                {/* Image Section */}
                                <div className="w-full h-40 bg-gray-700 rounded-lg mb-4 flex items-center justify-center">
                                    {/* Replace the placeholder with an actual image */}
                                    <img
                                        src={`${project.img_url}`} // Replace with your image URL
                                        alt={`${project.title} Thumbnail`}
                                        className="w-full h-full object-cover rounded-lg"
                                    />
                                </div>

                                {/* Title */}
                                <h3
                                    className={`text-2xl font-bold mb-3 ${index === activeIndex ? project.textColor : "text-white"
                                        }`}
                                >
                                    {project.title}
                                </h3>

                                {/* Tags */}
                                <div className="flex flex-wrap gap-2 mb-4">
                                    {project.tags.map((tag, i) => (
                                        <span
                                            key={i}
                                            className={`px-3 py-1 rounded-full text-xs ${index === activeIndex
                                                ? project.tagColor + " text-white shadow-lg"
                                                : "bg-gray-700 hover:bg-gray-600"
                                                }`}
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div>

                                {/* Description */}
                                <p className="text-gray-300 leading-relaxed flex-grow">
                                    {project.description}
                                </p>

                                {/* Button */}
                                <div className="mt-4">
                                    <button
                                        className={`px-4 py-2 rounded-md ${index === activeIndex
                                                ? `${project.bgColor} text-white`
                                                : "bg-gray-800/80"
                                            } transition-all hover:opacity-90`}
                                        onClick={() => {
                                            // Navigate to the project URL
                                            // window.location.href = project.url; // Use the `url` property from the project object
                                            //open in new tab
                                            window.open(project.url, "_blank");
                                        }}
                                    >
                                        View Details
                                    </button>
                                </div>
                            </div>
                        ))}

                        <div className="h-[100px]"></div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Portfolio;
