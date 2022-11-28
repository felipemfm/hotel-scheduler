import React from "react";
import LoginForm from "../component/LoginForm";

function NavBar() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-light">
        <div className="container-fluid  justify-content-between">
          <div>
            <p className="navbar-brand">Hotel Booking Manager</p>
          </div>
          <div>
            <LoginForm />
          </div>
        </div>
      </nav>
    </div>
  );
}

export default NavBar;
