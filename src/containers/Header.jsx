import React from "react";
import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <div className="ui fixed menu">
      <div className="ui container center">
        <h2 className="header">
          <Link to="/">Fake Shop</Link>
        </h2>
      </div>
    </div>
  );
};
