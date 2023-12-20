import React from "react";
import "./Portfolio.css";
const Portfolio = () => {
  return (
    <div className="portfolio">
      <div className="bt-card">
        <h2 className="bt-h2">Portfolio Section</h2>
        <p className="bt-p">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam pulvinar
          luctus sem, eget porta orci. Maecenas molestie dui id diam feugiat, eu
          tincidunt mauris aliquam. Duis commodo vitae ligula et interdum.
          Maecenas faucibus mattis imperdiet. In rhoncus ac ligula id ultricies.
        </p>

        <button className="bo-btn1">SEE IT IN ACTION</button>
      </div>

      <div>
        <img
          className="bt-img"
          src="https://149842022.v2.pressablecdn.com/wp-content/uploads/sites/59/2016/03/flexible-portfolio.png"
        />
      </div>
    </div>
  );
};

export default Portfolio;
