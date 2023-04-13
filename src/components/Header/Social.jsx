import instagram from '../../assets/icon-instagram.svg'
import facebook from '../../assets/icon-facebook.svg'

function Social() {
    return (
        <div className="social">
            <a href="https://www.instagram.com" target="_blank">
                <img src={instagram} alt="instagram" width="28" height="28" />
            </a>
            <a href="https://www.facebook.com" target="_blank">
                <img src={facebook} alt="instagram" width="28" height="28" />
            </a>
        </div>
    )
}

export default Social