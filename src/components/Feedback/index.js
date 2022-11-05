// Write your React code here.
import {Component} from 'react'
import './index.css'

class FeedBack extends Component {
  state = {display: true}

  changeStatus = () => {
    this.setState({display: false})
  }

  entry = () => {
    const {resources} = this.props
    const {name, imageUrl} = resources
    return (
      <div className="maincont">
        <p>How satisfies are you with our customer support performance</p>
        <div className="emoji">
          <div className="indemoji">
            <ul className="listcont">
              {resources.emojis.map(each => (
                <li className="listitem" key={each.id}>
                  <button
                    type="button"
                    onClick={this.changeStatus}
                    className="btn"
                  >
                    <img
                      src={each.imageUrl}
                      alt="emoji"
                      className="emojiimage"
                    />
                  </button>
                  <p>{each.name}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    )
  }

  sub = () => {
    const {resources} = this.props
    const {name, imageUrl} = resources

    return (
      <div className="subcont">
        <img src={resources.loveEmojiUrl} alt="love" className="loveicon" />
        <h1>Thank You!</h1>
        <p>
          We will use your feedback to improve our customer support performance
        </p>
      </div>
    )
  }

  render() {
    const {display} = this.state
    const {resources} = this.props
    const {name, imageUrl} = resources
    return (
      <>
        <div className="container">
          <div className="inner">{display ? this.entry() : this.sub()}</div>
        </div>
      </>
    )
  }
}
export default FeedBack
