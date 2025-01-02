import React from "react";
import HomeContent from "./SectionContent/HomeContent";
import AboutContent from "./SectionContent/AboutContent";
import ProjectsContent from "./SectionContent/ProjectSection";
import CertificatesContent from "./SectionContent/CertificatesContent";
import ExperienceContent from "./SectionContent/ExperienceContent";
import ActivitiesContent from "./SectionContent/ActivitiesContent";
import DesignsContent from "./SectionContent/DesignContent";
import BlogContent from "./SectionContent/BlogContent";
import TechStacksContent from "./SectionContent/TechStackContent";
import CodingProfilesContent from "./SectionContent/CodingProfilesContent";
import ContactContent from "./SectionContent/ContactContent";

export default function MainContent({ isExpanded, activeSection }) {
    const renderSection = () => {
        switch (activeSection) {
            case "home":
                return <HomeContent PageTitle={"Home"} />;
            case "about":
                return <AboutContent PageTitle={"About"} />;
            case "projects":
                return <ProjectsContent PageTitle={"Projects"} />;
            case "certificates":
                return <CertificatesContent PageTitle={"Certificates"} />;
            case "experience":
                return <ExperienceContent PageTitle={"Experience"} />;
            case "activities":
                return <ActivitiesContent PageTitle={"Activities"} />;
            case "designs":
                return <DesignsContent PageTitle={"Designs"} />;
            case "blogs":
                return <BlogContent PageTitle={"Blogs"} />;
            case "tech-stacks":
                return <TechStacksContent PageTitle={"Tech Stacks"} />;
            case "coding-profiles":
                return <CodingProfilesContent PageTitle={"Coding Profiles"} />;
            case "contact":
                return <ContactContent PageTitle={"Contact"} />;
            default:
                return <HomeContent />;
        }
    };

    return (
        <div
            id="parent"
            className={`bg-foreground dark:bg-background mt-40 mb-20 ${isExpanded ? "ml-64 mr-64" : "ml-20 mr-60"}`}
        >
            <div id="child" className="overflow-y-auto">
                {renderSection()}
            </div>
        </div>
    );
}
