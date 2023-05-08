import PropTypes from "prop-types"
function AboutUsBox({ title, description }) {
    return (
        <div className="card">
            <p className="big">{title}</p>
            <p className="description">{description}</p>
        </div>
    )
}

export default AboutUsBox

AboutUsBox.propTypes = {
    title: PropTypes.string,
    description: PropTypes.string,
}
