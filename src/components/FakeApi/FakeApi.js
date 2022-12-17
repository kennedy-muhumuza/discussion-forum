import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import "./FakeApi.css";
const FakeApi = () => {
  return (
    <Fragment>
      <center>
        <div className="fake-api">
          <h3>FAKE API</h3>
          <p>
            Where API stands for: <br />
            <strong>Application programming interface</strong>
          </p>
        </div>
        
      <div>
        <p>
          To access the discussion forum,{" "}
          <Link to="/todos-here">Click here</Link>
        </p>
      </div>
      <div>
        <Link to="/">Go to previous page</Link>
      </div>
      </center>
    </Fragment>
  );
};

export default FakeApi;
