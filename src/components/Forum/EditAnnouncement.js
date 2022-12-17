import React, { Fragment, useState, useEffect } from "react";
import Modal from "react-modal";
import axios from "axios";
import "./Announcements.css";
import { backendUrl } from "./Announcements";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    color: "red",
    width: "60%",
  },
};

const EditAnnouncement = ({ announcementObject }) => {
  let subtitle;
  const [isModalOpen, setIsOpenModal] = useState(false);
  const announcementId = announcementObject.announcement_id;
  const announcerName = announcementObject.announcer_name;
  const date = new Date();
  const [announcement, setAnnouncement] = useState(
    announcementObject.announcement
  );
  const [isAnnouncementEdited, setIsAnnouncementEdited] = useState(false);

  // api request here

  // edit todos
  const editAnnouncement = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.put(
        `${backendUrl}/edit-announcements/${announcementId}`,
        {
          announcement: announcement,
          announcerName: announcerName,
          announcementDate: JSON.stringify({ date: date }),
        }
      );
      console.log(response);
      setIsAnnouncementEdited(true);
    } catch (error) {
      console.log("error", error.message);
    }
  };
  useEffect(() => {
    setTimeout(() => {
      setIsAnnouncementEdited(false);
      setIsOpenModal(false);
    }, 1500);
  }, [isAnnouncementEdited]);

  const openModal = () => {
    setIsOpenModal(true);
  };

  const closeModal = () => {
    setIsOpenModal(false);
  };
  // On opening the modal function
  const afterOpenModal = () => {
    subtitle.style.color = "red";
  };

  return (
    <Fragment>
      <button onClick={openModal} className="edit-btn">
        Edit
      </button>
      <div>
        <Modal
          isOpen={isModalOpen}
          onAfterOpen={afterOpenModal}
          onRequestClose={closeModal}
          style={customStyles}
          ariaHideApp={false}
          contentLabel="Edit Announcement"
        >
          <div className="close-modal">
            <button onClick={closeModal}>Close</button>
          </div>
          <form onSubmit={editAnnouncement}>
            <input
              type="text"
              value={announcement}
              onChange={(event) => setAnnouncement(event.target.value)}
              placeholder="Edit announcement"
              required
            />
            <button type="submit">Edit Announcement</button>
            {isAnnouncementEdited && (
              <div>
                <span style={{ color: "green" }}>
                  Announcement Edited successfully
                </span>
              </div>
            )}
          </form>
        </Modal>
      </div>
    </Fragment>
  );
};

export default EditAnnouncement;
