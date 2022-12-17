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

const DeletePost = ({ postObject }) => {
  //   let subtitle;
  const [isModalOpen, setIsOpenModal] = useState(false);
  const postId = postObject.post_id;
  const [isPostDeleted, setIsPostDeleted] = useState(false);

  //   api request

  const deletePost = async () => {
    try {
      console.log("Deleting Post...");
      const response = await axios.delete(
        `${backendUrl}/delete-post/${postId}`
      );
      console.log(response);
      setIsPostDeleted(true);
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
      setIsPostDeleted(false);
      setIsOpenModal(false);
    }, 2000);
  }, [isPostDeleted]);

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
          contentLabel="Delete Post"
        >
          <div className="close-modal">
            <button onClick={closeModal}>Close</button>
          </div>
          {isPostDeleted && (
            <div>
              <span style={{ color: "green" }}>Post deleted successfully</span>
            </div>
          )}

          {!isPostDeleted && (
            <>
              <div>
                <h4 style={{ color: "red" }}>
                  Are you you to delete post:{" "}
                  <span style={{ color: "blue" }}>"{postObject.post}"</span>
                </h4>
              </div>
              <div>
                <button onClick={deletePost}>Delete Post</button>
              </div>
            </>
          )}
        </Modal>
      </div>
    </Fragment>
  );
};

export default DeletePost;
