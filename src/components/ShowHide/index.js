// Write your code here

import {Component} from 'react'
import './index.css'

class ShowHide extends Component {
  state = {isshow: false}

  onFirstName = () => (
    <div className="in-background">
      <p>Joe</p>
    </div>
  )

  render() {
    const {isshow} = this.state

    return (
      <div className="bg-container">
        <h1 className="heading">Show/Hide</h1>
        <div className="button-container">
          <button onClick={this.onFirstName} type="button" className="button">
            Show/Hide Firstname
          </button>
          <button type="button" className="button">
            Show/Hide Lastname
          </button>
        </div>
      </div>
    )
  }
}

export default ShowHide
