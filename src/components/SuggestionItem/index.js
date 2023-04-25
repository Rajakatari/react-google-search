import './index.css'

const SuggestionItem = props => {
  const {suggestionItem, pastClickSuggestion} = props
  const {suggestion} = suggestionItem

  const onSuggestion = () => {
    pastClickSuggestion(suggestion)
  }

  return (
    <li className="list-item">
      <p>{suggestion}</p>
      <button type="button" className="button" onClick={onSuggestion}>
        <img
          src="https://assets.ccbp.in/frontend/react-js/diagonal-arrow-left-up.png"
          alt="arrow"
          className="arrow-image"
        />
      </button>
    </li>
  )
}

export default SuggestionItem
