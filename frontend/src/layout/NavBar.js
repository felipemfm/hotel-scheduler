import React from "react";
import LoginForm from "../component/LoginForm";

export default function NavBar() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-light">
        <div className="container-fluid row justify-content-between">
          <div className="col-4">
            <p className="navbar-brand">Hotel Booking Manager</p>
          </div>
          <div className="col-4">
            <LoginForm />
          </div>
        </div>
      </nav>
    </div>
  );
}
