
export class BookFilter extends React.Component {

    state = {
        filterBy: {
            name: '',
            minPrice: '',
            maxPrice: ''
        }
    }


    handleChange = ({ target }) => {
        const field = target.name
        const value = target.type === 'number' ? +target.value : target.value
        this.setState((prevState) => ({ filterBy: { ...prevState.filterBy, [field]: value } }), () => {
            this.props.onSetFilter(this.state.filterBy)
        })
    }


    onSubmitFilter = (ev) => {
        ev.preventDefault()
        this.props.onSetFilter(this.state.filterBy)
        this.cleanFrom()
    }


    cleanFrom = () => {
        this.setState({ filterBy: { name:'', minPrice:'', maxPrice:'' } })
    }


    render() {
        const { filterBy: { name, minPrice, maxPrice } } = this.state
        return (
            <form className="book-filter flex justify-center align-center wrap"  onSubmit={this.onSubmitFilter}>
                <label htmlFor="by-name">By Name:&nbsp;</label>
                <input
                    placeholder="Book Name"
                    type="text"
                    id="by-name"
                    name="name"
                    value={name}
                    onChange={this.handleChange}
                />
                <label htmlFor="by-min-price">Min Price:&nbsp;</label>
                <input
                    placeholder="Minimum Price"
                    type="number"
                    min="0"
                    id="by-min-price"
                    name="minPrice"
                    value={minPrice}
                    onChange={this.handleChange}
                />
                <label htmlFor="by-max-price">Max Price:&nbsp;</label>
                <input
                    placeholder="Maximum Price"
                    type="number"
                    min="0"
                    id="by-max-price"
                    name="maxPrice"
                    value={maxPrice}
                    onChange={this.handleChange}
                />
                    <button className="button-style"><i className="fas fa-filter">Filter</i></button>
            </form>
        )


    }


}