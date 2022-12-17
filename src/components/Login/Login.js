import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import "./Login.css";

const Login = () => {
  return (
    <Fragment>
      <center>
        <div>You are currently not logged in</div>
        <h1>EACOP DISCUSSION FORUM</h1>
        {/* 
      <select>
        <option value="beginner" selected="selected">
          <Link to="/">Home</Link>
        </option>
        <option value="intermediate">
          <Link to="/">About</Link>
        </option>
        <option value="advanced">
          {" "}
          <Link to="/">Contact us</Link>
        </option>
        <option value="professional">
          <Link to="/account-setup">Account setup</Link>
        </option>
      </select> */}
        {/* <div className="hr-tag-container"></div> */}
        <div className="header-login-container">
          <div className="nav-hr-tag-holder">
            <div className="header-container">
              <div className="hr-bottom">
                <hr className="hr-tag"></hr>
              </div>
              <nav>
                <ul>
                  <li>
                    <Link to="/" className="link">
                      Home
                    </Link>
                  </li>
                  <li>
                    <Link to="/" className="link">
                      About
                    </Link>
                  </li>
                  <li>
                    <Link to="/" className="link">
                      Contact
                    </Link>
                  </li>
                  <li>
                    <Link to="/" className="link">
                      posts
                    </Link>
                  </li>
                </ul>
              </nav>
              <div className="hr-bottom">
                <hr className="hr-tag"></hr>
              </div>
            </div>
          </div>
          <div className="login-wrapper">
            <h3>LOGIN HERE</h3>
            <form action="/anything-on-backend">
              <div>
                <label htmlFor="f-name">First Name: </label>
                <input type="text" name="f-name" className="input" />
              </div>
              <br />
              <div>
                <label htmlFor="l-name">Last Name: </label>
                <input type="text" name="l-name" className="input" />
              </div>
              <br />
              <div>
                <label htmlFor="email">Your Email: </label>
                <input type="email" name="email" className="input" />
              </div>
              <br />
              <div>
                <label htmlFor="password">Password: </label>
                <input type="password" name="password" className="input" />
              </div>

              <div className="remember-username">
                <input type="checkbox" />
                <p>Remember username</p>
              </div>
              <button className="login">Log In</button>
            </form>
          </div>
        </div>
        <p>
          Forgotten your password?{" "}
          <Link to="/" className="link">
            Click here{" "}
          </Link>{" "}
          to reset it
        </p>

        <br />
        <div className="create-new-account-wrapper">
          <p className="first-time-msg">Is this your first time here?</p>
          <p>
            For full access to this site, you first need to{" "}
            <Link to="/account-setup">
              <button className="create-account-button">
                Create new account
              </button>
            </Link>{" "}
          </p>
        </div>
        <Link to="/fake-api" className="link">
          FAKE API HERE
        </Link>
      </center>
      <div className="copy-right">
        <p>All rights reserved &copy; Timothy</p>
      </div>
    </Fragment>
  );
};
export default Login;
