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

const EditPost = ({ postObject }) => {
  let subtitle;
  const [isModalOpen, setIsOpenModal] = useState(false);
  const postId = postObject.post_id;
  const date = new Date();
  const [post, setPost] = useState(postObject.post);
  const [isPostEdited, setIsPostEdited] = useState(false);

  // api request here

  // edit todos
  const editPost = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.put(`${backendUrl}/edit-posts/${postId}`, {
        post: post,
        postDate: JSON.stringify({ date: date }),
      });
      console.log(response);
      setIsPostEdited(true);
    } catch (error) {
      console.log("error", error.message);
    }
  };

  useEffect(() => {
    setTimeout(() => {
      setIsPostEdited(false);
      setIsOpenModal(false);
    }, 1500);
  }, [isPostEdited]);

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
          contentLabel="Edit Post"
        >
          <div className="close-modal">
            <button onClick={closeModal}>Close</button>
          </div>
          <form onSubmit={editPost}>
            <input
              type="text"
              value={post}
              onChange={(event) => setPost(event.target.value)}
              placeholder="Edit post"
              required
            />
            <button type="submit">Edit Post</button>
            {isPostEdited && (
              <div>
                <span style={{ color: "green" }}>Post Edited successfully</span>
              </div>
            )}
          </form>
        </Modal>
      </div>
    </Fragment>
  );
};

export default EditPost;
