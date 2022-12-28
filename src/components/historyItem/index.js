const historyItem = props => {
  const {eachHistoryDetails} = props
  const {id, timeAccessed, logoUrl, title, domainUrl} = eachHistoryDetails
  return (
    <div className="ItemContainer">
      <li className="Item-List-Container">
        <p className="Item-Paragraph">{timeAccessed}</p>
        <img src={logoUrl} />
        <p className="Item-Paragraph">{title}</p>
        <p className="domainUrl">{domainUrl}</p>
        <img
          src="https://assets.ccbp.in/frontend/react-js/delete-img.png"
          alt="delete"
          className="delete-container"
        />
      </li>
    </div>
  )
}
export default historyItem
