import React from "react";
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import Home from "./pages/Home/Home";
import Users from "./pages/Users/Users";
import User from "./pages/User/User";
import NotFound from "./pages/NotFound/NotFound";
import Layout from "./components/Layout/Layout";
import AboutUs from "./pages/AboutUs/AboutUs";
import Contacts from "./pages/Contacts/Contacts";
import "../src/App.css";

function switchTheme() {
  const currentTheme = document.documentElement.dataset.theme;

  if (currentTheme === "dark") {
    document.documentElement.dataset.theme = "light";
  } else {
    document.documentElement.dataset.theme = "dark";
  }
}

const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <button onClick={switchTheme}>Switch Theme</button>
        <style jsx={true}>{`
          :root {
            --bg-color: white;
            --primary-color: #ff0000;
            --secondary-color: rgb(113, 128, 150);
          }

          [data-theme="dark"] {
            --bg-color: #121212;
            --primary-color: #f4f4f6;
            --secondary-color: #da70d6;
          }
          div {
            background: var(--bg-color);
            transition: background 0.5s;
          }
          p {
            color: var(--secondary-color);
          }
          h1 {
            color: var(--primary-color);
          }
        `}</style>

        <nav>
          <ul>
            <li>
              <Link to="/" >Home</Link>
            </li>
            <li>
              <Link to="/users">Users</Link>
            </li>
            <li>
              <Link to="/AboutUs">About Us</Link>
            </li>
            <li>
              <Link to="/Contacts">Contacts</Link>
            </li>
          </ul>
        </nav>
        <Layout />
        <Routes>
          <Route path="/" element={<Home title="It's Home page" />} />
          <Route exact path="/users" element={<Users />} />
          <Route path="/users/:id" element={<User />} />
          <Route path="/AboutUs" element={<AboutUs />} />
          <Route path="/Contacts" element={<Contacts />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};
export default App;
