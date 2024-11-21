import React, { useRef, useEffect } from "react";

function Navbar() {
    const navItems = ["Home", "About", "Visitor", "Search", "Profile"];
    const containerRef = useRef(null);

    // useEffect(() => {
    //     const handleMouseMove = (e) => {
    //         const items = containerRef.current.querySelectorAll(".magnetic-item");

    //         items.forEach((item) => {
    //             const rect = item.getBoundingClientRect();
    //             const itemCenterX = rect.left + rect.width / 2;
    //             const itemCenterY = rect.top + rect.height / 2;

    //             const distanceX = e.clientX - itemCenterX;
    //             const distanceY = e.clientY - itemCenterY;

    //             const distance = Math.sqrt(distanceX ** 2 + distanceY ** 2);

    //             const maxDistance = 150; // Define range for magnetic pull
    //             if (distance < maxDistance) {
    //                 const pullStrength = 1 - distance / maxDistance; // Calculate strength based on proximity
    //                 const offsetX = distanceX * pullStrength * 0.4; // Adjust multiplier for effect
    //                 const offsetY = distanceY * pullStrength * 0.4;

    //                 item.style.transform = `translate(${offsetX}px, ${offsetY}px)`;
    //             } else {
    //                 item.style.transform = ""; // Reset when out of range
    //             }
    //         });
    //     };

    //     document.addEventListener("mousemove", handleMouseMove);
    //     return () => document.removeEventListener("mousemove", handleMouseMove);
    // }, []);

    return (
        <div
            ref={containerRef}
            className="flex items-center justify-center gap-2 md:gap-10 text-white text-base md:text-xl fixed w-full z-50"
        >
            {navItems.map((item, index) => (
                <div
                    key={index}
                    className="relative magnetic-item group h-16 w-16 flex justify-center items-center transition-transform duration-300"
                >
                    {/* Circle background animation */}
                    <div className="absolute inset-0 bg-white rounded-full scale-0 transition-transform duration-1000 group-hover:scale-100 group-hover:opacity-10 hidden md:block"></div>

                    {/* Text with hover animation */}
                    <span className="relative z-10 transition-transform duration-1000 group-hover:scale-110 group-hover:-translate-y-1 w-full underline-hover">
                        {item}
                    </span>
                </div>
            ))}
        </div>
    );
}

export default Navbar;
