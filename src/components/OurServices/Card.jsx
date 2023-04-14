function Card({ title, description, label, image }) {
    return (
        <div className="card flex flex-column justify-between" style={image ? {backgroundImage: `url(${image})`} : {}}>
            <h3>{title}</h3>
            <div>
                <p>{description}</p>
                <div className="bottom">  
                    {label.map((item, index) => (
                        <small key={index}>{item}</small>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Card
