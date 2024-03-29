import React from "react";
import Nav from "./Nav";
import Main from "./Main";
import { useState } from "react";

function App() {
    const [isSideNavOpen, setIsSideNavOpen] = useState(false);

    return (
        <div className="flex">
            <div
                className={`bg-black md:hidden opacity-10 absolute w-full h-full z-0 ${isSideNavOpen ? "block" : "hidden"}`}
                onClick={() => {
                    setIsSideNavOpen(false);
                }}
            ></div>
            <Nav isSideNavOpen={isSideNavOpen} />
            <Main setIsSideNavOpen={setIsSideNavOpen} />
        </div>
    );
}

export default App;
