import React from "react";

export default function HomeContent(PageTitle) {
    return (
        <div className="fixed inset-0 flex items-center justify-center pointer-events-none z-50">
            <div className="max-w-4xl w-full p-8">
                <div className="backdrop-blur-md bg-white/10 p-8 rounded-2xl pointer-events-auto transition-opacity duration-500">
                    <span className="text-5xl">Ashutosh Sharma</span>
                </div>
            </div>
        </div>
    );
}
