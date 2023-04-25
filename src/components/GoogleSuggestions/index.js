import {Component} from 'react'

import './index.css'

import SuggestionItem from '../SuggestionItem'

class GoogleSuggestions extends Component {
  state = {
    list: '',
    searchElements: '',
  }

  filteringSuggestion = event => {
    this.setState({searchElements: event.target.value})
  }

  pastClickSuggestion = suggestion => {
    this.setState({searchElements: suggestion})
  }

  render() {
    const {suggestionsList} = this.props
    const {list} = this.state
    const {searchElements} = this.state
    const searchResults = suggestionsList.filter(each =>
      each.suggestion.toLowerCase().includes(searchElements.toLowerCase()),
    )

    return (
      <div className="bg-container">
        <div className="google-logo">
          <img
            src="https://assets.ccbp.in/frontend/react-js/google-logo.png"
            alt="google logo"
            className="google-image"
          />
        </div>
        <div className="search-card">
          <div className="input-search-icon-card">
            <img
              src="https://assets.ccbp.in/frontend/react-js/google-search-icon.png"
              alt="search icon"
              className="search-icon"
            />
            <input
              type="search"
              className="search-input"
              onChange={this.filteringSuggestion}
              value={searchElements}
              placeholder="Search Google"
            />
          </div>
          <ul>
            {searchResults.map(each => (
              <SuggestionItem
                suggestionItem={each}
                key={each.id}
                pastClickSuggestion={this.pastClickSuggestion}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default GoogleSuggestions
