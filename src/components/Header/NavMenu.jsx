import './_navMenu.scss'

function NavMenu() {
    return (
        <ul className="navMenu ulHoverEffect">
            <li><a href="/">Home</a></li>
            <li><a href="#services">Our services</a></li>
            <li><a href="#us">About Us</a></li>
            <li><a href="#portfolio">Portfolio</a></li>
            <li><a href="#reviews">Reviews</a></li>         
        </ul>
    )
}

export default NavMenu