import NavLink from "./NavLink";

function Header() {
    return (
        <header className={"bg-black text-white p-6"}>
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