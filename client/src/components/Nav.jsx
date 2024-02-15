import React from "react";
import { GiBookshelf } from "react-icons/gi";
import { IoLogoRss } from "react-icons/io";
import { FaPlus } from "react-icons/fa6";
import { IoMenu } from "react-icons/io5";

function Nav({ isSideNavOpen }) {
    return (
        <nav className={`${isSideNavOpen ? "transition-x-0" : "-translate-x-full"} md:min-w-[180px] md:w-1/5 md:translate-x-0 absolute left-0 top-0 md:static test md:flex transition-all`}>
            <div className="header justify-center items-center place-items-center content-center place-content-center grid grid-cols-[30px_1fr_30px] py-3 px-1">
                <div></div>
                <div className="title text-center text-md font-bold text-gray-500">
                    Book Buddy
                </div>
                <div>
                    <IoMenu size={24} />
                </div>
            </div>
            <div className="sections">
                <div className="library section">
                    <h4>Library</h4>
                    <ul>
                        <li>
                            <GiBookshelf />
                            <span>All Books</span>
                        </li>
                    </ul>
                </div>
                <div className="catalogs section">
                    <h4>Catalogs</h4>
                    <ul>
                        <li>
                            <IoLogoRss />
                            <span>Feedbooks</span>
                        </li>
                        <li>
                            <IoLogoRss />
                            <span>Internet Archive</span>
                        </li>
                        <li>
                            <IoLogoRss />
                            <span>ManyBooks</span>
                        </li>
                        <li>
                            <IoLogoRss />
                            <span>Open Library</span>
                        </li>
                        <li>
                            <IoLogoRss />
                            <span>Project Gutenberg</span>
                        </li>
                        <li>
                            <FaPlus />
                            <span>Add Catalog...</span>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Nav;
