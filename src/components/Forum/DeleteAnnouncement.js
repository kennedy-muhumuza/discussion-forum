import React, { Fragment, useState, useEffect } from "react";
import axios from "axios";
import { backendUrl } from "./Announcements";
import Modal from "react-modal";
import "./Announcements.css";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    color: "black",
    width: "60%",
  },
};

const DeleteAnnouncement = ({ announcementObject }) => {
  //   let subtitle;
  const [isModalOpen, setIsOpenModal] = useState(false);
  const announcementId = announcementObject.announcement_id;
  const [isAnnouncementDeleted, setIsAnnouncementDeleted] = useState(false);

  //   api request

  const deleteAnnouncement = async () => {
    try {
      console.log("Deleting announcement...");
      const response = await axios.delete(
        `${backendUrl}/delete-announcements/${announcementId}`
      );
      console.log(response);
      setIsAnnouncementDeleted(true);
    } catch (error) {
      console.log("error", error.message);
    }
  };

  const openModal = () => {
    setIsOpenModal(true);
  };

  const closeModal = () => {
    setIsOpenModal(false);
  };
  // On opening the modal function
  const afterOpenModal = () => {
    // subtitle.style.color = "black";
  };

  //   close success msg and close modal

  useEffect(() => {
    setTimeout(() => {
      setIsAnnouncementDeleted(false);
      setIsOpenModal(false);
    }, 3000);
  }, [isAnnouncementDeleted]);

  return (
    <Fragment>
      <button onClick={openModal} className="delete-btn">
        Delete
      </button>
      <div>
        <Modal
          isOpen={isModalOpen}
          onAfterOpen={afterOpenModal}
          onRequestClose={closeModal}
          style={customStyles}
          ariaHideApp={false}
          contentLabel="Delete Announcement"
        >
          <div className="close-modal">
            <button onClick={closeModal}>Close</button>
          </div>
          {isAnnouncementDeleted && (
            <div>
              <span style={{ color: "green" }}>
                Announcement deleted successfully
              </span>
            </div>
          )}

          {!isAnnouncementDeleted && (
            <>
              <div>
                <h4 style={{ color: "red" }}>
                  Are you you to delete announcement:{" "}
                  <span style={{ color: "blue" }}>
                    "{announcementObject.announcement}"
                  </span>
                </h4>
              </div>
              <div>
                <button onClick={deleteAnnouncement}>
                  Delete Announcement
                </button>
              </div>
            </>
          )}
        </Modal>
      </div>
    </Fragment>
  );
};

export default DeleteAnnouncement;
