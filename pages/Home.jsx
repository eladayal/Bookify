
const{Link} = ReactRouterDOM

export function Home(props) {

    
    return (
        <section className="home-page">
            <section className="home-hero flex">
                <div className="home-container main-layout flex flex-direction-column  align-center">
                <div className="hero-title">Welcome to Bookify</div>
                <div className="hero-subtitle">Online book shopping made easy!</div>
                <div className="hero-slogan">Bringing books from your screen to your door steps since 1994</div>
                </div>
            </section>
           <div className=" flex justify-center align-center">
               <button onClick={() => props.history.push('/books')} className="go-to-books-btn button-style">Shop Books</button>
               </div> 

        </section>
    )


}