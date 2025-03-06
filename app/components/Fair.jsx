'use client'
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import * as d3 from "d3";
import { fairData } from "./Roundaboutdata";


export default function FairMap() {
    const [search, setSearch] = useState("");
    const [shops, setShops] = useState([]);
    const [dimensions, setDimensions] = useState({ width: 400, height: 400 });

    const selectedRoundabout = fairData.find((r) =>
        r.roundaboutName.toLowerCase().includes(search.toLowerCase())
    );

    useEffect(() => {
        const updateDimensions = () => {
            const width = window.innerWidth < 500 ? 300 : 400;
            setDimensions({ width, height: width });
        };

        updateDimensions();
        window.addEventListener("resize", updateDimensions);
        return () => window.removeEventListener("resize", updateDimensions);
    }, []);

    useEffect(() => {
        if (!selectedRoundabout) return;

        const radius = dimensions.width / 2;
        const centerX = dimensions.width / 2;
        const centerY = dimensions.height / 2;

        const shopList = selectedRoundabout.paths.flatMap((path) =>
            path.shops.map((shop) => ({ name: shop, path: path.id }))
        );

        const angleScale = d3
            .scalePoint()
            .domain(shopList.map((_, i) => i))
            .range([0, 2 * Math.PI]);

        const newPositions = shopList.map((shop, i) => {
            const angle = angleScale(i) - Math.PI / 2;
            return {
                ...shop,
                x: centerX + radius * Math.cos(angle) - 40,
                y: centerY + radius * Math.sin(angle) - 40,
            };
        });

        setShops(newPositions);
    }, [selectedRoundabout, dimensions]);

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-black p-6">
            {/* Search Bar */}
            <input
                type="text"
                placeholder="Search roundabout..."
                className="w-3/4 md:w-1/2 p-3 mb-[25vh] border text-black border-gray-400 rounded-lg shadow-sm"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
            />

            {/* Display Only the Searched Roundabout */}
            {selectedRoundabout ? (
                <motion.div
                    className="relative flex items-center justify-center border border-gray-400 border-4 rounded-full bg-black p-2 shadow-xl"
                    style={{ width: dimensions.width, height: dimensions.height }}
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.6 }}
                >
                    {/* Roundabout Name */}
                    <motion.div
                        className="absolute bg-black text-white border-4 border-gray-400 px-5 py-3 rounded-full text-lg font-semibold shadow-md"
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 }}
                    >
                        {selectedRoundabout.roundaboutName}
                    </motion.div>

                    {/* Shops (Dynamically Positioned in Circular Layout) */}
                    {shops.map((shop, i) => (
                        <motion.div
                            key={i}
                            className="absolute w-20 h-20 bg-black border-4 border-gray-300 text-white flex items-center justify-center text-xs text-center font-semibold rounded-xl shadow-lg p-2"
                            style={{ left: `${shop.x}px`, top: `${shop.y}px` }}
                            initial={{ scale: 0, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            transition={{ duration: 0.5, delay: i * 0.1 }}
                        >
                            {shop.name}
                        </motion.div>
                    ))}
                </motion.div>
            ) : (
                <p className="text-gray-400 text-lg">No roundabout found</p>
            )}
        </div>
    );
}
