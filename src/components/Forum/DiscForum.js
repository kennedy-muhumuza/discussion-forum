import React, { Fragment, useState, useEffect } from "react";
import axios from "axios";
// import Modal from "react-modal";
import { Link } from "react-router-dom";
import { backendUrl } from "./Announcements";
import "./DiscForum.css";
import EditPost from "./EditPost";
import DeletePost from "./DeletePost";

const DiscForum = () => {
  const [backendPosts, setBackendPosts] = useState([]);
  const [post, setPost] = useState("");
  const [postTitle, setPostTitle] = useState("");
  const [posterName, setPosterName] = useState("");

  const date = new Date();

  const postChangeHandler = (event) => {
    setPost(event.target.value);
    console.log(post);
  };
  const posterNameChangeHandler = (event) => {
    setPosterName(event.target.value);
    console.log(posterName);
  };
  const postTitleChangeHandler = (event) => {
    setPostTitle(event.target.value);
    console.log(postTitle);
  };

  // Add POSTS;
  const addPostHandler = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post(`${backendUrl}/add-post`, {
        post: post,
        postTitle: postTitle,
        postDate: JSON.stringify({ date: date }), //{ date:'2020:57:56t5'}
      });
      setPost("");
      setPostTitle("");
      setPosterName("");
      console.log(response);
    } catch (error) {
      console.log("error", error.message);
    }
  };

  useEffect(() => {
    const getPostHandler = async () => {
      try {
        const response = await axios.get(`${backendUrl}/get-posts`);
        console.log(response);
        setBackendPosts(response.data.posts);
      } catch (error) {
        console.log("error", error.message);
      }
    };
    getPostHandler();
  }, []);

  // provides format  -> Sun Jul 03 2022;ss
  const getDateString = (dateObject) => {
    const date = new Date(JSON.parse(dateObject).date);
    return date.toDateString();
  };
  //provides format  -> 3:47 AM
  const getTime = (dateObject) => {
    const date = new Date(JSON.parse(dateObject).date);
    return date.toLocaleTimeString("en-Us", {
      hour: "numeric",
      minute: "numeric",
      hour12: true,
    });
  };

  return (
    <center>
      <Link to="/todos-here">Go back to previous page</Link>
      <div>GENERAL DISCUSSION</div>
      <header>
        <div className="navbar">
          <nav className="navigation hide" id="navigation">
            <ul className="nav-list">
              <span className="close-icon" onclick="showIconBar()">
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
          <a href="#" className="bar-icon" id="iconBar" onclick="hideIconBar()">
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

      <div className="container">
        <div className="subforum">
          <div className="subforum-title">
            <h2>GENERAL DISCUSSION POSTS</h2>
          </div>
          <form className="form" onSubmit={(event) => addPostHandler(event)}>
            <input
              className="input-announcements"
              type="text"
              value={post}
              onChange={(event) => postChangeHandler(event)}
              placeholder="Post here..."
              required
            />
            <input
              className="input-announcements"
              type="text"
              value={postTitle}
              onChange={(event) => postTitleChangeHandler(event)}
              placeholder="Post title here..."
              required
            />
            <input
              className="input-announcements"
              type="text"
              value={posterName}
              onChange={(event) => posterNameChangeHandler(event)}
              placeholder="Your name here..."
              required
            />
            <button className="add-announcements" type="submit">
              POST
            </button>
          </form>

          <div className="backend-posts">
            {backendPosts.map((backendPost, index) => {
              return (
                <div key={index} className="subforum-row-in-discforum">
                  <div className="subforum-icon subforum-column center">
                    <i className="fa fa-car">{index + 1}</i>
                  </div>
                  <div className="subforum-description subforum-column">
                    <p>
                      {" "}
                      <strong>
                        <h1>
                          <a href="">{backendPost.post_description}</a>
                        </h1>
                      </strong>
                      {backendPost.post}
                      <div className="edit-delete-components">
                        <EditPost postObject={backendPost} />
                        <DeletePost postObject={backendPost} />
                      </div>
                    </p>
                  </div>
                  <div className="subforum-column">
                    2 replies
                    <br />
                    125 views
                  </div>
                  <div className="subforum-info subforum-column">
                    <b>
                      {" "}
                      <a href="">Last Post</a>
                    </b>
                    <br></br> by{" "}
                    <b>
                      <a href="">Just A User: {posterName}</a>
                    </b>
                    on{" "}
                    <small>
                      {" "}
                      {
                        <>
                          <span>{getDateString(backendPost.post_date)}</span>{" "}
                          <span>{getTime(backendPost.post_date)}</span>
                        </>
                      }
                    </small>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <hr className="subforum-divider"></hr>

      <footer>
        <span>&copy; &nbsp;Muhumuza JohnKennedy | All Rights Reserved</span>
      </footer>
    </center>
  );
};

export default DiscForum;
