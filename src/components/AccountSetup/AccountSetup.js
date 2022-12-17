import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import "./AccountSetup.css";

const AccountSetup = () => {
  return (
    <Fragment>
      <center>
        <div className="container">
          <h2>CREATE YOUR NEW EACOP ACCOUNT HERE</h2>
          <fieldset>
            <legend className="legend">Account setup</legend>
            <label for="fname">
              First name:
              <br />{" "}
            </label>
            <input type="text" id="fname" name="fname" />
            <br />
            <br />
            <label for="lname">
              Last name:
              <br />{" "}
            </label>
            <input type="text" id="lname" name="lname" />
            <br />
            <br />
            <label for="email">
              Email:
              <br />{" "}
            </label>
            <input type="email" id="email" name="email" />
            <br />
            <br />
            <label for="password">Password: </label>
            <input type="password" id="password" name="password" />
            <br />
            <br />
            <input type="submit" value="submit" className="submit" />
          </fieldset>
          <br />
          <Link to="/">Back</Link>
        </div>
      </center>
    </Fragment>
  );
};

export default AccountSetup;
