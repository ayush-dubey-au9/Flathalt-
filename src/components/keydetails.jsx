import React from "react";
import "../Css/Keydetails.scss";
import { Select, MenuItem, InputLabel, FormControl } from "@material-ui/core";

const Keydetails = () => {
  return (
    <div className="details_container">
      <div className="Innerdetails">
        <div className="Header">
          <span>Keydetails*</span>
        </div>
        <div className="Labels">
          <div className="Label">
            <span>Floor</span>
            <FormControl>
              <InputLabel id="demo-simple-select-label">No.</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
              >
                <MenuItem value={10}>Ten</MenuItem>
                <MenuItem value={20}>Twenty</MenuItem>
                <MenuItem value={30}>Thirty</MenuItem>
              </Select>
            </FormControl>
          </div>
          <div className="Label">
            <span>Parking</span>
            <FormControl>
              <InputLabel id="demo-simple-select-label">Slot</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
              >
                <MenuItem value={10}>Ten</MenuItem>
                <MenuItem value={20}>Twenty</MenuItem>
                <MenuItem value={30}>Thirty</MenuItem>
              </Select>
            </FormControl>
          </div>
          <div className="Label">
            <span>Available from</span>
            <FormControl>
              <InputLabel id="demo-simple-select-label">Date</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
              >
                <MenuItem value={10}>Ten</MenuItem>
                <MenuItem value={20}>Twenty</MenuItem>
                <MenuItem value={30}>Thirty</MenuItem>
              </Select>
            </FormControl>
          </div>
          <div className="Label">
            <span>Age of property</span>
            <FormControl>
              <InputLabel id="demo-simple-select-label">Age</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
              >
                <MenuItem value={10}>Ten</MenuItem>
                <MenuItem value={20}>Twenty</MenuItem>
                <MenuItem value={30}>Thirty</MenuItem>
              </Select>
            </FormControl>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Keydetails;
