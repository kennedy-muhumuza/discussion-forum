import React, { Fragment, useState, useEffect } from "react";
// import useLocalStorage from useLocalStorage;
import axios from "axios";
// import Modal from "react-modal";
import { Link } from "react-router-dom";
// import "./Todo.css";
// import EditTodo from "./EditTodo";
// import MarkTodo from "./MarkTodo";
// import DeleteTodo from "./DeleteTodo";
import "./Home.css";

export const ThemeContext = React.createContext();

const Home = () => {
  const [darkBlueBackground, setDarkBlueBackground] = useState(true);

  const toggleBackground = () => {
    setDarkBlueBackground((prevdarkBlueBackground) => !prevdarkBlueBackground);
  };
  const themeStyles = {
    backgroundColor: darkBlueBackground ? "#0e1538" : "#CCC",
    // backgroundColor: darkBlueBackground ? "#333" : "#CCC",

    color: darkBlueBackground ? "#CCC" : "#333",
    padding: "10rem",
    margin: "2rem",
  };

  // const [background, setBackground] = useState();
  const [isBackgroundDarkBlue, setIsBackgroundDarkBlue] = useState(true);
  // const [isBackgroundOther, setIsBackgroundOther] = useState(false);
  // const backgroundContainer = () => {
  //   return document.getElementsByClassName("container");
  // };
  // const blackColor = () => {
  //   backgroundContainer.style.backgroundColor = "#000";
  //   // return "#000";
  // };
  const backgroundContainer = document.getElementById("container");

  const setWhiteBackgroundColor = () => {
    backgroundContainer.style.backgroundColor = "#fff";
  };

  const setDarkBlueBackgroundColor = () => {
    backgroundContainer.style.backgroundColor = "#0e1538";
  };

  const switchBackgroundColor = () => {
    console.log(backgroundContainer);
    if (backgroundContainer == null) {
      console.log("element null");
      return;
    }
    if (backgroundContainer.style.backgroundColor == "#fff") {
      setDarkBlueBackgroundColor();
    } else {
      setWhiteBackgroundColor();
    }
  };

  // useEffect(() => {
  //   setTimeout(() => {
  //     setIsTodoDeleted(false);
  //     setIsOpenModal(false);
  //   }, 3000);
  // }, [isTodoDeleted]);

  // useEffect(() => {
  //   setBackground(() => {
  //     setIsBackgroundDarkBlue(true);
  //     setIsBackgroundOther(false);
  //   });
  // }, [background]);

  // const changeBackground = () => {
  //   isBackgroundDarkBlue ? blackColor : whiteColor;
  // };
  // style={themeStyles}

  return (
    <Fragment>
    {/* <div style={themeStyles} className="home"> */}
    <div  className="home">
      <div id="container">
        <Link to="/">Go back to previous page</Link>
        <br />
        <button className="toggle-bg" onClick={() => toggleBackground()}>
          Toggle bg
        </button>
        <h1 className="mars">EACOP DISCUSSION FORUM</h1>
        <div className="sub-container">
          <div className="categories">
            <h2>CATEGORIES</h2>
          </div>
          <div className="announcement-container">
            <div className="announcements">
              <Link to="/announcements-here">
                <h3>Announcements</h3>
              </Link>

              <p>Announcements regarding our Discussion community</p>
            </div>
            <div className="topics">
              <h3>0</h3>
              <p>TOPICS</p>
            </div>
            <div className="posts">
              <h3>0</h3>
              <p>POSTS</p>
            </div>
            <div className="border-1"></div>
            <div className="post-info">
              <p>No new posts</p>
            </div>
          </div>
          <div className="announcement-container">
            <div className="announcements">
              <Link to="/main-forum-here">
                <h3>General Discussion</h3>
              </Link>
              <p>
                A place to talk about whatever is on your mind, any day, anytime
              </p>
            </div>
            <div className="topics">
              <h3>0</h3>
              <p>TOPICS</p>
            </div>
            <div className="posts">
              <h3>0</h3>
              <p>POSTS</p>
            </div>
            <div className="border-2"></div>
            <div className="post-info">
              <div className="welcome-msg">
                <p>Welcome to our brand new discussion forum </p>
                <p>where interactions are unrestricted in any way...</p>
              </div>
            </div>
          </div>
          <div className="announcement-container">
            <div className="announcements">
              <Link to="/feedback-here">
                <h3>Feedback and comments</h3>
              </Link>
              <p>
                Got a question? Ask!Got an idea or complaint? please let us know
              </p>
            </div>
            <div className="topics">
              <h3>0</h3>
              <p>TOPICS</p>
            </div>
            <div className="posts">
              <h3>0</h3>
              <p>POSTS</p>
            </div>
            <div className="border-3"></div>
            <div className="post-info">
              <p>No new posts</p>
            </div>
          </div>
          <div className="announcement-container">
            <div className="announcements">
              <Link to="/blogs-here">
                <h3>Blogs</h3>
              </Link>
              <p>
                Whatever interests you, interests us. Share all your interesting
                posts here.
              </p>
            </div>
            <div className="topics">
              <h3>0</h3>
              <p>TOPICS</p>
            </div>
            <div className="posts">
              <h3>0</h3>
              <p>POSTS</p>
            </div>
            <div className="border-4"></div>
            <div className="post-info">
              <p>No new posts</p>
            </div>
          </div>
        </div>
        <div className="announcement-container">
          <div className="announcements">
            <Link to="/random-posts-here">
              <h3>Random posts</h3>
            </Link>
            <p>These are just random posts</p>
          </div>
          <div className="topics">
            <h3>0</h3>
            <p>TOPICS</p>
          </div>
          <div className="posts">
            <h3>0</h3>
            <p>POSTS</p>
          </div>
          <div className="border-4"></div>
          <div className="post-info">
            <p>No new posts</p>
          </div>
        </div>
        <div className="footer">
          Powered by MPGS | Research and innovation Department
          <div>
            <p>We are one Family</p>
          </div>
          All rights reserved &copy; Timothy
        </div>
      </div>
    </div>
    </Fragment>
  );
};

export default Home;
