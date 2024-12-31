import React from "react";
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from "../ui/card";
import { Button } from "../ui/button";

const blogs = [
    {
        id: 1,
        name: "The Evolution of Fitness Apps",
        image: "/path-to-fitness-blog-image.jpg",
        description: "Exploring how fitness apps have changed the way we work out, track progress, and maintain our health.",
        readMoreLink: "https://example.com/fitness-blog",
    },
    {
        id: 2,
        name: "Designing for E-Commerce Success",
        image: "/path-to-ecommerce-blog-image.jpg",
        description: "A deep dive into crafting intuitive e-commerce interfaces that drive user engagement and sales.",
        readMoreLink: "https://example.com/ecommerce-blog",
    },
    {
        id: 3,
        name: "Crafting the Perfect Portfolio Website",
        image: "/path-to-portfolio-blog-image.jpg",
        description: "Tips and tricks for creating a professional portfolio website that showcases your skills and projects.",
        readMoreLink: "https://example.com/portfolio-blog",
    },
];

export default function BlogContent() {
    return (
        <div className="h-full w-full rounded-lg overflow-y-auto">
            <h1 className="text-6xl font-bold text-white">Blogs</h1>
            <h2 className="text-2xl font-light text-yellow-400 mt-4">
                Explore my writings and insights
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                {blogs.map((blog) => (
                    <Card 
                        key={blog.id} 
                        className="bg-gray-900/50 border border-gray-800 text-white hover:border-gray-700 transition-all duration-300"
                    >
                        <CardHeader>
                            <div className="relative">
                                <img 
                                    src={blog.image} 
                                    alt={blog.name} 
                                    className="w-full h-40 object-cover rounded-t-lg"
                                />
                            </div>
                            <div className="mt-4">
                                <CardTitle className="text-xl font-bold tracking-tight">
                                    {blog.name}
                                </CardTitle>
                            </div>
                        </CardHeader>
                        <CardContent>
                            <p className="text-gray-300 text-sm mb-4">
                                {blog.description}
                            </p>
                        </CardContent>
                        <CardFooter className="flex justify-end gap-2">
                            {blog.readMoreLink && (
                                <Button
                                    variant="ghost"
                                    size="sm"
                                    className="text-gray-300 hover:text-white hover:bg-gray-800"
                                    asChild
                                >
                                    <a 
                                        href={blog.readMoreLink} 
                                        target="_blank" 
                                        rel="noopener noreferrer"
                                        className="flex items-center gap-2"
                                    >
                                        <span>Read More</span>
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
