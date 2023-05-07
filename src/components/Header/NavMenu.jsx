import "./_navMenu.scss"

function NavMenu({ closeMenuFn }) {
    return (
        <ul className="navMenu ulHoverEffect">
            <li>
                <a href="/" onClick={closeMenuFn}>
                    Home
                </a>
            </li>
            <li>
                <a href="#services" onClick={closeMenuFn}>
                    Our services
                </a>
            </li>
            <li>
                <a href="#us" onClick={closeMenuFn}>
                    About Us
                </a>
            </li>
            <li>
                <a href="#portfolio" onClick={closeMenuFn}>
                    Portfolio
                </a>
            </li>
            <li>
                <a href="#reviews" onClick={closeMenuFn}>
                    Reviews
                </a>
            </li>
        </ul>
    )
}

export default NavMenu
