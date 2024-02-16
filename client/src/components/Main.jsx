import React, { useEffect, useRef, useState } from "react";
import { PiSidebarSimpleBold, PiPlusBold, PiMagnifyingGlassBold, PiDotsThreeOutlineVerticalFill} from "react-icons/pi";
import InfoMenu from "./InfoMenu";
import SearchBar from "./SearchBar";


function Main({ setIsSideNavOpen }) {
    const [isInfoOpen, setIsInfoOpen] = useState(false);
    const [isSearchOpen, setIsSearchOpen] = useState(false);
    const searchInputRef = useRef(null);

    useEffect(() => {
        if (isSearchOpen) {
            searchInputRef.current.focus();
        }
    }, [isSearchOpen]);

    return (
        <div className="w-full">
            <div class="p-4 flex justify-between w-full items-center">
                <div className="left-icons">
                    <PiSidebarSimpleBold
                        className="icon md:hidden"
                        onClick={() => setIsSideNavOpen(true)}
                    />
                    <PiPlusBold
                        className="icon"
                    />
                </div>
                <div className="text-lg font-bold md:translate-x-6">
                    Library
                </div>
                <div className="right-icons relative">
                    <PiMagnifyingGlassBold className="icon" onClick={() => setIsSearchOpen(!isSearchOpen)} />
                    <PiDotsThreeOutlineVerticalFill onClick={() => setIsInfoOpen(!isInfoOpen)} className="icon" />
                    <InfoMenu isInfoOpen={isInfoOpen} />
                </div>
            </div>
            <SearchBar isSearchOpen={isSearchOpen} searchInputRef={searchInputRef} />
        </div>
    );
}

export default Main;
