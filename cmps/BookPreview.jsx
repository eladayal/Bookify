import { utilService } from '../services/util.service.js'


const {Link} = ReactRouterDOM


export function BookPreview({ book }) {


    return (
        <article className="book-preview flex flex-direction-column">
            <Link className="clean-link" to={`/books/${book.id}`}>
            <h4 className="book-title">{book.title}</h4>
            <small>{book.categories.join(', ')}</small>
            <h5 className="authors"> by: {book.authors}</h5>
            <div className="book-img-container "> <img className="book-preview-img" src={book.thumbnail} alt="" /></div>
            </Link>
            <div className="book-price">Price: {utilService.getCurrencyCode(book)}</div>
        </article>

    )

}