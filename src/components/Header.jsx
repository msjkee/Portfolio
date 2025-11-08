import NavLink from "./NavLink";
import { useEffect, useState} from "react";

function Header() {

    // Change nav color when scrolling
    const [color, setColor] = useState(false);
    const changeColor = () => {
        if (window.scrollY >= 20) {
            setColor(true);
        } else {
            setColor(false);
        }
    }

    window.addEventListener('scroll', changeColor);

    return (
        <header className={`text-white p-6 w-full fixed left-0 top-0 z-50 font-bold ${color ? "bg-black shadow-md border-b z-[61] border-white opacity-75" : "bg-[radial-gradient(circle_at_25%_25%,#1e293b,#0a0a0a_70%)] bg-no-repeat bg-fixed"}`}>
            <div className="max-w-screen-xl mx-auto flex justify-between items-center">
                <div className="left">
                    <nav>
                        <ul className={"flex gap-8 items-center"}>
                            <li><NavLink href={"#"}>Home</NavLink></li>
                            <li><NavLink href={"#"}>About Me</NavLink></li>
                            <li><NavLink href={"#"}>Education</NavLink></li>
                            <li><NavLink href={"#"}>Experience</NavLink></li>
                        </ul>
                    </nav>
                </div>
                <div className="right">
                    <button>Contact Me</button>
                </div>
            </div>
        </header>
    )
}

export default Header;