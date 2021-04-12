import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

//importing pages of website
import AllProducts from "./components/allProducts.js";
import About from "./components/about.js";
import DarkSidePage from "./components/darkside.js";
import LightSidePage from "./components/lightside.js";
import ProductPage from "./components/productPage.js";
import CartPage from "./components/cart.js";
import BottomNav from "./components/bottomNav.js";

import Error from "./components/error.js";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.productAdd = this.productAdd.bind(this);
    this.productClear = this.productClear.bind(this);

    this.productView = this.productView.bind(this);
    this.productRemove = this.productRemove.bind(this);
    this.cartClear = this.cartClear.bind(this);
    this.total = this.total.bind(this);

    this.state = {
      cartProducts: [],
      product: [],
      totalAmount: 0,
    };
  }
  //this adds product to cart
  productAdd(lightsaber) {
    this.setState({
      cartProducts: [...this.state.cartProducts, lightsaber],
    });
  }

  //this adds a product to product array and removes previous one so that there is only one product in the product array
  //product array is used to show a lightsaber's specific details
  productView(item) {
    this.setState({
      product: [item],
    });
  }
  //removes product from cart
  productRemove(lightsaber) {
    const newCart = this.state.cartProducts.filter(
      (lightsaberProducts) => lightsaberProducts.id !== lightsaber.id
    );
    this.setState({
      cartProducts: newCart,
    });

    //this calculates cost of items
    const totalProducts = newCart;
    let totalVar = 0;

    for (var i = 0; i < totalProducts.length; i++) {
      totalVar = totalVar + parseFloat(totalProducts[i].price);
    }

    this.setState({
      totalAmount: totalVar,
    });
  }
  //this calculates cost of items
  total() {
    const totalProducts = this.state.cartProducts;
    let totalVar = 0;

    for (var i = 0; i < totalProducts.length; i++) {
      totalVar = totalVar + parseFloat(totalProducts[i].price);
    }

    this.setState({
      totalAmount: totalVar,
    });
  }

  //this clears cart
  cartClear() {
    this.setState({
      cartProducts: [],
    });

    const totalProducts = this.state.cartProducts;
    let totalVar = 0;

    for (var i = 0; i < totalProducts.length; i++) {
      totalVar = totalVar + parseFloat(totalProducts[i].price);
    }

    this.setState({
      totalAmount: totalVar,
    });
  }
  //clears product
  productClear() {
    this.setState({
      product: [],
    });
  }

  render() {
    return (
      <div className="App">
        <Router>
          <Switch>
            <Route exact path="/">
              <AllProducts
                productView={this.productView}
                productClear={this.productClear}
                product={this.state.product}
              />
            </Route>

            <Route exact path="/cart">
              <CartPage
                productRemove={this.productRemove}
                cartClear={this.cartClear}
                cartProducts={this.state.cartProducts}
                totalAmount={this.state.totalAmount}
                total={this.total}
              />
            </Route>

            <Route exact path="/darkSide">
              <DarkSidePage
                productView={this.productView}
                productClear={this.productClear}
              />
            </Route>

            <Route exact path="/lightSide">
              <LightSidePage
                productView={this.productView}
                productClear={this.productClear}
              />
            </Route>

            <Route exact path="/product">
              <ProductPage
                productAdd={this.productAdd}
                product={this.state.product}
              />
            </Route>

            <Route exact path="/about">
              <About />
            </Route>

            <Route path="*">
              <Error />
            </Route>
          </Switch>

          <BottomNav />
        </Router>
      </div>
    );
  }
}

export default App;
