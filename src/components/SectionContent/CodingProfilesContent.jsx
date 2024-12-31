import React from "react";
import { Card, CardHeader, CardContent, CardTitle, CardFooter } from "../ui/card";
import { Button } from "../ui/button";
import { FiExternalLink } from "react-icons/fi";

const codingProfiles = [
    {
        platform: "Codeforces",
        logo: "/path-to-codeforces-logo.png",
        username: "ashutosh_123",
        currentRating: 1800,
        maxRating: 1900,
        profileLink: "https://codeforces.com/profile/ashutosh_123",
    },
    {
        platform: "LeetCode",
        logo: "/path-to-leetcode-logo.png",
        username: "ashutosh_sharma",
        currentRating: "N/A",
        maxRating: "N/A",
        profileLink: "https://leetcode.com/ashutosh_sharma/",
    },
    {
        platform: "CodeChef",
        logo: "/path-to-codechef-logo.png",
        username: "ashutosh.cc",
        currentRating: 1500,
        maxRating: 1800,
        profileLink: "https://www.codechef.com/users/ashutosh.cc",
    },
    {
        platform: "AtCoder",
        logo: "/path-to-atcoder-logo.png",
        username: "ashu_atcoder",
        currentRating: 1200,
        maxRating: 1400,
        profileLink: "https://atcoder.jp/users/ashu_atcoder",
    },
];

export default function CodingProfileContent() {
    return (
        <div className="h-full w-full rounded-lg overflow-y-auto">
            <h1 className="text-6xl font-bold text-white">Coding Profiles</h1>
            <h2 className="text-2xl font-light text-yellow-400 mt-4">
                Explore my coding achievements
            </h2>

            <div className="mt-8 space-y-6">
                {codingProfiles.map((profile, index) => (
                    <Card
                        key={index}
                        className="flex items-center bg-gray-900/50 border border-gray-800 text-white hover:border-gray-700 transition-all duration-300"
                    >
                        {/* Logo */}
                        <div className="flex-shrink-0 p-4">
                            <img
                                src={profile.logo}
                                alt={profile.platform}
                                className="w-16 h-16 object-contain"
                            />
                        </div>

                        {/* Profile Content */}
                        <div className="flex flex-col flex-1 space-y-2 p-4">
                            <CardHeader className="p-0">
                                <CardTitle className="text-lg font-bold">{profile.platform}</CardTitle>
                            </CardHeader>
                            <CardContent className="text-gray-300">
                                <p>
                                    <span className="font-medium">Username:</span> {profile.username}
                                </p>
                                <p>
                                    <span className="font-medium">Current Rating:</span>{" "}
                                    {profile.currentRating}
                                </p>
                                <p>
                                    <span className="font-medium">Max Rating:</span> {profile.maxRating}
                                </p>
                            </CardContent>
                        </div>

                        {/* Profile Link */}
                        <CardFooter className="pr-4">
                            <Button
                                variant="ghost"
                                size="icon"
                                className="text-gray-300 hover:text-white hover:bg-gray-800 p-3 rounded-full"
                                asChild
                            >
                                <a
                                    href={profile.profileLink}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <FiExternalLink className="w-6 h-6" />
                                </a>
                            </Button>
                        </CardFooter>
                    </Card>
                ))}
            </div>
        </div>
    );
}
