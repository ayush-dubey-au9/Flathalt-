import "../Css/Amenities.scss";
import React from "react";
import { FormControlLabel, Checkbox } from "@material-ui/core";
import { BiFootball } from "react-icons/bi";

import { BsWifi } from "react-icons/bs";
import { CgGym } from "react-icons/cg";
import { SiAdguard } from "react-icons/si";
const Amenities = () => {
  return (
    <div className="Amenities_container">
      <div className="Amenities_inner">
        <span className="Header">Amenities *</span>
        <span style={{ color: "orange" }}>Please select the amenities below</span>
        <div className="Label_container">
          <div className="Amenity_label">
            <FormControlLabel
              id="Form_label"
              control={
                <Checkbox
                  icon={<BiFootball />}
                  checkedIcon={<BiFootball style={{ color: "black" }} />}
                  name="checkedH"
                />
              }
              label="Playground"
            />
          </div>
          <div className="Amenity_label">
            <FormControlLabel
              id="Form_label"
              control={
                <Checkbox
                  icon={<BsWifi />}
                  checkedIcon={<BsWifi style={{ color: "black" }} />}
                  name="checkedH"
                />
              }
              label="Internet Facility"
            />
          </div>
          <div className="Amenity_label">
            <FormControlLabel
              id="Form_label"
              control={
                <Checkbox
                  icon={<CgGym />}
                  checkedIcon={<CgGym style={{ color: "black" }} />}
                  name="checkedH"
                />
              }
              label="Gym"
            />
          </div>
          <div className="Amenity_label">
            <FormControlLabel
              id="Form_label"
              control={
                <Checkbox
                  icon={<SiAdguard />}
                  checkedIcon={<SiAdguard style={{ color: "black" }} />}
                  name="checkedH"
                />
            
              }
              label="Guard"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Amenities;
