import React from "react";
import { Card, CardHeader, CardTitle, CardContent } from "../ui/card";

const techStack = {
    Languages: [
        { name: "C++", image: "/path-to-cpp-logo.png" },
        { name: "C", image: "/path-to-c-logo.png" },
        { name: "C#", image: "/path-to-csharp-logo.png" },
        { name: "Python", image: "/path-to-python-logo.png" },
        { name: "HTML", image: "/path-to-html-logo.png" },
        { name: "CSS", image: "/path-to-css-logo.png" },
        { name: "JavaScript", image: "/path-to-js-logo.png" },
        { name: "SQL", image: "/path-to-sql-logo.png" },
    ],
    Technologies: [
        { name: ".NET", image: "/path-to-dotnet-logo.png" },
        { name: "React", image: "/path-to-react-logo.png" },
        { name: "NodeJS", image: "/path-to-nodejs-logo.png" },
        { name: "Express", image: "/path-to-express-logo.png" },
        { name: "MongoDB", image: "/path-to-mongodb-logo.png" },
        { name: "Tailwind", image: "/path-to-tailwind-logo.png" },
        { name: "Git", image: "/path-to-git-logo.png" },
        { name: "GitHub", image: "/path-to-github-logo.png" },
        { name: "Docker", image: "/path-to-docker-logo.png" },
        { name: "Linux", image: "/path-to-linux-logo.png" },
        { name: "AWS", image: "/path-to-aws-logo.png" },
        { name: "Selenium", image: "/path-to-selenium-logo.png" },
        { name: "Figma", image: "/path-to-figma-logo.png" },
        { name: "Adobe Illustrator", image: "/path-to-adobe-logo.png" },
    ],
    "Databases & ORMs": [
        { name: "PostgreSQL", image: "/path-to-postgresql-logo.png" },
        { name: "MySQL", image: "/path-to-mysql-logo.png" },
        { name: "Sequelize", image: "/path-to-sequelize-logo.png" },
        { name: "Drizzle ORM", image: "/path-to-drizzle-logo.png" },
    ],
    Concepts: [
        { name: "Compiler", image: "/path-to-compiler-logo.png" },
        { name: "Operating System", image: "/path-to-os-logo.png" },
        { name: "Data Structures and Algorithms", image: "/path-to-dsa-logo.png" },
        { name: "Automation & Testing", image: "/path-to-automation-logo.png" },
    ],
};

export default function TechStackContent() {
    return (
        <div className="h-full w-full rounded-lg overflow-y-auto">
            <h1 className="text-6xl font-bold text-white">Tech Stack</h1>
            <h2 className="text-2xl font-light text-yellow-400 mt-4">
                Explore my technical skills and tools
            </h2>

            <div className="mt-8 space-y-8">
                {Object.entries(techStack).map(([category, items]) => (
                    <div key={category}>
                        <h3 className="text-3xl font-semibold text-white mb-4">{category}</h3>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                            {items.map((item, index) => (
                                <Card
                                    key={index}
                                    className="bg-gray-900/50 border border-gray-800 text-white hover:border-gray-700 transition-all duration-300"
                                >
                                    <CardHeader className="flex flex-col items-center">
                                        <img
                                            src={item.image}
                                            alt={item.name}
                                            className="w-16 h-16 object-contain mb-4"
                                        />
                                        <CardTitle className="text-lg font-medium">
                                            {item.name}
                                        </CardTitle>
                                    </CardHeader>
                                </Card>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
