import React from "react";

const Airline = ({
  filterAirlineState,
  formatAlliance,
  formatWebsite,
  hoverStyle,
  setHoverStyle,
}) => {
  return (
    <div id="airlines-container">
      {filterAirlineState().map((airline, idx) => (
        <div
          key={idx}
          className="airline"
          onMouseEnter={() => {
            setHoverStyle({ id: idx, display: "block" });
          }}
          onMouseLeave={() => {
            setHoverStyle({});
          }}
        >
          <div className="single-airline-content">
            <img
              src={`https://kayak.com${airline.logoURL}`}
              alt={airline.name}
            />
            <div>
              <p className="airline-name">{airline.name}</p>
              <div
                style={
                  hoverStyle.id === idx ? hoverStyle.style : { display: "none" }
                }
              >
                <p className="alliance-phone">
                  {formatAlliance(airline.alliance)}
                </p>
                <p className="alliance-phone">{airline.phone}</p>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href={airline.site}
                  className="website-text"
                >
                  {formatWebsite(airline.site)}
                </a>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Airline;
