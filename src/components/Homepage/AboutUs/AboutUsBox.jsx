function AboutUsBox({ title, description, img }) { 
    return (
        <div className="card">
            <p className="big">{title}</p>
            <p className="description">{description}</p>
        </div>
    )
}

export default AboutUsBox