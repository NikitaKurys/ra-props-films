import React from "react";
import Star from "./Star";
import PropTypes from "prop-types";

const USID = require("usid");
const usid = new USID();

export default function Stars(props) {
  const { count } = props;
  if (!Number.isInteger(count) || count < 0 || count > 5) {
    console.log("число от 1 до 5");
    return null;
  }

  const rating = [];
  for (let i = 0; i < count; i++) {
    rating.push({ key: usid.rand() });
  }

  return (
    <div className="rating">
      <ul className="card-body-stars">
        {rating.map((item) => (
          <Star key={item.key} />
        ))}
      </ul>
    </div>
  );
}

Stars.defaultProps = {
  count: 0,
};

Star.propTypes = {
  count: PropTypes.number,
};
