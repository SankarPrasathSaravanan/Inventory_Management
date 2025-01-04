import React from "react";
import { FaUser } from "react-icons/fa";

const Sidebar = () => {
  return (
    <div className="d-flex flex-column flex-shrink-0 p-3 bg-light" style={{ width: "280px", height: "100vh" }}>
      <a href="/" className="d-flex align-items-center mb-3 mb-md-0 me-md-auto link-dark text-decoration-none">
        <span className="fs-4">Inventory <span className="">(Admin)</span></span>
      </a>
      <hr />
      <ul className="nav nav-pills flex-column mb-auto">
        <li className="nav-item">
          <a href="#" className="nav-link active" aria-current="page">
            Products
          </a>
        </li>
        <li>
          <a href="#" className="nav-link link-dark">
            Suppliers
          </a>
        </li>
        <li>
          <a href="#" className="nav-link link-dark">
            Stock
          </a>
        </li>
      </ul>
      <hr />
      <div className="dropdown">
        <a
          href="#"
          className="d-flex align-items-center link-dark text-decoration-none dropdown-toggle"
          id="dropdownUser2"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          <FaUser size={20} className="me-2" />
          <strong>Username</strong>
        </a>
        <ul className="dropdown-menu text-small shadow" aria-labelledby="dropdownUser2">
          <li>
            <a className="dropdown-item" href="#">
              Profile
            </a>
          </li>
          <li>
            <a className="dropdown-item" href="#">
              Logout
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
