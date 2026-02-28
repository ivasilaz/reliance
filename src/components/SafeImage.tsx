"use client";

import { useState } from 'react';

interface SafeImageProps {
    src: string;
    alt: string;
    className?: string;
    fallbackText?: string;
    aspectRatio?: string;
}

export default function SafeImage({
    src,
    alt,
    className = "",
    fallbackText = "Image Placeholder",
    aspectRatio = "aspect-video"
}: SafeImageProps) {
    const [error, setError] = useState(false);

    if (error) {
        return (
            <div className={`w-full h-full flex items-center justify-center bg-slate-100 ${aspectRatio} rounded-inherit`}>
                <p className="text-slate-400 font-bold uppercase tracking-widest text-xs px-4 text-center">
                    {fallbackText}
                </p>
            </div>
        );
    }

    return (
        <img
            src={src}
            alt={alt}
            className={`${className} transition-opacity duration-300`}
            onError={() => setError(true)}
        />
    );
}
