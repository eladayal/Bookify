import { BookPreview } from "./BookPreview.jsx";



export function BookList({ books }) {


    return (
        <section className="book-list main-layout flex warp space-evenly align-center">

            {books.map(book => <BookPreview key={book.id} book={book} />)}
            {!books.length && <div>No books to show</div>}
        </section>
    )
}