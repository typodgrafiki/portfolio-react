import MenuLayer from './MenuLayer'
import logo from '../../assets/logo.svg'
import Slogan from './Slogan'
import Video from './Video'
import './_header.scss'

function Header() {
    return (
        <div id="top" className="header flex justify-between">
            <div className="top flex justify-between">
                <div className="logo flex align-center">
                    <a href="#top">
                        <img src={logo} className="logo" alt="Lorem logo" />    
                        Lorem ipsum
                    </a>
                </div>
                <MenuLayer />
            </div>
            <div className="content flex">
                <div className="left">
                    <Slogan />
                    <p>
                        <span className="white-btn">Latest blog from</span>
                        <span className="date">2023/04/10</span>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi veniam, nostrum voluptatibus reprehenderit cupiditate, animi porro autem exercitationem quos, et ipsum aliquam nulla provident at odit sint totam error voluptas!
                    </p>
                </div>
                <div className="right">
                    <nav>
                        <ul>
                            <li><a href="#top">Home</a></li>
                            <li><a href="#services">Our services</a></li>
                            <li><a href="#us">About Us</a></li>
                            <li><a href="#portfolio">Portfolio</a></li>
                            <li><a href="#reviews">Reviews</a></li>
                            <li><a href="#contact">Contact Us</a></li>
                        </ul>
                    </nav>
                    <Video />
                </div>
            </div>
        </div>
    )
}

export default Header