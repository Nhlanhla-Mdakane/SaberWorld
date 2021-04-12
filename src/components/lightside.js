import React from "react";
import { Redirect } from "react-router-dom";
import { Link } from "react-router-dom";
import lightsaberFile from "./data/lightSideData.js";
import cartIcon from "./images/cart.png";

//This gets lightside lightsaber data and displays it to users

let lightsaberData = lightsaberFile;

class LightSidePage extends React.Component {
  constructor(props) {
    super(props);
  }

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

        <div id="descriptionLight">
          <a href="#productDiv">
            <button>shop now</button>
          </a>
        </div>

        <h2>Light Side </h2>
        <div id="productDiv">
          {lightsaberData.map((lightsaber) => {
            const {
              id,
              name,
              user,
              userImg,
              description,
              lightsaberImg,
              price,
              side,
              sideImg,
            } = lightsaber;
            //this adds product clicked to product view array
            const viewProduct = () => {
              this.props.productView(lightsaber);
            };

            return (
              <>
                <article id={id} id="lightSaber">
                  <h2>{name}</h2>
                  <h3>R:{price}</h3>
                  <img src={lightsaberImg} alt={name} />

                  <br />
                  <Link to="/product">
                    <button id="view" onClick={viewProduct}>
                      view
                    </button>
                  </Link>
                </article>
              </>
            );
          })}
        </div>
      </>
    );
  }
}
export default LightSidePage;
