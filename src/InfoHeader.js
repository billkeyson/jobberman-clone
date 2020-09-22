import React from "react";
import "./InfoHeader.css";
import PlayCircleFilledWhiteOutlinedIcon from "@material-ui/icons/PlayCircleFilledWhiteOutlined";
import Button from "@material-ui/core/Button";

import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import { OutlinedInput } from '@material-ui/core';

function InfoHeader() {
  return (
    <div
      className="infor_header"
      style={{
        backgroundImage:
          "url(https://www.jobberman.com.gh/build/static-assets/img/jobberman-theme/jm-jobseeker-hero-out-d01559eeee.jpg)",
      }}
    >
      <div className="info_header_top">
        <p>
          Discover tools & techniques to manage your team through disruption.
          Get your FREE Employer Handbook! <span>DOWNLOAD NOW</span>
        </p>
      </div>

      <div className="info_header_middle">
        <h3 className="info_header_title">Header Title</h3>
        <h4 className="info_header_subtitle">
          Get the Right Job Vacancies & Careers in Ghana
        </h4>

        <p className="info_header_description">
          We will boost your skills and profile, provide you with personalised
          career guidance and match you with the right opportunities, so that
          you can be the Best and the Brightest.
        </p>
      </div>
      <div className="info_header_join">
        <PlayCircleFilledWhiteOutlinedIcon />

        <Button variant="contained" color="primary">
          Join
        </Button>
      </div>

      <div className="info_header_bottom">
    
        {/* <Select
        autoWidth="false"
        label="All Jobs Functions"
          id="controlled-open-select"
          value={"Information Tech"}
        >
            <MenuItem value="" disabled>
            Placeholder
          </MenuItem>
          <MenuItem >Information Tech</MenuItem>
          <MenuItem>Technical Tech</MenuItem>
          <MenuItem >Fianance</MenuItem>
        </Select>


        <Select
        autoWidth="false"
        labelWidth={12}
        label="All Jobs Functions"
          id="controlled-open-select"
          value={"Information Tech"}
        >
          <MenuItem >Information Tech</MenuItem>
          <MenuItem>Technical Tech</MenuItem>
          <MenuItem >Fianance</MenuItem>
        </Select>

        <Select
        autoWidth="false"
        labelWidth={12}
        label="All Jobs Functions"
          id="controlled-open-select"
          value={"Information Tech"}
        >
          <MenuItem >Information Tech</MenuItem>
          <MenuItem>Technical Tech</MenuItem>
          <MenuItem >Fianance</MenuItem>
        </Select> */}

        <button>Submit</button>
      </div>
    </div>
  );
}

export default InfoHeader;
