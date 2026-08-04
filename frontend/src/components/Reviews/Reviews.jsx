import "./Reviews.css"
import square from "../../assets/square.jpg"

/* Reviews.jsx is the reviews content block at the bottom of Home.jsx. StarRating receives a prop, the loop figures out how many full
and half stars show, and pushes the Font Awesome icons. Reviews creates the review card structure. */

const reviewsData = [

    { rating: 5, text: "Nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi" },
    { rating: 5, text: "Nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi" },
    { rating: 4.5, text: "Nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi" },
    { rating: 5, text: "Nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi" },
    { rating: 5, text: "Nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi" },
    { rating: 5, text: "Nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi" },
    { rating: 5, text: "Nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi" },
    { rating: 4.5, text: "Nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi" }

]

function StarRating({ rating }) {

    const stars = []

    for (let i = 1; i <= 5; i++) {

        if (rating >= i) {

            stars.push(<i key={i} className="fa-solid fa-star"></i>)

        } else if (rating >= i - 0.5) {

            stars.push(<i key={i} className="fa-solid fa-star-half"></i>)

        } else {

            stars.push(<i key={i} className="fa-regular fa-star"></i>)

        }

    }

    return <div className="review-stars">{stars}</div>

}

function Reviews() {

    return (

        <section className="reviews">

            <div className="reviews-grid">

                {reviewsData.map((review, index) => (

                    <div className="review-card" key={index}>

                        <StarRating rating={review.rating} />
                        <p className="review-text">{review.text}</p>

                        <img src={square} alt="Reviewer" className="review-avatar" />
                        
                    </div>

                ))}

            </div>

        </section>

    )

}

export default Reviews