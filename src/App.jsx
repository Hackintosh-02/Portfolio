import React, { useState, useEffect } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, PerspectiveCamera, Environment } from "@react-three/drei";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi"; // Arrow icons for toggle
import { Button } from "./components/ui/button";
import Scene from "./components/Scene";
import Navbar from "./components/Navbar";
import AppSidebar from "./components/AppSidebar";
import MainContent from "./components/MainContent";
import Footer from "./components/Footer";
import { SidebarProvider } from "./components/ui/sidebar";

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
            <main className="h-screen w-full bg-black relative overflow-hidden dark:bg-gray-900">
                {/* 3D Canvas */}
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

                {/* UI Layer */}
                <div className="relative z-10 flex">
                    {/* Sidebar */}
                    <AppSidebar isExpanded={isSidebarExpanded} />

                    {/* Sidebar Toggle Button */}
                    <Button
                        variant="default"
                        size="icon"
                        onClick={() => setIsSidebarExpanded(!isSidebarExpanded)}
                        className={`fixed top-4 ${
                            isSidebarExpanded ? "left-[246px]" : "left-[86px]"
                        } z-50 text-black dark:text-black hover:bg-white/20 hover:scale-105 transition-all duration-300`}
                    >
                        {isSidebarExpanded ? (
                            <FiChevronLeft className="h-6 w-6 transform transition-transform duration-300" />
                        ) : (
                            <FiChevronRight className="h-6 w-6 transform transition-transform duration-300" />
                        )}
                        <span className="sr-only">Toggle menu</span>
                    </Button>

                    <div className="flex-1">
                        <Navbar onToggleTheme={toggleTheme} isDarkMode={isDarkMode} />
                        <MainContent activeSection={activeSection} />
                        <Footer className="bottom-0" />
                    </div>
                </div>
            </main>
        </SidebarProvider>
    );
}
