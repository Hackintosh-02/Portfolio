import React from "react";

export default function Footer() {
    return (
        <footer className="fixed bottom-0 left-1/2 transform -translate-x-1/2 w-1/2 bg-white/10 dark:bg-gray-800/20 backdrop-blur-md p-4 rounded-t-lg shadow-lg flex justify-between items-center">
            {/* Credit for the Model */}
            <span className="text-sm text-gray-600 dark:text-gray-400">
                3D Model Credit: <a href="https://example.com" target="_blank" rel="noopener noreferrer" className="text-yellow-400 hover:underline">Author Name</a>
            </span>

            {/* Made by Hackintosh */}
            <span className="text-lg font-bold text-white">Made by Hackintosh</span>

            {/* Contact Button */}
            <button
                className="px-4 py-2 bg-yellow-400 text-black rounded-md font-medium hover:bg-yellow-500 transition"
                onClick={() => window.alert("Contact functionality coming soon!")}
            >
                Contact
            </button>
        </footer>
    );
}
