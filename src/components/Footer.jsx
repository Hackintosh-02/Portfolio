import React from "react";

export default function Footer() {
    return (
        <footer className="fixed bottom-0 left-1/2 transform -translate-x-1/2 w-1/2 bg-foreground dark:bg-card backdrop-blur-md p-4 rounded-t-lg shadow-lg flex justify-between items-center">
            {/* Credit for the Model */}
            <span className="text-base text-secondary">
                3D Model Credit:{" "}
                <a
                    href="https://example.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-background hover:underline dark:text-primary"
                >
                    Author Name
                </a>
            </span>

            {/* Made by Hackintosh */}
            <span className="text-base font-bold text-card dark:text-foreground">
                Made by Hackintosh
            </span>

            {/* Contact Button */}
            <button
                className="px-4 py-2 bg-primary text-primary-foreground rounded-md font-medium hover:bg-accent transition"
                onClick={() => window.alert("Contact functionality coming soon!")}
            >
                Contact
            </button>
        </footer>
    );
}
