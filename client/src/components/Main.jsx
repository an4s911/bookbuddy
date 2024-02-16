import React, { useState } from "react";
import { PiSidebarSimpleBold, PiPlusBold, PiMagnifyingGlassBold, PiDotsThreeOutlineVerticalFill, PiInfoBold } from "react-icons/pi";

function Main({ setIsSideNavOpen }) {
    const [isInfoOpen, setIsInfoOpen] = useState(false);

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
                <div className="text-lg font-bold">
                    Library
                </div>
                <div className="right-icons relative">
                    <PiMagnifyingGlassBold className="icon" />
                    <PiDotsThreeOutlineVerticalFill onClick={() => setIsInfoOpen(!isInfoOpen)} className="icon" />
                    <div className={`absolute top-[140%] -right-3 overflow-clip ${isInfoOpen ? "max-h-96" : "max-h-0"}`} style={{ transition: "max-height 0.2s ease-in-out" }}>
                        <div className="relative min-w-20 bg-white border-gray-400 ml-6 mr-3 mb-8 top-3 border-[1px] rounded-md p-2" style={{ boxShadow: "-3px 3px 15px -1px rgba(0, 0, 0, 0.3)" }}>
                            <div className="h-6 absolute w-full overflow-clip top-0 -translate-y-full flex items-start">
                                <div className="h-5 w-5 rotate-45 bg-white border-gray-400 border-[1px] rounded-b-md rounded-r-md absolute right-4 -bottom-1/2"></div>
                            </div>
                            <ul className="">
                                <li className="clickable text-lg select-none px-3 py-1 flex items-center gap-2">
                                    <PiInfoBold />
                                    Info
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Main;
