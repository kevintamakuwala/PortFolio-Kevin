import React from "react";
import "./notfound.css";
import {Link} from "react-router-dom"
const Notfound = () => {
  return (
    
      <div id="error-page" >
        <div className="content">
          <h2 className="header" data-text="404">
            404
          </h2>
          <h4 data-text="Opps! Page not found">Opps! Page not found</h4>
          <p>
            Sorry, the page you're looking for doesn't exist. If you think
            something is broken, Contact me.
          </p>
          <div className="btns">
            <Link to="/" id="l1" >Return Home</Link>
            <Link to="/contact" id="l2" >Report a Problem</Link>
          </div>
        </div>
      </div>

  );
};

export default Notfound;
