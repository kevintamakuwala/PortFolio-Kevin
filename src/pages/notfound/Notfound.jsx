import React from "react";
import "./notfound.css";
const Notfound = () => {
  return (
    
      <div id="error-page" >
        <div class="content">
          <h2 class="header" data-text="404">
            404
          </h2>
          <h4 data-text="Opps! Page not found">Opps! Page not found</h4>
          <p>
            Sorry, the page you're looking for doesn't exist. If you think
            something is broken, report a problem.
          </p>
          <div class="btns">
            <a href="/" id="l1" >Return Home</a>
            <a href="/" id="l2" >Report Problem</a>
          </div>
        </div>
      </div>

  );
};

export default Notfound;
