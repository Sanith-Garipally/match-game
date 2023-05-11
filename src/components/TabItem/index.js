import './index.css'

const TabItem = props => {
  const {item, handleTabChange, activeTabId} = props
  const {displayText, tabId} = item
  const isTabActive = activeTabId === tabId ? 'active-tab-btn' : ' '

  const changeTab = () => {
    handleTabChange(tabId)
  }
  return (
    <li>
      <button
        className={`tab-btn ${isTabActive}`}
        type="button"
        onClick={changeTab}
      >
        {displayText}
      </button>
    </li>
  )
}

export default TabItem
