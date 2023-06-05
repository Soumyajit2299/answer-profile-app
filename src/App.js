import { Link, Route, Switch } from "react-router-dom";
import GenInfo from "./components/GenInfo";
import { useState } from "react";
import Profile from "./components/Profile";

function App() {
  const [userData, setUserData] = useState([]);
  const handleFetch = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("https://randomuser.me/api");
      const data = await response.json();
      setUserData(data);
    } catch (error) {
      console.log(error.meesage);
    }
  };
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-primary">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            Navbar
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <button
                  type="button"
                  className="btn btn-info btn-sm"
                  style={{ marginTop: "6px", marginLeft: "20px" }}
                  onClick={handleFetch}
                >
                  Fetch User
                </button>
              </li>
            </ul>
            <div className="d-flex">
              <Link className="navbar-brand" to="/profile">
                <img
                  src={userData && userData.results && userData.results.length> 0 ? userData.results[0].picture.thumbnail : "https://randomuser.me/api/portraits/thumb/men/92.jpg"}
                  style={{ borderRadius: "20px" }}
                  alt="avatar"
                />
              </Link>
            </div>
          </div>
        </div>
      </nav>
      <Switch>
        <Route exact path="/" render={(props) => <GenInfo {...props} userData={userData}/>} />
        <Route exact path="/profile" render={(props) => <Profile {...props} userData={userData}/>} />
      </Switch>
    </>
  );
}

export default App;
