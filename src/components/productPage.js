import React from "react";
import { Link } from "react-router-dom";

import cartIcon from "./images/cart.png";

//this page displays to the user specific information about a product and allows them to add it to the cart
class ProductPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      //will get values from form
      productState: "",
    };
  }

  componentDidMount() {}

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
        <h2>Product Page</h2>
        {this.props.product.map((lightsaber) => {
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

          const resetState = () => {
            this.setState({ productState: "" });
          };

          const addProduct = () => {
            this.props.productAdd(lightsaber);

            setTimeout(resetState, 1500);
            this.setState({ productState: "product added" });
          };
          return (
            <>
              <article id={id} className="lightsaberProduct">
                <div id="productDetails">
                  <h2>{user}</h2>
                  <h2>{side} Side</h2>
                  <div id="productDetailImg">
                    <img src={sideImg} alt="side of force img" />
                    <img src={userImg} alt={user} />
                  </div>

                  <p>{description}</p>
                </div>

                <div id="lightsaberItem">
                  <h2>{name}</h2>

                  <img src={lightsaberImg} className="productImg" alt={name} />
                  <h3>Price : R {price}</h3>
                  <div id="colourTab">
                    <label id="buttons">
                      <input type="radio" value="blue " name="colour" />
                      Blue
                    </label>

                    <label id="buttons">
                      <input type="radio" value="red " name="colour" />
                      Red
                    </label>

                    <label id="buttons">
                      <input type="radio" value="purple " name="colour" />
                      Purple
                    </label>
                  </div>
                  <h2>{this.state.productState}</h2>

                  <button id="addProductButton" onClick={addProduct}>
                    add to cart
                  </button>
                </div>
              </article>
            </>
          );
        })}
      </>
    );
  }
}
export default ProductPage;
