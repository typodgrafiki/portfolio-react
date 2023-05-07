import MenuLayer from "./MenuLayer"
import Logo from "./Logo"
import Slogan from "./Slogan"
import NavMenu from "./NavMenu"
import Video from "./Video"
import "./_header.scss"

function Header() {
    return (
        <div id="start">
            <div id="top" className="header flex justify-between">
                <div className="top flex justify-between">
                    <Logo />
                    <MenuLayer />
                </div>
                <div className="content flex-sm">
                    <div className="left">
                        <Slogan />
                        <p>
                            <span className="white-btn">Latest blog from</span>
                            <span className="date">2023/04/10</span>
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Commodi veniam, nostrum voluptatibus
                            reprehenderit cupiditate, animi porro autem
                            exercitationem quos, et ipsum aliquam nulla
                            provident at odit sint totam error voluptas!
                        </p>
                    </div>
                    <div className="right">
                        <nav className="hidden-xs">
                            <NavMenu />
                        </nav>
                        <Video />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header
