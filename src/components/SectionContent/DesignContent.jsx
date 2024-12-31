import React from "react";
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from "../ui/card";
import { Button } from "../ui/button";

const designs = [
    {
        id: 1,
        name: "Fitness App Design",
        image: "/path-to-fitness-app-image.jpg",
        description: "Designed a modern fitness app focusing on user engagement and health tracking.",
        tools: ["Figma", "Adobe XD"],
        figmaLink: "https://figma.com/example/fitness-app-design",
    },
    {
        id: 2,
        name: "E-commerce App UI",
        image: "/path-to-ecommerce-app-image.jpg",
        description: "Created an intuitive UI for an e-commerce platform with seamless shopping experience.",
        tools: ["Figma", "Sketch"],
        figmaLink: "https://figma.com/example/ecommerce-app-ui",
    },
    {
        id: 3,
        name: "Portfolio Website Design",
        image: "/path-to-portfolio-design-image.jpg",
        description: "Crafted a sleek portfolio design highlighting projects and personal branding.",
        tools: ["Figma"],
        figmaLink: "https://figma.com/example/portfolio-website-design",
    },
];

export default function DesignsContent() {
    return (
        <div className="h-full w-full rounded-lg overflow-y-auto">
            <h1 className="text-6xl font-bold text-white">Designs</h1>
            <h2 className="text-2xl font-light text-yellow-400 mt-4">
                Explore my UI/UX designs
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                {designs.map((design) => (
                    <Card 
                        key={design.id} 
                        className="bg-gray-900/50 border border-gray-800 text-white hover:border-gray-700 transition-all duration-300"
                    >
                        <CardHeader>
                            <div className="relative">
                                <img 
                                    src={design.image} 
                                    alt={design.name} 
                                    className="w-full h-40 object-cover rounded-t-lg"
                                />
                            </div>
                            <div className="mt-4">
                                <CardTitle className="text-xl font-bold tracking-tight">
                                    {design.name}
                                </CardTitle>
                            </div>
                        </CardHeader>
                        <CardContent>
                            <p className="text-gray-300 text-sm mb-4">
                                {design.description}
                            </p>
                            <div className="flex flex-wrap gap-2">
                                {design.tools.map((tool, index) => (
                                    <span 
                                        key={index} 
                                        className="bg-gray-800 text-gray-200 px-2 py-1 rounded text-xs"
                                    >
                                        {tool}
                                    </span>
                                ))}
                            </div>
                        </CardContent>
                        <CardFooter className="flex justify-end gap-2">
                            {design.figmaLink && (
                                <Button
                                    variant="ghost"
                                    size="sm"
                                    className="text-gray-300 hover:text-white hover:bg-gray-800"
                                    asChild
                                >
                                    <a 
                                        href={design.figmaLink} 
                                        target="_blank" 
                                        rel="noopener noreferrer"
                                        className="flex items-center gap-2"
                                    >
                                        <span>View on Figma</span>
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
