import "../Style/Account.scss";
export default function Account() {
  return (
    <div>
      <div className="container">
        <h2>Account</h2>
        <div className="box">
          <div className="icon">
            <img src="../../public/account-icon.png" alt="#" />
          </div>
          <div className="box-info">
            <div className="box-info-name">
            <p>John Doe</p>
            </div>
            <div className="box-info-email">
            <p>john.doe@example.com</p>
            </div>
          </div>
          <div className="box-button">
            <button><p>Premuim</p></button>
          </div>
        </div>
        <div className="line">
          <p></p>
        </div>
        <div className="profile-details">
          <div className="profile-details-icon">
            <img src="../../public/icon.png" alt="#" />
          </div>
          <div className="profile-details-name">
            <p>Profile details</p>
          </div>
          <div className="profile-details-a">
            <a href="#"><img src="../../public/Arrow.png" alt="#" /></a>
          </div>
        </div>
        <div className="payment">
          <div className="payment-icon">
            <img src="../../public/card.png" alt="#" />
          </div>
          <div className="payment-name">
            <p>Payment</p>
          </div>
          <div className="payment-a">
            <a href="#"><img src="../../public/Arrow.png" alt="#" /></a>
          </div>
        </div>
        <div className="subscription">
          <div className="subscription-icon">
            <img src="../../public/star.png" alt="#" />
          </div>
          <div className="subscription-name">
            <p>Subscription</p>
          </div>
          <div className="subscription-a">
            <a href="#"><img src="../../public/Arrow.png" alt="#" /></a>
          </div>
        </div>
        <div className="line">
          <p></p>
        </div>
        <div className="faqs">
          <div className="faqs-icon">
            <img src="../../public/Vector.png" alt="#" />
          </div>
          <div className="faqs-name">
            <p>FAQs</p>
          </div>
          <div className="faqs-a">
            <a href="#"><img src="../../public/Arrow.png" alt="#" /></a>
          </div>
        </div>
        <div className="logout">
          <div className="logout-icon">
            <img src="../../public/uil_signout.png" alt="#" />
          </div>
          <div className="logout-name">
            <p>Logout</p>
          </div>
          <div className="logout-a">
            <a href="#"><img src="../../public/Arrow.png" alt="#" /></a>
          </div>
        </div>
        <div className="help">
          <div className="help-img">
            <img src="../../public/headphones.png" alt="" />
          </div>
          <div className="help-p">
            <p>Feel free to ask, We are here to help</p>
          </div>
        </div>
      </div>
    </div>
  )
}
