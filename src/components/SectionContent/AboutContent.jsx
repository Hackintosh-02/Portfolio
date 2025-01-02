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
            <h1 className="text-6xl font-bold text-card dark:text-foreground">About</h1>
            <h2 className="text-2xl font-light text-secondary dark:text-secondary-dark">
                Get to know me better
            </h2>

            <div className="space-y-6">
                {/* Profile Card */}
                <Card className="bg-muted-foreground dark:bg-third text-card dark:text-foreground shadow-lg hover:shadow-xl transition-shadow">
                    <CardHeader className="flex flex-col md:flex-row gap-8">
                        <div className="w-64 h-64 rounded-lg bg-muted dark:bg-muted-dark overflow-hidden flex-shrink-0">
                            <img
                                src="/src/assets/images/profile.png"
                                alt="Ashutosh Sharma"
                                className="w-full h-full object-cover"
                            />
                        </div>
                        <div className="space-y-4">
                            <div>
                                <CardTitle className="text-4xl text-primary dark:text-foreground mb-2">
                                    Ashutosh Sharma
                                </CardTitle>
                                <p className="text-2xl text-secondary dark:text-secondary-dark font-light">
                                    Software Developer
                                </p>
                            </div>
                            <p className="text-xl text-muted-foreground dark:text-muted-foreground-dark leading-relaxed">
                                I am a software developer with a passion for building scalable backend systems. 
                                I have experience working with Node.js, Express, and MongoDB. 
                                I am also familiar with frontend technologies like React and Tailwind CSS. 
                                I am always looking to learn new technologies and improve my skills.
                            </p>
                        </div>
                    </CardHeader>
                </Card>

                {/* Background Card */}
                <Card className="bg-muted-foreground dark:bg-third text-card dark:text-foreground shadow-lg hover:shadow-xl transition-shadow">
                    <CardHeader>
                        <CardTitle className="text-2xl text-secondary dark:text-secondary-dark">Background</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                        <div>
                            <h3 className="text-xl font-semibold mb-2 text-card dark:text-foreground">Education</h3>
                            <p className="text-muted-foreground dark:text-muted-foreground-dark">
                                KIET Group of Institutions, Delhi NCR
                            </p>
                            <p className="text-muted dark:text-muted-foreground">B.Tech in Computer Science • 2020-2024</p>
                        </div>
                    </CardContent>
                </Card>

                {/* Skills Card */}
                <Card className="bg-muted-foreground dark:bg-third text-card dark:text-foreground shadow-lg hover:shadow-xl transition-shadow">
                    <CardHeader>
                        <CardTitle className="text-2xl text-secondary dark:text-secondary-dark">Skills</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-6">
                        {Object.entries(skills).map(([category, categorySkills]) => (
                            <div key={category}>
                                <h3 className="text-xl font-semibold mb-3 text-card dark:text-foreground">{category}</h3>
                                <div className="flex flex-wrap gap-2">
                                    {categorySkills.map((skill) => (
                                        <Badge
                                            key={skill}
                                            variant="secondary"
                                            className="text-base bg-muted dark:bg-muted-dark text-muted-foreground dark:text-muted-foreground-dark"
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
                <Card className="bg-muted-foreground dark:bg-third text-card dark:text-foreground shadow-lg hover:shadow-xl transition-shadow">
                    <CardHeader>
                        <CardTitle className="text-2xl text-secondary dark:text-secondary-dark">
                            Interests & Hobbies
                        </CardTitle>
                    </CardHeader>
                    <CardContent className="grid md:grid-cols-2 gap-6">
                        <div>
                            <h3 className="text-xl font-semibold mb-3 text-card dark:text-foreground">Interests</h3>
                            <ul className="space-y-2">
                                {interests.map((interest) => (
                                    <li key={interest} className="flex items-center">
                                        <span className="text-secondary dark:text-secondary-dark mr-2">•</span>
                                        <span className="text-muted-foreground dark:text-muted-foreground-dark">
                                            {interest}
                                        </span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div>
                            <h3 className="text-xl font-semibold mb-3 text-card dark:text-foreground">Hobbies</h3>
                            <ul className="space-y-2">
                                {hobbies.map((hobby) => (
                                    <li key={hobby} className="flex items-center">
                                        <span className="text-secondary dark:text-secondary-dark mr-2">•</span>
                                        <span className="text-muted-foreground dark:text-muted-foreground-dark">
                                            {hobby}
                                        </span>
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
