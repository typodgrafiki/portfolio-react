import instagram from "../../assets/icon-instagram.svg"
import facebook from "../../assets/icon-facebook.svg"

function Social() {
    return (
        <div className="social">
            <a
                href="https://www.instagram.com"
                target="_blank"
                rel="noopener noreferrer"
            >
                <img
                    src={instagram}
                    alt="instagram"
                    width="28"
                    height="28"
                    loading="lazy"
                />
            </a>
            <a
                href="https://www.facebook.com"
                target="_blank"
                rel="noopener noreferrer"
            >
                <img
                    src={facebook}
                    alt="instagram"
                    width="28"
                    height="28"
                    loading="lazy"
                />
            </a>
        </div>
    )
}

export default Social
