import React, { Fragment, useState, useEffect } from "react";
import axios from "axios";
// import Modal from "react-modal";
import "./Blogs.css";
import { Link } from "react-router-dom";

const Blogs = () => {
  return (
    <center>
      <Link to="/todos-here">Go back to previous page</Link>
      <div>
        <h1>BLOGS</h1>
        <p>All our Blogs and posts relevant to our course (Oil and gas industry) will be displayed here.</p>
        <div>
          <div className="blog-titles">
            <h2>Post 1</h2>
          <div className="actual-post">
              <p>This virtual space is reserved for all the next posts/blogs that <br/>
              shall be authentic and informative as far as<br/>
                the Petroleum sector is concerned. this will encourage research and teamwork<br/> and who knows,
                this could turn out to be a great source of job opportunity <br/>awareness for all of us in the near future.
                We encourage you all to be active and uitilize this <br/>free resource that was offered freely and <br/>
                lovingly to us all. </p>          
          </div>
          </div>
          <div className="comments">
            <h3>Comments</h3>
            <div className="comment-input">
            <input type="text" placeholder="Add your comment..." className="real-input-space"/>
            <button className="Post-btn">Post</button>
            </div>
            <div className="other-comments">
            </div>
          </div>
      
        </div>
      </div>
    </center>
  );
};

export default Blogs;
