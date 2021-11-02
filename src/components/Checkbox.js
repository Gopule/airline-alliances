import React from "react";

const Checkbox = ({
  alliance,
  setAlliance,
  filterAllianceState,
  filterAirlineState,
}) => {
  return (
    <form id="checkbox-container">
      <div id="oneworld-checkbox">
        <input
          type="checkbox"
          onClick={(event) => {
            event.target.checked
              ? setAlliance([...alliance, "OW"])
              : setAlliance(filterAllianceState("OW"));
            filterAirlineState();
          }}
        />
        <label>Oneworld</label>
      </div>
      <div id="sky-team-cb">
        <input
          type="checkbox"
          onClick={(event) => {
            event.target.checked
              ? setAlliance([...alliance, "ST"])
              : setAlliance(filterAllianceState("ST"));
            filterAirlineState();
          }}
        />
        <label>Sky Team</label>
      </div>
      <div id="star-alliance-cb">
        <input
          type="checkbox"
          onClick={(event) => {
            event.target.checked
              ? setAlliance([...alliance, "SA"])
              : setAlliance(filterAllianceState("SA"));
            filterAirlineState();
          }}
        />
        <label>Star Alliance</label>
      </div>
    </form>
  );
};
export default Checkbox;
