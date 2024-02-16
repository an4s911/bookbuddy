import React from "react";
import { PiMagnifyingGlassBold } from "react-icons/pi";

function SearchBar({ isSearchOpen, searchInputRef }) {
    return (
        <div className="relative">
            <div className={`w-full flex justify-center overflow-clip ${isSearchOpen ? "max-h-96" : "max-h-0"}`} style={{ transition: "max-height 0.2s linear" }}>
                <div className={`m-2 relative ${isSearchOpen ? "translate-y-0" : "-translate-y-full"}`} style={{ transition: "transform 0.3s linear" }}>
                    <PiMagnifyingGlassBold className="absolute z-10 top-1/2 -translate-y-1/2 left-1" size={20} />
                    <input ref={searchInputRef} placeholder="Search Library..." className={`w-52 rounded-md bg-gray-200 h-9 pl-7`} />
                </div>
            </div>
        </div>
    )
}

export default SearchBar;
