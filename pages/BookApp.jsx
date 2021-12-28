import { bookService } from '../services/books.service.js'
import { BookList } from '../cmps/BookList.jsx'
import { BookAdd } from '../cmps/BookAdd.jsx'
import { BookFilter } from '../cmps/BookFilter.jsx'

export class BookApp extends React.Component {

    state = {
        books: [],
        filterBy: null,
        
    }

    
    componentDidMount() {
        this.loadBooks()
    }


    loadBooks = () => {
        const { filterBy } = this.state
        bookService.query(filterBy).then(books => {
            this.setState({ books })
        })
    }


    onSetFilter = (filterBy) => {
        this.setState({ filterBy }, this.loadBooks)
    }


    render() {
        const { books, } = this.state
        return (
            <section>
                <BookFilter onSetFilter={this.onSetFilter} />
                <BookAdd loadBooks={this.loadBooks}/>
                <BookList books={books} />
            </section>
        )
    }
}