import React from 'react';
import { BrowserRouter as Router, Routes, Route ,Routes } from 'react-router-dom';

const Home = () => <h1>Home Page</h1>;
const Users = ({ users }) => (
  <>
    <h1>Users Page</h1>
    <ul>
      {users.map(user => (
        <li key={user.id}>
          <Link to={`/users/${user.id}`}>{user.name}</Link>
        </li>
      ))}
    </ul>
  </>
);
const User = ({ user }) => (
  <>
    <h1>User Page</h1>
    <p>Name: {user.name}</p>
    <p>Email: {user.email}</p>
  </>
);
const NotFound = () => <h1>404 Not Found</h1>;

const CustomLink = ({ to, children }) => {
  const handleClick = e => {
    e.preventDefault();
    window.location.href = to;
  };

  return <a href={to} onClick={handleClick}>{children}</a>;
};

const App = () => {
  const [users, setUsers] = React.useState([]);

  React.useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => res.json())
      .then(data => setUsers(data))
      .catch(err => console.log(err));
  }, []);

  return (
    <Router>
      <div>
        <header>
          <CustomLink to="/">Home</CustomLink>
          <CustomLink to="/users">Users</CustomLink>
        </header>

        <main>
          <Routes>
            <Route exact path="/" component={Home} />
            <Route exact path="/users" render={() => <Users users={users} />} />
            <Route exact path="/users/:id" render={({ match }) => {
              const user = users.find(user => user.id.toString() === match.params.id);
              if (user) {
                return <User user={user} />;
              } else {
                return <NotFound />;
              }
            }} />
            <Route component={NotFound} />
          </Routes>
        </main>

        <footer>
          <p>&copy; 2021 My App</p>
        </footer>
      </div>
    </Router>
  );
};

export default App;