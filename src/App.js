import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import FakeApi from "./components/FakeApi/FakeApi";
import Home from "./components/Forum/Home";
import Login from "./components/Login/Login";
import AccountSetup from "./components/AccountSetup/AccountSetup";
import Announcements from "./components/Forum/Announcements";
import DiscForum from "./components/Forum/DiscForum";
import FeedBack from "./components/Forum/FeedBack";
import Blogs from "./components/Forum/Blogs";
import RandomPosts from "./components/Forum/RandomPosts";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/account-setup" element={<AccountSetup />} />
          <Route path="/fake-api" element={<FakeApi />}></Route>
          <Route path="/todos-here" element={<Home />}></Route>
          <Route path="/announcements-here" element={<Announcements />}></Route>
          <Route path="/main-forum-here" element={<DiscForum />}></Route>
          <Route path="/feedback-here" element={<FeedBack />}></Route>
          <Route path="/blogs-here" element={<Blogs />}></Route>
          <Route path="/random-posts-here" element={<RandomPosts />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;

{
  /* <Route path="/" element={<FakeApi />} />
       <Route path="/kenny" element={<Todo />} /> */
}
