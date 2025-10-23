function NavLink({children, href}) {
    return (
        <a
            href={href}
            className="
        relative inline-block
        after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-full
        after:bg-current after:scale-x-0 after:origin-left
        after:transition-transform after:duration-300
        hover:after:scale-x-100
        hover:text-blue-400
        transition-colors duration-300
      "
        >
            {children}
        </a>
    );
}

export default NavLink;