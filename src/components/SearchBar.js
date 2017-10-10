import React from 'react'

class SearchBar extends React.Component{

    constructor() {
        super()

        this.state = {
            search: ''

        }
    }

    handleSearchChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    render(){ //it will automatically called everytime
        return(
            <div className ="searchbar-container">
                <form className="search-form">
                    <input
                        type="search"
                        name="search"
                        value={this.state.search}
                        className="search0input"
                        placeholder="Search Restaurants" 
                        onChange={this.handleSearchChange}
                    />
                </form>

            </div>
        )
    }
}

export default SearchBar