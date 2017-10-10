import React from 'react'
import 'font-awesome/css/font-awesome.css'
import './SearchBar.css'
import PropTypes from 'prop-types'

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

    handleSubmit = (e) => {
        e.preventDefault()
        this.props.updateSearchTerm(this.state.search)
    }

    render(){ //it will automatically called everytime
        return(
            <div className ="searchbar-container">
                <form className="search-form">
                    <input
                        type="search"
                        name="search"
                        value={this.state.search}
                        className="search-input"
                        placeholder="Search Restaurants" 
                        onChange={this.handleSearchChange}
                    />
                </form>
                <button 
                    type="submit"
                    className="search-button"
                    onClick={this.handleSubmit}
                >
                    <i className="Search-icon fa fa-search" />
                </button>


            </div>
        )
    }
}

PropTypes.PropTypes = {
    updateSearchTerm: PropTypes.func.isRequired
}

export default SearchBar