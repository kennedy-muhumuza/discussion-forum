import React, { Fragment, useState, useEffect } from "react";
import axios from "axios";
// import Modal from "react-modal";
import { Link } from "react-router-dom";
import "./Announcements.css";
const RandomPosts = () => {
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

  // comment
  const showComment = () => {
    var commentArea = document.getElementById("comment-area");
    commentArea.setAttribute("style", "display:block;");
  };

  const showReply = (event) => {
    var replyArea = document.getElementById("reply-area");
    replyArea.setAttribute("style", "display:block;");
    event.preventDefault();
  };
  return (
    <center>
      <Link to="/todos-here">Go back to previous page</Link>
      <div>RandomPosts</div>

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
          <a href="#">My Forum - Forums</a>>><a href="#">Random Forum</a>
          >> <a href="#">Random Forum</a>
          >> <a href="#">Random Forum</a> >> <a href="#">Random Forum</a>
        </span>
      </div>
      <div className="topic-container">
        <div className="head">
          <div className="authors">Author</div>
          <div className="content">Topic: post's Title (Read 1258 times)</div>
        </div>
        <div className="body">
          <div className="authors">
            <div className="username">
              <a href="#">Username</a>
            </div>
            <div>Role</div>
            <img src="" alt="" />
            <div>
              Posts: <u>45</u>
            </div>
            <div>
              Points: <u>2456</u>
            </div>
          </div>

          <div className="content">
            Just random content of a random post. <br />
            To see how it looks like
            <br />
            <br />
            Nothing else...
            <hr />
            Regards Username
            <div className="comment">
              <button onClick={() => showComment()}>Comment</button>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- comment-area --> */}
      <div className="comment-area hide" id="comment-area">
        <textarea
          name="comment"
          id=""
          placeholder="Comment here ..."
        ></textarea>
        <input type="submit" value="submit" />
      </div>
      {/* <!-- show comments --> */}
      <div className="comments-container">
        <div className="head">
          <div className="authors">Author</div>
          <div className="content">Comments</div>
        </div>
        <div className="body">
          <div className="authors">
            <div className="AnotherUser">
              <a href="#">Username</a>
            </div>
            <div>Role</div>
            <img src="" alt="" />
            <div>
              Posts: <u>45</u>
            </div>
            <div>
              Points: <u>2456</u>
            </div>
          </div>

          <div className="content">
            Just random comment of a random post. <br />
            To see how it looks like
            <br />
            <br />
            Nothing else...
            <div className="comment">
              <button onClick={() => showReply()}>Reply</button>
            </div>
          </div>
        </div>
        {/* <!-- replies --> */}
        <div className="comment-area hide" id="reply-area">
          <form>
            <textarea
              name="comment"
              id=""
              placeholder="Reply here ..."
            ></textarea>
            <input type="submit" value="submit" />
          </form>
        </div>
      </div>
      <footer>
        <span>&copy; &nbsp;Muhumuza JohnKennedy | All Rights Reserved</span>
      </footer>
    </center>
  );
};

export default RandomPosts;
