import {Component} from 'react'
import './index.css'
import {tabsList, imagesList} from '../../data'
import Navbar from '../Navbar'
import MatchGameItem from '../MatchGameItem'
import TabItem from '../TabItem'

class MatchGame extends Component {
  state = {
    randomImageObject: imagesList[0],
    activeTabId: 'FRUIT',
    time: 60,
    score: 0,
    isGameOver: false,
  }

  componentDidMount() {
    this.timerId = setInterval(this.tick, 1000)
  }

  selectRandomImg = () => {
    const imgObject = imagesList[Math.floor(Math.random() * imagesList.length)]
    return imgObject
  }

  handleMatchImg = id => {
    const {randomImageObject} = this.state
    if (id === randomImageObject.id) {
      const randomImage = this.selectRandomImg()
      this.setState(prevState => ({
        score: prevState.score + 1,
        randomImageObject: randomImage,
      }))
    } else {
      clearInterval(this.timerId)
      this.setState({
        isGameOver: true,
      })
    }
  }

  tick = () => {
    const {time} = this.state
    if (time === 0) {
      clearInterval(this.timerId)
      this.setState({
        isGameOver: true,
      })
    } else {
      this.setState(prevState => ({time: prevState.time - 1}))
    }
  }

  playGameAgain = () => {
    this.timerId = setInterval(this.tick, 1000)
    const randomImageObject = this.selectRandomImg()
    this.setState({
      activeTabId: 'FRUIT',
      score: 0,
      time: 60,
      isGameOver: false,
      randomImageObject,
    })
  }

  handleTabChange = tabId => {
    this.setState({
      activeTabId: tabId,
    })
  }

  render() {
    const {randomImageObject, activeTabId, isGameOver, score, time} = this.state
    const filteredImages = imagesList.filter(
      object => object.category === activeTabId,
    )

    return (
      <div className="bg-container">
        <Navbar score={score} timeLeft={time} />
        {isGameOver ? (
          <div className="game-over-container">
            <div className="trophy-container">
              <img
                className="trophy-img"
                alt="trophy"
                src="https://assets.ccbp.in/frontend/react-js/match-game-trophy.png"
              />
            </div>
            <p className="your-score">YOUR SCORE</p>
            <h1 className="your-score-value">{score}</h1>
            <button
              className="play-again-btn"
              type="button"
              onClick={this.playGameAgain}
            >
              <img
                className="play-again-img"
                alt="reset"
                src="https://assets.ccbp.in/frontend/react-js/match-game-play-again-img.png "
              />
              PLAY AGAIN
            </button>
          </div>
        ) : (
          <div className="game-container">
            <div className="main-img-container">
              <img
                className="main-img"
                alt="match"
                src={randomImageObject.imageUrl}
              />
            </div>
            {/* Tabs List */}
            <ul className="tab-list-container">
              {tabsList.map(object => (
                <TabItem
                  key={object.tabId}
                  item={object}
                  handleTabChange={this.handleTabChange}
                  activeTabId={activeTabId}
                />
              ))}
            </ul>
            {/* Thumbnail Images List */}
            <ul className="tb-list-container">
              {filteredImages.map(object => (
                <MatchGameItem
                  key={object.id}
                  item={object}
                  handleMatchImg={this.handleMatchImg}
                />
              ))}
            </ul>
          </div>
        )}
      </div>
    )
  }
}

export default MatchGame
