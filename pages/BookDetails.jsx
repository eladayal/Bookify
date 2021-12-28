import { utilService } from '../services/util.service.js'
import { bookService } from '../services/books.service.js'
import { AddReview } from '../cmps/AddReview.jsx'
import { Reviews } from '../cmps/Reviews.jsx'

const { Link } = ReactRouterDOM



export class BookDetails extends React.Component {

    state = {
        book: null,
        addReview: false,


    }

    componentDidMount() {
        this.loadBook()
    }

    componentDidUpdate(prevProps) {
        if (prevProps.match.params.bookId !== this.props.match.params.bookId) {
            this.loadBook()
        }
    }


    onAddReview = () => {
        this.setState({ addReview: !this.state.addReview })
    }



    loadBook = () => {
        const { bookId } = this.props.match.params
        bookService.getBookById(bookId).then((book) => {
            this.setState({ book })
        })
    }


    pageCountDisplay = () => {
        const { pageCount } = this.state.book
        let readDisplay
        if (pageCount < 100) readDisplay = 'Light Reading(less then 100 pages)'
        else if (pageCount >= 100 && pageCount <= 500) readDisplay = 'Decent Reading(Between 100 & 500 pages)'
        else if (pageCount > 500) readDisplay = 'Long Reading(More then 500 pages)'
        return readDisplay
    }


    getPriceColor = () => {
        const { amount } = this.state.book.listPrice
        let color
        if (amount < 20) color = 'green'
        else if (amount > 150) color = 'red'
        return color
    }


    getPublishDisplay = (publishYear) => {
        var date = new Date()
        var currYear = date.getFullYear()
        var diff = currYear - publishYear
        if (diff <= 10)`(${publishYear}) Relatively New Book!`
        else return `(${publishYear}) Veteran Book!`
    }

    render() {

        const { book, addReview } = this.state
        const { bookId } = this.props.match.params
        if (!book) return <div>Loading...</div>
        return (

            <section className="book-details flex ">
                <div className="book-detail-container main-layout flex flex-direction-column align-center">
                    <div className="back-to-books">
                        <Link className="clean-link" to={`/books/${bookService.getPrevBookId(bookId)}`}> <button className=" button-style"  > ←  Previous Book </button></Link>
                        <button className=" button-style" onClick={() => this.props.history.push('/books')} >Back</button>
                        <Link className="clean-link" to={`/books/${bookService.getNextBookId(bookId)}`}><button className=" button-style" >Next Book → </button></Link>
                    </div>
                    <h2 className="book-title">{book.title}</h2>
                    <div className="book-details-img"><img className="sale-tag" src={book.thumbnail} alt="" /></div>
                    <div className="book-details-desc">{book.description}</div>
                    <div>{this.getPublishDisplay(book.publishedDate)}</div>
                    <h4>{this.pageCountDisplay()}</h4>
                    <h2 className={this.getPriceColor()} >{utilService.getCurrencyCode(book)}</h2>
                    {book.listPrice.isOnSale && <div className="book-detail-sale">ON SALE !!!</div>}

                    {!addReview && <button onClick={this.onAddReview} className="button-style">Add a Review</button>}
                    {addReview && <AddReview bookId={bookId} onAddReview={this.onAddReview} loadBook={this.loadBook} />}
                    <div className="review-container flex flex-direction-column">
                      
                        <h2 className="review-container-title">{book.title} Reviews:</h2>
                        <Reviews bookReviews={book.reviews} />
                    </div>
                </div>

            </section>


        )

    }



}