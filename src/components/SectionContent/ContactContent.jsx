import React from "react";
import { Card, CardHeader, CardTitle, CardContent } from "../ui/card";
import { Button } from "../ui/button";
import { FiPhone, FiMail, FiMapPin, FiLinkedin, FiGithub, FiTwitter, FiArrowRight, FiCopy } from "react-icons/fi";

export default function ContactContent() {
    const contactInfo = {
        phone: "+91 9876543210",
        email: "example@gmail.com",
        address: "123, Some Street, City, Country",
        socialLinks: [
            {
                platform: "LinkedIn",
                icon: <FiLinkedin />,
                link: "https://linkedin.com/in/example",
            },
            {
                platform: "GitHub",
                icon: <FiGithub />,
                link: "https://github.com/example",
            },
            {
                platform: "Twitter",
                icon: <FiTwitter />,
                link: "https://twitter.com/example",
            },
        ],
    };

    const handleCopy = (text) => {
        navigator.clipboard.writeText(text);
        // alert(`Copied to clipboard: ${text}`);
    };

    return (
        <div className="h-full w-full rounded-lg overflow-y-auto">
            <h1 className="text-6xl font-bold text-white">Contact Me</h1>
            <h2 className="text-2xl font-light text-yellow-400 mt-4">
                Get in touch for collaborations or queries
            </h2>

            <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Contact Details */}
                <Card className="bg-gray-900/50 border border-gray-800 text-white">
                    <CardHeader>
                        <CardTitle className="text-xl font-bold">Contact Details</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4 text-gray-300">
                        <div className="flex items-center justify-between">
                            <div className="flex items-center gap-4">
                                <FiPhone className="text-yellow-400 text-2xl" />
                                <span>{contactInfo.phone}</span>
                            </div>
                            <Button
                                variant="ghost"
                                size="sm"
                                className="text-gray-300 hover:text-white hover:bg-gray-800"
                                onClick={() => handleCopy(contactInfo.phone)}
                            >
                                <FiCopy />
                            </Button>
                        </div>
                        <div className="flex items-center justify-between">
                            <div className="flex items-center gap-4">
                                <FiMail className="text-yellow-400 text-2xl" />
                                <span>{contactInfo.email}</span>
                            </div>
                            <Button
                                variant="ghost"
                                size="sm"
                                className="text-gray-300 hover:text-white hover:bg-gray-800"
                                onClick={() => handleCopy(contactInfo.email)}
                            >
                                <FiCopy />
                            </Button>
                        </div>
                        <div className="flex items-center justify-between">
                            <div className="flex items-center gap-4">
                                <FiMapPin className="text-yellow-400 text-2xl" />
                                <span>{contactInfo.address}</span>
                            </div>
                            <Button
                                variant="ghost"
                                size="sm"
                                className="text-gray-300 hover:text-white hover:bg-gray-800"
                                onClick={() => handleCopy(contactInfo.address)}
                            >
                                <FiCopy />
                            </Button>
                        </div>
                    </CardContent>
                </Card>

                {/* Social Links */}
                <Card className="bg-gray-900/50 border border-gray-800 text-white">
                    <CardHeader>
                        <CardTitle className="text-xl font-bold">Social Links</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                        {contactInfo.socialLinks.map((social, index) => (
                            <div key={index} className="flex items-center justify-between">
                                <div className="flex items-center gap-4 text-gray-300">
                                    <span className="text-yellow-400 text-2xl">{social.icon}</span>
                                    <span>{social.platform}</span>
                                </div>
                                <Button
                                    variant="ghost"
                                    size="sm"
                                    className="text-gray-300 hover:text-white hover:bg-gray-800"
                                    asChild
                                >
                                    <a
                                        href={social.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center gap-2"
                                    >
                                        <FiArrowRight className="text-yellow-400 text-2xl" />
                                    </a>
                                </Button>
                            </div>
                        ))}
                    </CardContent>
                </Card>
            </div>
        </div>
    );
}
