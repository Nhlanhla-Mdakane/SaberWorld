import React from "react";
import { Redirect } from "react-router-dom";
import { Link } from "react-router-dom";
import cartIcon from "./images/cart.png";

//this page gets data about the items in the cart and then displays it to the user and it also allows the user to remove those items
class Cart extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      //will get values from form
      userState: "",
    };
  }

  componentDidMount() {
    this.props.total();
  }

  render() {
    let cartProducts = this.props.cartProducts;
    let totalAmount = this.props.totalAmount;
    //this will be used to clear cart if user clicks buy
    const resetState = () => {
      window.location.reload();
    };

    //if a user clicks buy, message gets displayed and cart gets clear
    const buyItems = () => {
      setTimeout(resetState, 2500);
      this.setState({
        userState: "Order has been successful.  May The Force be With you",
      });

      this.props.cartClear();
    };

    //this clears cart
    const clearCart = () => {
      this.props.cartClear();
      this.props.total();
    };
    return (
      <div id="cartDiv">
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

          <h2>Items in Cart</h2>

          {this.props.cartProducts.map((lightsaber) => {
            const {
              id,
              name,
              user,
              userImg,
              description,
              lightsaberImg,
              price,
            } = lightsaber;

            //this removes specific product from cart

            const productRemove = () => {
              this.props.productRemove(lightsaber);
            };

            return (
              <>
                <article id={id} id="cartProductImage">
                  <h2>{name}</h2>
                  <h2>price: {price}</h2>
                  <img src={lightsaberImg} alt={name} />

                  <br />

                  <button
                    id="removeProductButton"
                    className="cartButtons"
                    onClick={productRemove}
                  >
                    REMOVE
                  </button>
                  <nr />
                </article>
              </>
            );
          })}

          <div id="cartMenu">
            <h2>Total Amount : R{totalAmount}</h2>

            <h2 id="userState">{this.state.userState}</h2>
            <button id="BuyButton" className="cartButtons" onClick={buyItems}>
              Buy
            </button>

            <button
              id="clearButton"
              className="cartButtons"
              onClick={clearCart}
            >
              Clear Cart
            </button>
          </div>
        </>
      </div>
    );
  }
}
export default Cart;
