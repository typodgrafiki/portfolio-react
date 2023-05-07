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
