import "./Reviews.css"
import review1 from "../../assets/review-1.jpg"
import review2 from "../../assets/review-2.jpg"
import review3 from "../../assets/review-3.jpg"
import review4 from "../../assets/review-4.jpg"
import review5 from "../../assets/review-5.jpg"
import review6 from "../../assets/review-6.jpg"
import review7 from "../../assets/review-7.jpg"
import review8 from "../../assets/review-8.jpg"

/* Reviews.jsx is the reviews content block at the bottom of Home.jsx. StarRating receives a prop, the loop figures out how many full
and half stars show, and pushes the Font Awesome icons. Reviews creates the review card structure. */

const reviewsData = [

    { rating: 5, text: "This cool app works well for my small team. It is supereasy to create briefs, track changes, and manage my team.", image: review1 },
    { rating: 5, text: "Finally back to review this. I waited until I had some time to test it for a period. Great job on the brief builder.", image: review2 },
    { rating: 4.5, text: "I like it alot. Easily affordable, no learning curve, and it runs fast. They need to add more features though.", image: review3 },
    { rating: 5, text: "Brief.io works wonders for our small art studio. My entire team loves it, and pricing is inexpensive.", image: review4 },
    { rating: 5, text: "We just started using it and I have to say, that it is much better than what I expected. 5 Stars from us.", image: review5 },
    { rating: 5, text: "Such a nifty little app! I was so tired of looking through tons of docs for what I needed. Problem solved.", image: review6 },
    { rating: 5, text: "My team is a decent size and steadily growing. It works great for teams of all sizes, without high costs!", image: review7 },
    { rating: 4.5, text: "I was using another tool but it was so freakin expensive. I found Brief.io on Google and I'm so glad.", image: review8 }

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

                        <img src={review.image} alt="Reviewer" className="review-avatar" />
                        
                    </div>

                ))}

            </div>

        </section>

    )

}

export default Reviews