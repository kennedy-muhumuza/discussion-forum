import React, { Fragment, useState, useEffect } from "react";
import axios from "axios";
// import Modal from "react-modal";
import { Link } from "react-router-dom";
import "./Announcements.css";

const FeedBack = () => {
  const hideIconBar = () => {
    var iconBar = document.getElementById("iconBar");
    var navigation = document.getElementById("navigation");
    iconBar.setAttribute("style", "display:none;");
    navigation.classList.remove("hide");
  };
  const showIconBar = () => {
    var iconBar = document.getElementById("iconBar");
    var navigation = document.getElementById("navigation");
    iconBar.setAttribute("style", "display:block;");
    navigation.classList.add("hide");
  };
  return (
    <center>
      <Link to="/todos-here">Go back to previous page</Link>
      <div>FeedBack</div>
      <header>
        <div className="navbar">
          <nav className="navigation hide" id="navigation">
            <ul className="nav-list">
              <span className="close-icon" onClick={() => showIconBar()}>
                <i className="fa fa-close"></i>
              </span>
              <li className="nav-item">
                <a href="dforum.html">Home</a>
              </li>
              <li className="nav-item">
                <a href="post.html">Forum</a>
              </li>
              <li className="nav-item">
                <a href="detail.html">Detail</a>
              </li>
            </ul>
          </nav>
          <a
            href="#"
            className="bar-icon"
            id="iconBar"
            onClick={() => hideIconBar()}
          >
            <i className="fa fa-bars"></i>
          </a>
          <div className="brand">EACOP DISCUSSION FORUM</div>
        </div>

        {/* <!-- search box --> */}
        <div className="search-box">
          <div>
            <select name="Descriptions" id="">
              <option value="everything">Everything</option>
              <option value="titles">Titles</option>
              <option value="descriptions">Descriptions</option>
            </select>
            <input type="text" name="q" placeholder="search ..." />
            <button>
              <i className="fa fa-search"></i>
            </button>
          </div>
        </div>
      </header>

      <div className="navigate">
        <span>
          <a href="#">My Forum - Topics</a> >> <a href="#">Random Topic</a>
        </span>
      </div>
      <div className="container">
        {/* <!-- navigation --> */}

        <div className="posts-table">
          <div className="table-head">
            <div className="status table-header">Status</div>
            <div className="subjects table-header">Subjects</div>
            <div className="replies table-header">Replies/Views</div>
            <div className="last-reply table-header">Last Reply</div>
          </div>
          <div className="table-row">
            <div className="status row">
              {" "}
              <i className="fa fa-frown-o"></i>
            </div>
            <div className="subjects row">
              <a href="#">
                How do you feel about our New MARS discussion forum
              </a>
              <br />
              <span>
                Stated by{" "}
                <b>
                  <a href="#">User</a>
                </b>
                .
              </span>
            </div>
            <div className="replies row">
              2 replies
              <br />
              125 views
            </div>
            <div className="last-reply row">
              15th Aug 2022
              <br />
              By <a href="#">Rodah</a>
            </div>
          </div>
          {/* <!-- more --> */}
          <div className="table-row">
            <div className="status row">
              {" "}
              <i className="fa fa-frown-o"></i>
            </div>
            <div className="subjects row">
              <a href="#">
                How do you feel about our New MARS discussion forum
              </a>
              <br />
              <span>
                Stated by{" "}
                <b>
                  <a href="#">User</a>
                </b>
                .
              </span>
            </div>
            <div className="replies row">
              2 replies
              <br />
              125 views
            </div>
            <div className="last-reply row">
              15th Aug 2022
              <br />
              By <a href="#">Rodah</a>
            </div>
          </div>
          {/* <!-- more --> */}
          <div className="table-row">
            <div className="status row">
              {" "}
              <i className="fa fa-frown-o"></i>
            </div>
            <div className="subjects row">
              <a href="#">
                How do you feel about our New MARS discussion forum
              </a>
              <br />
              <span>
                Stated by{" "}
                <b>
                  <a href="#">User</a>
                </b>
                .
              </span>
            </div>
            <div className="replies row">
              2 replies
              <br />
              125 views
            </div>
            <div className="last-reply row">
              15th Aug 2022
              <br />
              By <a href="#">Rodah</a>
            </div>
          </div>
          {/* <!-- more --> */}
          <div className="table-row">
            <div className="status row">
              {" "}
              <i className="fa fa-frown-o"></i>
            </div>
            <div className="subjects row">
              <a href="#">
                How do you feel about our New MARS discussion forum
              </a>
              <br />
              <span>
                Stated by{" "}
                <b>
                  <a href="#">User</a>
                </b>
                .
              </span>
            </div>
            <div className="replies row">
              2 replies
              <br />
              125 views
            </div>
            <div className="last-reply row">
              15th Aug 2022
              <br />
              By <a href="#">Rodah</a>
            </div>
          </div>
          {/* <!-- more --> */}
          <div className="table-row">
            <div className="status row">
              {" "}
              <i className="fa fa-frown-o"></i>
            </div>
            <div className="subjects row">
              <a href="#">
                How do you feel about our New MARS discussion forum
              </a>
              <br />
              <span>
                Stated by{" "}
                <b>
                  <a href="#">User</a>
                </b>
                .
              </span>
            </div>
            <div className="replies row">
              2 replies
              <br />
              125 views
            </div>
            <div className="last-reply row">
              15th Aug 2022
              <br />
              By <a href="#">Rodah</a>
            </div>
          </div>
          {/* <!-- more --> */}
          <div className="table-row">
            <div className="status row">
              {" "}
              <i className="fa fa-frown-o"></i>
            </div>
            <div className="subjects row">
              <a href="#">
                How do you feel about our New MARS discussion forum
              </a>
              <br />
              <span>
                Stated by{" "}
                <b>
                  <a href="#">User</a>
                </b>
                .
              </span>
            </div>
            <div className="replies row">
              2 replies
              <br />
              125 views
            </div>
            <div className="last-reply row">
              15th Aug 2022
              <br />
              By <a href="#">Rodah</a>
            </div>
          </div>
          {/* <!-- more --> */}
          {/* <!-- more --> */}
        </div>

        {/* <!-- pagination --> */}

        <div className="pagination">
          pages: <a href="#">1</a>
          <a href="#">2</a>
          <a href="#">3</a>
          <a href="#">4</a>
          <a href="#">5</a>
        </div>
      </div>

      <div className="note">
        <span>
          <i className="fa fa-frown-o"></i>&nbsp; 0 Engagement Topic <br />
        </span>
        <span>
          <i className="fa fa-book"></i>&nbsp; Low Engagement Topic <br />
        </span>
        <span>
          <i className="fa fa-fire"></i>&nbsp; Popular Topic <br />
        </span>
        <span>
          <i className="fa fa-rocket"></i>&nbsp; high Engagement Topic <br />
        </span>
        <span>
          <i className="fa fa-lock"></i>&nbsp; Closed Topic <br />
        </span>
      </div>
      <footer>
        <span>&copy; &nbsp;Muhumuza JohnKennedy | All Rights Reserved</span>
      </footer>
    </center>
  );
};

export default FeedBack;
