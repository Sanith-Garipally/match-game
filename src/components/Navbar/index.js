import './index.css'

const Navbar = props => {
  const {score, timeLeft} = props

  return (
    <ul className="nav-container">
      <li className="game-logo-container">
        <img
          className="game-logo"
          alt="website logo"
          src="https://assets.ccbp.in/frontend/react-js/match-game-website-logo.png "
        />
      </li>
      <li className="st-container">
        <p className="st-para">
          score: <span className="score-span">{score}</span>
        </p>
        <div className="timer-container">
          <img
            className="timer-img"
            alt="timer"
            src="https://assets.ccbp.in/frontend/react-js/match-game-timer-img.png"
          />
          <p className="score-span">{timeLeft} sec</p>
        </div>
      </li>
    </ul>
  )
}

export default Navbar
