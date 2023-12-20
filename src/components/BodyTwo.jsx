import React from "react";
import "./BodyTwo.css";
const BodyTwo = () => {
  return (
    <div className="bodyTwo">
      <div>
        <img
          className="bt-img"
          src="https://149842022.v2.pressablecdn.com/wp-content/uploads/sites/59/2016/03/macbook-preview-flexible.png"
        />
      </div>
      <div className="bt-card">
        <h2 className="bt-h2">SEO Friendly</h2>
        <p className="bt-p">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam pulvinar
          luctus sem, eget porta orci. Maecenas molestie dui id diam feugiat, eu
          tincidunt mauris aliquam. Duis commodo vitae ligula et interdum.
          Maecenas faucibus mattis imperdiet. In rhoncus ac ligula id ultricies.
        </p>

        <button className="bo-btn1">READ MORE</button>
      </div>
    </div>
  );
};

export default BodyTwo;
