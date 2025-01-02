
import React from "react";
import * as Dialog from "@radix-ui/react-dialog";
import { Cross2Icon, DownloadIcon } from "@radix-ui/react-icons";
import { FiLink } from "react-icons/fi";
import { Button } from "./ui/button";
export default function ResumeModal({ resumeUrl,driveUrl }) {
    return (
        <Dialog.Root>
            {/* Trigger Button */}
            <Dialog.Trigger asChild>
                <Button
                    variant="default"
                    className="text-lg font-bold hover:scale-105 transition-transform duration-200"
                >
                    Resume
                </Button>
            </Dialog.Trigger>

            {/* Modal Content */}
            <Dialog.Portal>
                {/* Overlay */}
                <Dialog.Overlay className="fixed inset-0 bg-black/50 backdrop-blur-md z-40" />

                {/* Content */}
                <Dialog.Content
                    className="fixed top-1/2 left-1/2 w-[50vw] max-w-5xl h-[90vh] transform -translate-x-1/2 -translate-y-1/2 bg-white dark:bg-gray-900 rounded-lg shadow-lg z-50 overflow-visible"
                    aria-describedby="resume-description"
                >
                    {/* Accessible Description */}
                    <p id="resume-description" className="sr-only">
                        Resume preview and download.
                    </p>

                    {/* PDF Viewer */}
                    <iframe
                        src={resumeUrl}
                        title="Resume"
                        className="w-full h-full border-none"
                    ></iframe>

                    {/* Close Button */}
                    <Dialog.Close asChild>
                        <button
                            aria-label="Close"
                            className="absolute top-4 -right-16 w-10 h-10 flex items-center justify-center rounded-full bg-foreground dark:bg-background text-card dark:text-primary shadow-lg z-50"
                        >
                            <Cross2Icon />
                        </button>
                    </Dialog.Close>

                    {/* Download Button */}
                    <a
                        href={resumeUrl}
                        download
                        aria-label="Download"
                        className="absolute top-16 -right-16 w-10 h-10 flex items-center justify-center rounded-full bg-primary text-card hover:bg-primary shadow-lg z-50"
                    >
                        <DownloadIcon />
                    </a>
                    {/* Google Drive Link Button */}
                    <a
                        href={driveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Open in Google Drive"
                        className="absolute top-28 -right-16 w-10 h-10 flex items-center justify-center rounded-full bg-primary text-card hover:bg-primary shadow-lg z-50"
                    >
                        <FiLink />
                    </a>
                </Dialog.Content>
            </Dialog.Portal>
        </Dialog.Root>
    );
}