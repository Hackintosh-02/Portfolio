import React from "react";
import HomeContent from "./SectionContent/HomeContent";
import AboutContent from "./SectionContent/AboutContent";
import ProjectsContent from "./SectionContent/ProjectSection";

export default function MainContent({ activeSection }) {
    const renderSection = () => {
        switch (activeSection) {
            case "home":
                return <HomeContent />;
            case "about":
                return <AboutContent />;
            case "projects":
                return <ProjectsContent />;
            default:
                return <HomeContent />;
        }
    };

    return (
        <div className="fixed inset-0 flex items-center justify-center pointer-events-none z-50">
            <div className="max-w-4xl w-full p-8">
                <div className="backdrop-blur-md bg-white/10 p-8 rounded-2xl pointer-events-auto transition-opacity duration-500">
                    {renderSection()}
                </div>
            </div>
        </div>
    );
}
