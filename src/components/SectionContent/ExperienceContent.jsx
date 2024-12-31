import React from "react";
import { Card, CardHeader, CardTitle, CardContent } from "../ui/card";

export const experiences = [
    {
        id: 1,
        company: "Skepsi.ai",
        logo: "/src/assets/images/skepsi_ai_logo.jpeg",
        position: "Software Developer Intern",
        timePeriod: "Aug 2024 - Nov 2023",
        duration: "3 months",
        description: [
            "Developed and maintained backend web portals using .NET framework and RESTful APIs, improving system functionality and performance.",
            "Created automated test scripts using Selenium, ensuring the reliability and stability of web applications.",
            "Optimized SQL queries and database structure, enhancing data retrieval speed by 25%.",
            "Collaborated closely with frontend developers to seamlessly integrate user-facing elements with backend logic."
        ]
    },
    {
        id: 2,
        company: "GDSC KIET",
        logo: "/src/assets/images/gdsc.png",
        position: "Design Lead",    
        timePeriod: "Jul 2022 - Dec 2022",
        duration: "6 months",
        description: [
            "Designed scalable backend systems and improved performance by 30%."
        ]
    },
];

export default function ExperienceContent({ PageTitle }) {
    return (
        <div className="">
            <h1 className="text-6xl font-bold text-white">{PageTitle}</h1>
            <h2 className="text-2xl font-light text-yellow-400 pt-4">
                This is the Experience section
            </h2>
            <div className="grid grid-cols-1 gap-6 mt-10">
                {experiences.map((experience) => (
                    <Card key={experience.id} className="bg-gray-900 shadow-lg text-white">
                        <CardHeader className="flex flex-row justify-between">
                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 rounded-lg bg-white">
                                    <img
                                        src={experience.logo}
                                        alt={experience.company}
                                        className="w-full h-full object-cover rounded-lg"
                                    />
                                </div>
                                <div>
                                    <CardTitle className="text-xl">{experience.company}</CardTitle>
                                    <p className="text-sm text-gray-400">{experience.position}</p>
                                </div>
                            </div>
                            <div className="text-right">
                                <p className="text-lg text-yellow-400">{experience.timePeriod}</p>
                                <p className="text-base text-gray-400">{experience.duration}</p>
                            </div>
                        </CardHeader>
                        <CardContent>
                            <ul className="list-disc space-y-2 pl-4">
                                {experience.description.map((point, index) => (
                                    <li key={index} className="text-gray-300">
                                        {point}
                                    </li>
                                ))}
                            </ul>
                        </CardContent>
                    </Card>
                ))}
            </div>
        </div>
    );
}