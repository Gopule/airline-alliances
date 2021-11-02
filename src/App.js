import React, { useState } from "react";
import "./App.css";
import logo from "./logo.svg";
import useJSONP from "use-jsonp";
import Checkbox from "./components/Checkbox";
import Airline from "./components/Airline";

const App = () => {
  const [airlines, setAirlines] = useState([]);
  const [alliance, setAlliance] = useState([]);
  const [hoverStyle, setHoverStyle] = useState({});

  const sendJsonP = useJSONP({
    url: "https://kayak.com/h/mobileapis/directory/airlines/homework?callback=callbackParam",
    callback: (data) => setAirlines(allianceOnlyAirlines(data)),
    callbackParam: "jsonp",
  });
  sendJsonP();

  const allianceOnlyAirlines = (airlines) => {
    return airlines
      .filter((airline) => airline.alliance !== "none")
      .slice(0, 12);
  };

  const filterAllianceState = (removedAlliance) => {
    return alliance.filter(
      (curValAlliance) => curValAlliance !== removedAlliance
    );
  };

  const filterAirlineState = () => {
    if (!alliance.length) return airlines;
    return airlines.filter((airline) => alliance.includes(airline.alliance));
  };

  const formatWebsite = (websiteString) => {
    const http = "https://";
    const web = "www.";
    if (websiteString.slice(0, 8) === http)
      websiteString = websiteString.slice(8);
    if (websiteString.slice(0, 4) === web)
      websiteString = websiteString.slice(4);
    return websiteString;
  };

  const formatAlliance = (allianceInitials) => {
    switch (allianceInitials) {
      case "OW":
        return "Oneworld";
      case "ST":
        return "Sky Team";
      case "SA":
        return "Star Alliance";
      default:
        return "";
    }
  };

  return (
    <div>
      <img src={logo} alt="logo" id="logo" />
      <div id="content-container">
        <div id="all-contents">
          <p id="airline-text">Airlines</p>
          <p id="filter-text">Filter By Alliances</p>
          <Checkbox
            alliance={alliance}
            setAlliance={setAlliance}
            filterAllianceState={filterAllianceState}
            filterAirlineState={filterAirlineState}
          />

          <Airline
            filterAirlineState={filterAirlineState}
            formatAlliance={formatAlliance}
            formatWebsite={formatWebsite}
            hoverStyle={hoverStyle}
            setHoverStyle={setHoverStyle}
          />
        </div>
      </div>
    </div>
  );
};

export default App;
