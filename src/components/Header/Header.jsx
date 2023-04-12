import logo from '../../assets/logo.svg'
import './header.scss'

function Header() {
    return (
        <div className="header flex justify-between">
            <div className="top flex justify-between">
                <div className="logo flex align-center">
                    <img src={logo} className="logo" alt="Lorem logo" />    
                    Lorem ipsum
                </div>
                <div className="menu">
                    Menu hamburger
                </div>
            </div>
            <div className="content flex">
                <div className="left">
                    <h1>We create Awesome CODE / FUNCTIONS / DEVELOPMENT / NFT</h1>    
                    <p>
                        <span>Latest blog from</span>
                        <span>2023/04/10</span>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi veniam, nostrum voluptatibus reprehenderit cupiditate, animi porro autem exercitationem quos, et ipsum aliquam nulla provident at odit sint totam error voluptas!
                    </p>
                </div>
                <div className="right">
                    <nav>
                        <ul>
                            <li>Home</li>
                            <li>Our services</li>
                            <li>About Us</li>
                            <li>Portfolio</li>
                            <li>Reviews</li>
                            <li>Contact Us</li>
                        </ul>
                    </nav>
                    <div className="video">
                        <button>btn</button>
                        <video>video</video>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header