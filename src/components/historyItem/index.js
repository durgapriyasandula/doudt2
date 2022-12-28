const historyItem = props => {
  const {eachHistoryDetails, deleteHistory} = props
  const {id, timeAccessed, logoUrl, title, domainUrl} = eachHistoryDetails
  const onDelete = () => {
    deleteHistory(id)
  }
  return (
    <div className="ItemContainer">
      <li className="Item-List-Container">
        <p className="Item-Paragraph">{timeAccessed}</p>
        <img src={logoUrl} />
        <p className="Item-Paragraph">{title}</p>
        <p className="domainUrl">{domainUrl}</p>
        <button type="button" className="delete-button" onClick={onDelete}>
          <img
            src="https://assets.ccbp.in/frontend/react-js/delete-img.png"
            alt="delete"
            className="delete-container"
          />
        </button>
      </li>
    </div>
  )
}
export default historyItem
