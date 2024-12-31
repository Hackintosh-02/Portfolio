import React from "react";
import { Card, CardHeader, CardTitle, CardContent } from "../ui/card";
import { Badge } from "../ui/badge";

const skills = {
    "Frontend": ["React", "Next.js", "Tailwind CSS", "Three.js", "TypeScript"],
    "Backend": ["Node.js", "Express", "MongoDB", "PostgreSQL", "Firebase"],
    "Tools": ["Git", "Docker", "AWS", "Figma", "Postman"],
};

const interests = [
    "Open Source Development",
    "System Architecture",
    "UI/UX Design",
    "Cloud Computing",
];

const hobbies = [
    "Photography",
    "Reading Tech Blogs",
    "Playing Chess",
    "Traveling",
];

export default function AboutContent() {
    return (
        <div className="space-y-6">
            <h1 className="text-6xl font-bold text-white">About</h1>
            <h2 className="text-2xl font-light text-yellow-400">Get to know me better</h2>

            <div className="space-y-6">
                {/* Profile Card */}
                <Card className="bg-gray-900 shadow-lg text-white">
                    <CardHeader className="flex flex-col md:flex-row gap-8">
                        <div className="w-64 h-64 rounded-lg bg-gray-800 overflow-hidden flex-shrink-0">
                            <img
                                src="/src/assets/images/profile.png"
                                alt="Ashutosh Sharma"
                                className="w-full h-full object-cover"
                            />
                        </div>
                        <div className="space-y-4">
                            <div>
                                <CardTitle className="text-4xl mb-2">Ashutosh Sharma</CardTitle>
                                <p className="text-2xl text-yellow-400 font-light">Software Developer</p>
                            </div>
                            <p className="text-xl text-gray-300 leading-relaxed">
                                I am a software developer with a passion for building scalable backend systems. 
                                I have experience working with Node.js, Express, and MongoDB. 
                                I am also familiar with frontend technologies like React and Tailwind CSS. 
                                I am always looking to learn new technologies and improve my skills.
                            </p>
                        </div>
                    </CardHeader>
                </Card>

                {/* Background Card */}
                <Card className="bg-gray-900 shadow-lg text-white">
                    <CardHeader>
                        <CardTitle className="text-2xl text-yellow-400">Background</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                        <div>
                            <h3 className="text-xl font-semibold mb-2">Education</h3>
                            <p className="text-gray-300">KIET Group of Institutions, Delhi NCR</p>
                            <p className="text-gray-400">B.Tech in Computer Science • 2020-2024</p>
                        </div>
                    </CardContent>
                </Card>

                {/* Skills Card */}
                <Card className="bg-gray-900 shadow-lg text-white">
                    <CardHeader>
                        <CardTitle className="text-2xl text-yellow-400">Skills</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-6">
                        {Object.entries(skills).map(([category, categorySkills]) => (
                            <div key={category}>
                                <h3 className="text-xl font-semibold mb-3">{category}</h3>
                                <div className="flex flex-wrap gap-2">
                                    {categorySkills.map((skill) => (
                                        <Badge 
                                            key={skill}
                                            variant="secondary"
                                            className="bg-gray-800 text-gray-200 hover:bg-gray-700"
                                        >
                                            {skill}
                                        </Badge>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </CardContent>
                </Card>

                {/* Interests & Hobbies Card */}
                <Card className="bg-gray-900 shadow-lg text-white">
                    <CardHeader>
                        <CardTitle className="text-2xl text-yellow-400">Interests & Hobbies</CardTitle>
                    </CardHeader>
                    <CardContent className="grid md:grid-cols-2 gap-6">
                        <div>
                            <h3 className="text-xl font-semibold mb-3">Interests</h3>
                            <ul className="space-y-2">
                                {interests.map((interest) => (
                                    <li key={interest} className="flex items-center">
                                        <span className="text-yellow-400 mr-2">•</span>
                                        <span className="text-gray-300">{interest}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div>
                            <h3 className="text-xl font-semibold mb-3">Hobbies</h3>
                            <ul className="space-y-2">
                                {hobbies.map((hobby) => (
                                    <li key={hobby} className="flex items-center">
                                        <span className="text-yellow-400 mr-2">•</span>
                                        <span className="text-gray-300">{hobby}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </CardContent>
                </Card>
            </div>
        </div>
    );
}