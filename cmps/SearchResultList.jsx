


export function SearchResultList(props) {
    const { searchResults } = props

    

    return (
        <section className="search-result-container flex justify-center align-center flex-direction-column">
            {searchResults.map(book => {


                return (
                   
                    <div key={book.id}className="search-result-box flex justify-center align-center">
                        
                        <div className="search-result-title">{book.volumeInfo.title}</div>
                        <i onClick={()=>props.onAddNewBook(book)} className="add-new-book-btn fas fa-plus-circle fa-lg" title="Add Book" ></i>

                    </div>
                );
            })}
        </section>
    );

}


