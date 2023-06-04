import React from 'react';
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';
import Home from './pages/Home/Home';
import Users from './pages/Users/Users';
import User from './pages/User/User';
import NotFound from './pages/NotFound/NotFound';
import Layout from './components/Layout/Layout'

const App = () => {
  return (
    
    <div className='App'>
      <BrowserRouter>
      <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/users">Users</Link>
            </li>
         </ul>
        </nav>
        <Layout />
        <Routes>
          <Route path="/" element={<Home title="It's Home page" />} />
          <Route exact path="/users" element={<Users />} />
          <Route path="/users/:id" element={<User />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
export default App;