import PropTypes from "prop-types"

function Marquee({ text }) {
    return (
        <div className="marquee">
            <div className="track">
                <p className="content">{`${text} ${text}`}</p>
            </div>
        </div>
    )
}

export default Marquee

Marquee.propTypes = {
    text: PropTypes.string,
}
