import React, { center, useState, useEffect } from "react";
import axios from "axios";
// import Modal from "react-modal";
import { Link, useNavigate } from "react-router-dom";
import "./Announcements.css";
import EditAnnouncement from "./EditAnnouncement";
import DeleteAnnouncement from "./DeleteAnnouncement";

export const backendUrl = "http://localhost:4000";
const Announcements = () => {
  const [backendAnnouncements, setBackendAnnouncements] = useState([]);
  const [announcement, setAnnouncement] = useState("");
  const [descriptionTitle, setDescriptionTitle] = useState("");
  const [announcerName, setAnnouncerName] = useState("");
  const [selectValue, setSelectValue] = useState("");
  const navigate = useNavigate();
  const date = new Date();

  const navigateToLogin = () => {
    console.log("naviogating to login");
    navigate({ replace: true }, "/");
  };

  // useEffect(()=>{
  //   if (selectValue ==="Every")
  // },[selectValue])

  const announcementChangeHandler = (event) => {
    setAnnouncement(event.target.value);
    console.log(announcement);
  };
  const announcerNameChangeHandler = (event) => {
    setAnnouncerName(event.target.value);
    console.log(announcerName);
  };
  const announcementTitleChangeHandler = (event) => {
    setDescriptionTitle(event.target.value);
    console.log(descriptionTitle);
  };

  // Add announcements;
  const addAnnouncementHandler = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post(`${backendUrl}/add-announcements`, {
        announcement: announcement,
        announcementTitle: descriptionTitle,
        announcerName: announcerName,
        announcementDate: JSON.stringify({ date: date }), //{ date:'2020:57:56t5'}
      });
      setAnnouncement("");
      setDescriptionTitle("");
      setAnnouncerName("");
      console.log(response);
    } catch (error) {
      console.log("error", error.message);
    }
  };

  useEffect(() => {
    const getAnnouncementHandler = async () => {
      try {
        const response = await axios.get(`${backendUrl}/get-announcements`);
        console.log(response);
        setBackendAnnouncements(response.data.announcements);
      } catch (error) {
        console.log("error", error.message);
      }
    };
    getAnnouncementHandler();
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

      <div>Announcements</div>
      <header>
        <div className="navbar">
          <nav className="navigation hide" id="navigation">
            <ul className="nav-list">
              <span className="close-icon">
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
          <a href="#" className="bar-icon" id="iconBar">
            <i className="fa fa-bars"></i>
          </a>
          <div className="brand">EACOP DISCUSSION FORUM</div>
        </div>

        {/* <!-- search box --> */}
        <div className="search-box">
          <div>
            {/* <button className="first-dropdown-menu">Everything</button> */}
            <select name="Descriptions" id="" className="drop-down-menu">
              {/* <option value="everything" onSelect={() => navigateToLogin()}>
                Everything
              </option> */}
              <option value={selectValue}>Everything</option>
              {/* <option value="everything">Everything</option> */}
              <option value={selectValue}>Titles</option>
              {/* <option value="titles">Titles</option> */}
              <option value={selectValue}>Descriptions</option>
              {/* <option value="descriptions">Descriptions</option> */}
            </select>
            <input type="text" name="q" placeholder="search ..." />
            <button className="search-icon">
              <i className="fa fa-search"></i>
            </button>
          </div>
        </div>
      </header>

      <div className="container">
        <div className="subforum">
          <div className="subforum-title">
            <h2>GENERAL ANNOUNCEMENTS</h2>
          </div>
          <form
            className="form"
            onSubmit={(event) => addAnnouncementHandler(event)}
          >
            <input
              className="input-announcements"
              type="text"
              value={announcement}
              onChange={(event) => announcementChangeHandler(event)}
              placeholder="Announcement here..."
              required
            />
            <input
              className="input-announcements"
              type="text"
              value={descriptionTitle}
              onChange={(event) => announcementTitleChangeHandler(event)}
              placeholder="Announcement title here..."
              required
            />
            <input
              className="input-announcements"
              type="text"
              value={announcerName}
              onChange={(event) => announcerNameChangeHandler(event)}
              placeholder="Your name here..."
              required
            />
            <button className="add-announcements" type="submit">
              POST
            </button>
          </form>

          <div className="backend-announcements">
            {backendAnnouncements.map((backendAnnouncement, index) => (
              <div key={index} className="subforum-row">
                <div className="subforum-icon subforum-column center">
                  <i className="fa fa-car">{index + 1}</i>
                </div>
                <div className="subforum-description subforum-column">
                  <h1>
                    <a href="">
                      Description Title:{" "}
                      {backendAnnouncement.announcement_description}
                    </a>
                  </h1>
                  <p>
                    {" "}
                    <strong>ANNOUNCEMENT:</strong>
                    <br /> {backendAnnouncement.announcement}
                    <br />
                    <div className="edit-delete-components">
                      <EditAnnouncement
                        announcementObject={backendAnnouncement}
                      />
                      <DeleteAnnouncement
                        announcementObject={backendAnnouncement}
                      />
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
                    <a href="">Just A User: {backendAnnouncement.announcer_name}</a>
                  </b>
                  on{" "}
                  <small>
                    {" "}
                    {
                      <>
                        <span>
                          {getDateString(backendAnnouncement.announcement_date)}
                        </span>{" "}
                        <span>
                          {getTime(backendAnnouncement.announcement_date)}
                        </span>
                      </>
                    }
                  </small>
                </div>
              </div>
            ))}
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

export default Announcements;
