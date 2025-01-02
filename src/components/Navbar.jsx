import React from "react";
import { Button } from "./ui/button";
import { FiSun, FiMoon } from "react-icons/fi";
import ResumeModal from "./ResumeModal";

export default function Navbar({ onToggleTheme, isDarkMode }) {
    return (
        <nav className="fixed top-0 right-0 flex justify-end items-center p-4 z-50 bg-transparent">
            <ul className="flex flex-row justify-between items-center gap-4">
                <li>
                    <ResumeModal 
                        resumeUrl="/src/assets/resume/Ashutosh_Dev_resume.pdf"
                        driveUrl="https://drive.google.com/your-resume-link"
                    />
                </li>
                <li>
                    <Button
                        variant="ghost"
                        className="text-lg font-bold text-card dark:text-white hover:bg-muted dark:hover:bg-muted hover:scale-105 transition-transform duration-200"
                    >
                        Projects
                    </Button>
                </li>
                <li>
                    <Button
                        variant="ghost"
                        className="text-lg font-bold text-card dark:text-white hover:bg-muted dark:hover:bg-muted hover:scale-105 transition-transform duration-200"
                    >
                        About
                    </Button>
                </li>
                <li>
                    <button
                        className="text-lg p-2 rounded-full 
                        text-card hover:text-primary 
                        dark:text-white hover:bg-muted dark:hover:bg-muted 
                        transition-transform duration-200"
                        onClick={onToggleTheme}
                    >
                        {isDarkMode ? (
                            <FiSun size={20} className="text-primary dark:text-primary" />
                        ) : (
                            <FiMoon size={20} className="" />
                        )}
                    </button>
                </li>
            </ul>
        </nav>
    );
}
