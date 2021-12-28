

export function Reviews(props) {
    const { bookReviews} = props
    
   
return(
<React.Fragment>
    {bookReviews.map((review) => {        
            return (

                <div key={review.id}>
                    <div className="reviewer-container flex justify-center  space-around">
                    <p className="reviewer-name">Reviewer: {review.fullName}</p>
                    <p className="reviewer-rate">Rate: {review.rate}</p>
                    <small className="reviewer-date">{review.date}</small>
                    </div>
                    <div className="reviewer-txt">{review.txt}</div>
                </div>
            );
        })}
        </React.Fragment>
    );

}