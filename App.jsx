import { Home } from './pages/Home.jsx'
import { About } from './pages/About.jsx'
import { BookApp } from './pages/BookApp.jsx'
import { BookDetails } from './pages/BookDetails.jsx'
import { AppHeader } from './cmps/AppHeader.jsx'
import { AppFooter } from './cmps/AppFooter.jsx'

const Router = ReactRouterDOM.HashRouter
const { Route, Switch } = ReactRouterDOM

export function App() {
    return (
        <Router>
            <section className="app">
                <AppHeader />

                <main>
                    <Switch>
                        <Route component={BookDetails} path="/books/:bookId"/>
                        <Route component={BookApp} path="/books"/>
                        <Route component={About} path="/about" />
                        <Route component={Home} path="/" />
                        
                    </Switch>
                </main>
                <AppFooter/>
                
            </section>
        </Router>
    )
}



