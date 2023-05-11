import './index.css'

const MatchGameItem = props => {
  const {item, handleMatchImg} = props
  const {id, thumbnailUrl} = item

  const matchImage = () => {
    handleMatchImg(id)
  }

  return (
    <li className="tb-list-item">
      <button className="tb-list-btn" type="button" onClick={matchImage}>
        <img className="tb-img" alt="thumbnail" src={thumbnailUrl} />
      </button>
    </li>
  )
}

export default MatchGameItem
