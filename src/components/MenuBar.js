import React from "react";

function MenuBar({ onClick, active }) {
  return (
    <div className="ui four item menu">
      <span className={active === "profile" ? "item active" : "item"}>
        <i className="user large icon" onClick={() => onClick("profile")} />
      </span>

      <span className={active === "photos" ? "item active" : "item"}>
        <i className="photo large icon" onClick={() => onClick("photos")} />
      </span>

      <span className={active === "cocktails" ? "item active" : "item"}>
        <i className="cocktail large icon" onClick={() => onClick("cocktails")} />
      </span>

      <span className={active === "pokemon" ? "item active" : "item"}>
        <i className=" themeisle large icon" onClick={() => onClick("pokemon")} />
      </span>
    </div>
  );
}

export default MenuBar;

