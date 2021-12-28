
const { NavLink, withRouter } = ReactRouterDOM

export function _AppHeader(props) {
    
    

    return (
        <header className="main-header ">
            <div className="header-container main-layout flex align-center space-between">
                <div ><h1 onClick={() => props.history.push('/')} className="logo">Bookify</h1></div>
                {/* activeClassName="a-active" */}
                <nav className="header-nav">
                    <NavLink className="clean-link" to="/" >Home</NavLink>
                    <NavLink className="clean-link" to="/about">About</NavLink>
                    <NavLink className="clean-link" to="/books">Shop Books</NavLink>
                </nav>
            </div>
        </header>
    )

}


export const AppHeader = withRouter(_AppHeader)
