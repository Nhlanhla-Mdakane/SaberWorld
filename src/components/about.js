import React from "react";
import { Link } from "react-router-dom";
import aboutPic from "./images/yodaPic.jpg";
import cartIcon from "./images/cart.png";
//normal page which mainly has html . It contains all the necessery information about the hypothetical store
class About extends React.Component {
  render() {
    return (
      <>
        <div id="nav">
          <ul>
            <li>
              <Link to="/">SaberWorld</Link>
            </li>

            <li>
              <Link to="/lightSide">Light Side</Link>
            </li>
            <li>
              <Link to="/darkSide">Dark Side</Link>
            </li>

            <li>
              <Link to="/about">About</Link>
            </li>

            <li>
              <Link to="/cart">
                {" "}
                <img
                  src={cartIcon}
                  className="cartImg"
                  alt="shopping cart icon"
                />
              </Link>
            </li>
          </ul>
        </div>
        <div id="aboutDiv">
          <h1 id="saberWorld">Saber World</h1>
          <img src={aboutPic} id="aboutPic" />
          <h2>Who are We?</h2>
          <p>
            We are SaberWorld,a small company based in Town, South Africa and we
            supple possibly the greatest and coolest weapon in the Galaxy, The
            Lightsaber. As Avid Star Wars fans ,we thought it was unjust for the
            power of the Lightsabers to be only held by the Jedi and Sith, so we
            decided (through hard work and creativity) to create our own replica
            Lightsaber's so that the entire galaxy can enjoy these works of Art,
          </p>

          <p id="forceBeWithYou">
            Happy choosing and may the force be with you
          </p>

          <div id="Terms and Conditions">
            <h3 id="cancellation"> Cancellation/Return Policy</h3>

            <p>
              All order are custom made and production begins immediately after
              an order is placed. Orders cannot be canceled unless the order has
              exceeded the lead time provided at the time of purchase. If you
              have placed an order and it has not shipped by the final date of
              the lead time provided, you may request a cancellation for a full
              refund.
            </p>

            <h3 id="returns">Returns</h3>
            <p>
              Items may be returned for store credit or exchange. Returned items
              must be shipped back to us within 15 days after delivery, and must
              remain in pristine condition. Shipping is covered by the buyer.
              IMPORTANT: Returns must include a completed SaberWorld RMA form
              (Filled out, printed and included in the box with your returning
              items).
            </p>
            <h3 id="userSafety">User Safety</h3>
            <p>
              During the machining process, some sabers may develop sharp edges.
              Before any contact dueling (as with any type of dueling), we
              recommend wearing proper safety protection for your hands, body
              and face. This includes but is not limited to: gloves, body armor,
              face masks, and helmets. Always take the proper safety measures
              before dueling of any kind. Saberforge is not responsible for any
              injuries that result from saber play, combat choreography or
              dueling.
            </p>

            <h3 id="deliveryPolicy">delivery/shipping Policy</h3>
            <p>
              Our international orders are ship worldwide from our headquarters
              in Cape Town, via USPS international priority, with tracking and
              insurance. To determine if USPS has delivery service to your
              country, please select your country from the drop down menu when
              entering your shipping address. If you do not see your country in
              the drop down menu, unfortunately we cannot currently ship to you.
            </p>
          </div>
        </div>
      </>
    );
  }
}

export default About;
