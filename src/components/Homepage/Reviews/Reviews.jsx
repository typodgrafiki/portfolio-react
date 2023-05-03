import ReviewsSlider from './ReviewSlider';
import './_reviews.scss'

const Reviews = () => {
    return (
        <div id="reviews" className="reviews">
            <div className="section">
                <div className="flex width100 gap20">
                    <div className="left-title">
                        <h2 className="title">Reviews</h2>
                        <p className="subtitle">
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Neque repellendus facere amet, ea sapiente dolores id voluptatum.
                        </p>        
                    </div>
                    <ReviewsSlider />
                </div>
            </div>
        </div>
    );
};

export default Reviews