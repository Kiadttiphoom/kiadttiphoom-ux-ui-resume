"use client";

import { useEffect, useState } from "react";

export function ParticleBackground() {
    const [smallStars, setSmallStars] = useState("");
    const [mediumStars, setMediumStars] = useState("");
    const [largeStars, setLargeStars] = useState("");

    useEffect(() => {
        // Generate stars only after mount (client-side) to avoid hydration mismatch
        setSmallStars(generateBoxShadow(700));
        setMediumStars(generateBoxShadow(200));
        setLargeStars(generateBoxShadow(100));
    }, []);

    return (
        <div className="fixed inset-0 z-[-1] bg-[#050505] overflow-hidden pointer-events-none">
            <div
                className="absolute w-[1px] h-[1px] bg-white rounded-full animate-star-move-slow"
                style={{ boxShadow: smallStars }}
            />
            <div
                className="absolute w-[2px] h-[2px] bg-white rounded-full animate-star-move-medium"
                style={{ boxShadow: mediumStars }}
            />
            <div
                className="absolute w-[3px] h-[3px] bg-white rounded-full animate-star-move-fast"
                style={{ boxShadow: largeStars }}
            />
        </div>
    );
}

// Function to generate random box-shadow coordinate string
function generateBoxShadow(n: number) {
    let value = "";
    for (let i = 0; i < n; i++) {
        const x = Math.floor(Math.random() * 2000);
        const y = Math.floor(Math.random() * 2000);
        value += `${x}px ${y}px #FFF` + (i < n - 1 ? ", " : "");
    }
    return value;
}
