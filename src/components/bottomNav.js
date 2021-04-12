import React from "react";
import { Link } from "react-router-dom";
//getting images of icons 
import twitter from "./images/icons/twitter.png";
import facebook from "./images/icons/facebook.png";
import instagram from "./images/icons/instagram.png";
//bottom part of website which mainly has html
class BottomNav extends React.Component {
  render() {
    return (
      <div>
        <div id="bottomNav">
          <div id="address">
            <Link to="/">
              {" "}
              <h3 id="bottomHeading"> Saber World </h3>
            </Link>
            <ul>
              <li>226 Victoria Road</li>

              <li>Seapoint</li>

              <li>Cape Town</li>

              <li>South Africa</li>

              <li>Phone: (+27)31 489 9354</li>

              <li>
                <Link to="/about" id="bottomHeading">
                  Terms and Conditions
                </Link>
              </li>
            </ul>
          </div>

          <div id="Social">
            <h3 id="bottomHeading">Follow us</h3>
            <ul>
              <li>
                <a href="https://www.facebook.com/">
                  <img
                    src={facebook}
                    alt="facebook link"
                  />
                </a>{" "}
              </li>

              <li>
                <a href="https://www.instagram.com">
                  <img
                    src={instagram}
                    alt="Instagram link"
                  />
                </a>{" "}
              </li>

              <li>
                <a href="https://twitter.com">
                  <img
                    src={twitter}
                    alt="twitter link"
                  />
                </a>{" "}
              </li>
            </ul>
          </div>
        </div>

        <h4>Copyright © 2021, Nhlanhla Mdakane</h4>
      </div>
    );
  }
}

export default BottomNav;
