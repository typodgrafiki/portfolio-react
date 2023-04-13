import './_ourServices.scss'

function OurServices({ marquee }) {
    return (
        <>  
            <div class="marquee">
                <div class="track">
                    <p class="content">{`${marquee} ${marquee}`}</p>
                </div>
            </div>
            
            <div className="section">
                <h2 className="title">Our Services</h2>
                <p className="subtitle">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Neque repellendus facere amet, ea sapiente dolores id voluptatum sunt officia corrupti quidem quibusdam quisquam molestias! Ea nobis enim iste accusantium illo.
                </p>
            </div>
        </>
    )
}

export default OurServices