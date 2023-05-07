import logo from "../../assets/logo.svg"

function Logo() {
    return (
        <div className="logo">
            <a href="/" className="flex align-center">
                <img
                    src={logo}
                    className="logo"
                    alt="Lorem logo"
                    loading="lazy"
                />
                Lorem ipsum
            </a>
        </div>
    )
}

export default Logo
