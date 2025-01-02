import React from "react";
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from "../ui/card";
import { Button } from "../ui/button";
import { Badge } from "../ui/badge"; // Import Badge from shadcn
import { FiGithub, FiExternalLink } from "react-icons/fi"; // Import Feather icons

const projects = [
    {
        id: 1,
        name: "VibeMusic",
        techStack: ["React", "Node.js", "MongoDB", "Express", "AWS"],
        description: [
            "Built a full-stack music streaming platform with real-time playback",
            "Implemented user authentication and playlist management",
            "Integrated with AWS S3 for audio file storage",
            "Developed responsive UI with Material-UI components"
        ],
        links: {
            github: "https://github.com/example/tracklyf",
            liveDemo: "https://tracklyf.example.com",
        },
    },
    {
        id: 2,
        name: "Portfolio Website",
        techStack: ["Next.js", "TailwindCSS", "Three.js", "Framer Motion"],
        description: [
            "Designed and developed a modern portfolio website with 3D elements",
            "Implemented smooth page transitions and animations",
            "Optimized performance and accessibility",
            "Added dark mode support and responsive design"
        ],
        links: {
            github: "https://github.com/example/portfolio",
            liveDemo: "https://portfolio.example.com",
        },
    },
    {
        id: 3,
        name: "E-commerce Store",
        techStack: ["React", "Firebase", "Stripe", "Redux", "Tailwind"],
        description: [
            "Developed a full-featured e-commerce platform with cart functionality",
            "Integrated Stripe payment processing",
            "Implemented real-time inventory management with Firebase",
            "Added user authentication and order tracking"
        ],
        links: {
            github: "sdfs",
            liveDemo: "https://store.example.com",
        }
    }
];

export default function ProjectsContent() {
    return (
        <div className="h-full w-full rounded-lg overflow-y-auto">
            <h1 className="text-6xl font-bold text-card dark:text-foreground">Projects</h1>
            <h2 className="text-2xl font-light text-secondary dark:text-secondary-dark mt-4">
                Explore my recent work
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                {projects.map((project) => (
                    <Card
                        key={project.id}
                        className="bg-muted-foreground dark:bg-third text-card dark:text-foreground shadow-lg hover:shadow-xl transition-shadow"
                    >
                        <CardHeader>
                            <div className="space-y-4">
                                <CardTitle className="text-2xl font-bold dark:text-xl-dark">
                                    {project.name}
                                </CardTitle>
                                <div className="flex flex-wrap gap-2">
                                    {project.techStack.map((tech, index) => (
                                        <Badge
                                            key={index}
                                            variant="secondary"
                                            className="text-base bg-muted dark:bg-muted-dark text-muted-foreground dark:text-muted-foreground-dark"
                                        >
                                            {tech}
                                        </Badge>
                                    ))}
                                </div>
                            </div>
                        </CardHeader>
                        <CardContent>
                            <ul className="space-y-2 text-border dark:text-muted-foreground text-sm">
                                {project.description.map((point, index) => (
                                    <li key={index} className="text-base     flex items-start">
                                        <span className="mr-2 text-secondary dark:text-secondary-dark">•</span>
                                        {point}
                                    </li>
                                ))}
                            </ul>
                        </CardContent>
                        <CardFooter className="flex justify-end gap-2">
                            {project.links.github && (
                                <Button
                                    variant="ghost"
                                    size="sm"
                                    className="text-base text-muted dark:text-muted-foreground hover:text-foreground hover:bg-muted dark:hover:bg-muted-dark"
                                    asChild
                                >
                                    <a
                                        href={project.links.github}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center gap-2"
                                    >
                                        <FiGithub className="w-8 h-8" />
                                        <span>Code</span>
                                    </a>
                                </Button>
                            )}
                            {project.links.liveDemo && (
                                <Button
                                    variant="ghost"
                                    size="sm"
                                    className="text-base text-muted dark:text-muted-foreground hover:text-foreground hover:bg-muted dark:hover:bg-muted-dark"
                                    asChild
                                >
                                    <a
                                        href={project.links.liveDemo}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center gap-2"
                                    >
                                        <FiExternalLink className="w-4 h-4" />
                                        <span>Demo</span>
                                    </a>
                                </Button>
                            )}
                        </CardFooter>
                    </Card>
                ))}
            </div>
        </div>
    );
}
