import React from "react";

import { Link } from "react-router-dom";

class Error extends React.Component {
  //this sends user back to main website if they are not in any of the correct pages

  render() {
    return (
      <div id="errorDiv">
        <h2> Error Page</h2>
        <h3>Something has gone wrong , please return to Home</h3>
        <Link to="/" className="btn">
          Back Home
        </Link>
      </div>
    );
  }
}
export default Error;
