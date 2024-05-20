import React, {useState} from "react";
import MenuBar from "./MenuBar";
import { Profile, Photos, Cocktails, Pokemon } from "./pages";

function MainBox() {
  const [active, setActive] = useState(null);

  function handleClick(menuItem) {
    setActive(menuItem);
  }

  let detailsToDisplay;

  switch (active) {
    case "profile":
      detailsToDisplay = <Profile />;
      break;
    case "photos":
      detailsToDisplay = <Photos />;
      break;
    case "cocktails":
      detailsToDisplay = <Cocktails />;
      break;
    case "pokemon":
      detailsToDisplay = <Pokemon />;
      break;
    default:
      detailsToDisplay = null;
  }

  return (
    <div>
      <MenuBar onClick={handleClick} active={active}/>
      {detailsToDisplay}
    </div>
  );
}

export default MainBox;
