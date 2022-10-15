import {Component} from 'react'

import './index.css'

class ReviewsCarousel extends Component {
  state = {index: 0}

  onClickLeftArrow = () => {
    let {index} = this.state
    index -= 1
    if (index < 0) {
      index += 1
    }
    this.setState({index})
  }

  onClickRightArrow = () => {
    const {reviewsList} = this.props
    let {index} = this.state
    const lengthOf = reviewsList.length - 1
    index += 1
    if (index > lengthOf) {
      index -= 1
    }
    this.setState({index})
  }

  getReview = () => {
    const {reviewsList} = this.props
    const {index} = this.state
    const review = reviewsList[index]
    return review
  }

  render() {
    const review = this.getReview()
    const {username, imgUrl, companyName, description} = review

    return (
      <div className="app-container">
        <h1 className="title">Reviews</h1>
        <div className="carousel-container">
          <button
            className="button"
            testid="leftArrow"
            type="button"
            onClick={this.onClickLeftArrow}
          >
            <img
              src="https://assets.ccbp.in/frontend/react-js/left-arrow-img.png"
              alt="left arrow"
            />
          </button>

          <div className="review-container">
            <img src={imgUrl} alt={username} />
            <p className="username">{username}</p>
            <p className="company-name">{companyName}</p>
            <p className="review">{description}</p>
          </div>
          <button
            className="button"
            testid="rightArrow"
            type="button"
            onClick={this.onClickRightArrow}
          >
            <img
              src="https://assets.ccbp.in/frontend/react-js/right-arrow-img.png"
              alt="right arrow"
            />
          </button>
        </div>
      </div>
    )
  }
}

export default ReviewsCarousel
