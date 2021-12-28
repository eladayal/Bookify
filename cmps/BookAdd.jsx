import { bookService } from '../services/books.service.js'
import { SearchResultList } from './SearchResultList.jsx'



export class BookAdd extends React.Component {

    state = {
        searchLine: '',
        searchResults: [],
    }


    componentDidMount() {
    }


    handleChange = ({ target }) => {
        const searchLine = target.value
        this.setState({ searchLine })
        bookService.getBooksFromGoogle(searchLine).then(searchResults => {
            this.setState({ searchResults })
        })
    }


    onSubmitFilter = (ev) => {
        ev.preventDefault()
    }


    onAddNewBook = (book) => {
        bookService.addNewBook(book).then(this.props.loadBooks)

        this.onAddNewBookModal()

    }

    onAddNewBookModal = () => {
        const book = bookService.getFirstBook()
        const Toast = Swal.mixin({
            toast: true,
            position: 'bottom-end',
            showConfirmButton: false,
            timer: 4000,
            timerProgressBar: true,
        })
        Toast.fire({
            icon: 'success',
            title: 'New Book Added successfully Submitted!',
            html:`<a href=/index.html#/books/${book.id}>Check it out!</a>`
   
        })
    }



    render() {
        // const { search } = this.state
        const { searchResults } = this.state

        return (
            <section className="book-add-section">
                <form className="book-add-form main-layout flex flex-direction-column justify-center align-center wrap" onSubmit={this.onSubmitReview}>
                    <label htmlFor="by-name">Search a book:&nbsp;</label>
                    <input
                        placeholder="Search a book"
                        type="search"
                        id="by-name"
                        name="search"
                        // value={search}
                        onChange={this.handleChange}
                    />
                    {/* <button className="button-style">Add</button> */}
                </form>
                {searchResults && <SearchResultList searchResults={searchResults} onAddNewBook={this.onAddNewBook} />}


            </section>


        )
    }

}



