import { bookService } from '../services/books.service.js'

export class AddReview extends React.Component {

    state = {
        review:{
            fullName:'Book Reviewer',
            rate: 0,
            txt:'',

        }
    }


    handleChange = ({target}) =>{
        const field = target.name
        const value = target.type === 'number'? +target.value : target.value
        this.setState((prevState) => ({ review: { ...prevState.review, [field]: value } }))
    }


    onSubmitReview = (ev) =>{
        ev.preventDefault()        
        const { bookId } = this.props
        bookService.addReview(this.state.review,bookId).then(this.props.loadBook)
        this.props.onAddReview()
        this.onSubmitModal()
        this.clearForm()
    }


    onSubmitModal = () =>{
        const Toast = Swal.mixin({
            toast: true,
            position: 'bottom-end',
            showConfirmButton: false,
            timer: 3000,
            timerProgressBar: true,
          })
          Toast.fire({
            icon: 'success',
            title: 'Review Submitted!'
          })
    }

    clearForm = () => {
        this.setState({ review: { fullName:'', rate:0, txt:'' } })
    }


    render() {
        const { review: { fullName, rate, txt } } = this.state

        return (
            <section className="add-review-container ">

                <form className="review-form main-layout flex flex-direction-column justify-center align-center wrap" onSubmit={this.onSubmitReview}>
                    <label htmlFor="by-name">Name:&nbsp;</label>
                    <input
                        placeholder="Full Name"
                        type="text"
                        id="by-name"
                        name="fullName"
                        value={fullName} 
                        onChange={this.handleChange}
                    />
                    <label htmlFor="by-Rate">Rate:&nbsp;</label>
                    <input
                        placeholder="Rate 1-5"
                        type="number"
                        id="by-rate"
                        min="0"
                        max="5"
                        name="rate"
                        value={rate}
                        onChange={this.handleChange}
                    />
              
                    <textarea
                        placeholder="Please write your review here..."
                        type="number"
                        id="by-rate"
                        name="txt"
                        rows="4" cols="50"
                        value={txt}
                        onChange={this.handleChange}
                    />
                    <button className="button-style">Submit Review</button>
                </form>

            </section>



        )


    }






}