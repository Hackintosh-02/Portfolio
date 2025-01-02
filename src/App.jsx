import React, { useState, useEffect } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, PerspectiveCamera, Environment } from "@react-three/drei";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { Button } from "./components/ui/button";
import Scene from "./components/Scene";
import Navbar from "./components/Navbar";
import AppSidebar from "./components/AppSidebar";
import MainContent from "./components/MainContent";
import Footer from "./components/Footer";
import { SidebarProvider } from "./components/ui/sidebar";
import { ScrollArea } from "./components/ui/scroll-area";


export default function App() {
    const [isSidebarExpanded, setIsSidebarExpanded] = useState(false);
    const [activeSection, setActiveSection] = useState("home");
    const [isDarkMode, setIsDarkMode] = useState(false);

    useEffect(() => {
        const storedTheme = localStorage.getItem("theme");
        if (storedTheme) {
            setIsDarkMode(storedTheme === "dark");
            document.documentElement.classList.toggle("dark", storedTheme === "dark");
        }
    }, []);

    const toggleTheme = () => {
        const newTheme = isDarkMode ? "light" : "dark";
        setIsDarkMode(!isDarkMode);
        localStorage.setItem("theme", newTheme);
        document.documentElement.classList.toggle("dark", newTheme === "dark");
    };

    return (
        <SidebarProvider>
            <main className="h-screen w-full dark:bg-background bg-foreground text-card relative overflow-hidden dark:text-white">
                {/* 3D Canvas */}
                {activeSection === "home" && (
                    <Canvas className="fixed inset-0 z-0">
                        <PerspectiveCamera makeDefault position={[0, 2, 5]} />
                        <Scene activeSection={activeSection} isDarkMode={isDarkMode} />
                        <OrbitControls
                            enableZoom={false}
                            enablePan={false}
                            maxPolarAngle={Math.PI / 2}
                            minPolarAngle={Math.PI / 3}
                        />
                        <Environment preset={isDarkMode ? "night" : "sunset"} />
                    </Canvas>
                )}

                {/* UI Layer */}
                <div className="relative z-10 flex h-full overflow-hidde dark:bg-background">
                    {/* Sidebar */}
                    <AppSidebar
                        isExpanded={isSidebarExpanded}
                        activeSection={activeSection}
                        onSectionSelect={setActiveSection}
                    />

                    {/* Sidebar Toggle Button */}
                    <Button
                        variant="default"
                        size="icon"
                        onClick={() => setIsSidebarExpanded(!isSidebarExpanded)}
                        className={`fixed top-4 ${isSidebarExpanded ? "left-[246px]" : "left-[86px]"
                            } z-50 text-card dark:text-card hover:bg-primary transition-all duration-300`}
                    >
                        {isSidebarExpanded ? (
                            <FiChevronLeft className="h-6 w-6 transform transition-transform duration-300" />
                        ) : (
                            <FiChevronRight className="h-6 w-6 transform transition-transform duration-300" />
                        )}
                        <span className="sr-only">Toggle menu</span>
                    </Button>

                    {/* Main Content */}
                    <ScrollArea className="w-full bg-foreground text-card overflow-hidden dark:bg-background dark:text-white">
                        <div
                            className="transition-all duration-300 flex-1 overflow-y-auto h-full"
                        >
                            <Navbar onToggleTheme={toggleTheme} isDarkMode={isDarkMode} />
                            <MainContent
                                className="bg-background text-foreground"
                                isExpanded={isSidebarExpanded}
                                activeSection={activeSection}
                                isDarkMode={isDarkMode}
                            />
                            {activeSection === "home" && <Footer className="bottom-0" />}
                        </div>
                    </ScrollArea>
                </div>

            </main>
        </SidebarProvider>
    );
}
