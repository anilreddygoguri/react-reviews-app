import {Component} from 'react'

import './index.css'

class ReviewsCarousel extends Component {
  state = {
    activeReviewListId: 0,
  }

  onClickLeftArrow = () => {
    const {activeReviewListId} = this.state
    if (activeReviewListId > 0) {
      this.setState(prevState => ({
        activeReviewListId: prevState.activeReviewListId - 1,
      }))
    }
  }

  onClickRightArrow = () => {
    const {reviewsList} = this.props
    const {activeReviewListId} = this.state
    if (activeReviewListId < reviewsList.length - 1) {
      this.setState(prevState => ({
        activeReviewListId: prevState.activeReviewListId + 1,
      }))
    }
  }

  render() {
    const {reviewsList} = this.props
    const {activeReviewListId} = this.state
    const reviewDetails = reviewsList[activeReviewListId]
    const {imgUrl, username, companyName, description} = reviewDetails
    return (
      <div className="reviews-bg-container">
        <div className="reviews-container">
          <h1 className="heading">Reviews</h1>
          <div className="buttons-profile-container">
            <button
              type="submit"
              className="button"
              data-testid="leftArrow"
              onClick={this.onClickLeftArrow}
            >
              <img
                src="https://assets.ccbp.in/frontend/react-js/left-arrow-img.png"
                alt="left arrow"
              />
            </button>
            <div className="profile-Container">
              <img src={imgUrl} alt={username} className="profile" />
              <p>{username}</p>
              <p>{companyName}</p>
              <p className="description">{description}</p>
            </div>
            <button
              type="submit"
              className="button"
              data-testid="rightArrow"
              onClick={this.onClickRightArrow}
            >
              <img
                src="https://assets.ccbp.in/frontend/react-js/right-arrow-img.png "
                alt="right arrow"
              />
            </button>
          </div>
        </div>
      </div>
    )
  }
}
export default ReviewsCarousel
