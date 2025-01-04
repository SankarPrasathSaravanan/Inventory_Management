import React from "react";
import { useNavigate } from "react-router-dom";
import Sidebar from "../../../components/appBar/Sidebar";
import { Bar, Line } from "react-chartjs-2";
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, LineElement, PointElement, Title, Tooltip, Legend } from "chart.js";

ChartJS.register(CategoryScale, LinearScale, BarElement, LineElement, PointElement, Title, Tooltip, Legend);

function Home() {
  const navigate = useNavigate();

  const handleCardClick = (cardTitle) => {
    navigate(`/${cardTitle.toLowerCase()}`);
  };

  const barData = {
    labels: ["Sale", "Sold", "Remaining Stock"],
    datasets: [
      {
        label: "Products",
        data: [250, 50, 150],
        backgroundColor: ["#007bff", "#28a745", "#ffc107"], 
        borderWidth: 1,
      },
    ],
  };

  const lineData = {
    labels: ["January", "February", "March", "April", "May"],
    datasets: [
      {
        label: "Sales Trend",
        data: [30, 45, 60, 90, 120],
        borderColor: "#007bff",
        backgroundColor: "rgba(0, 123, 255, 0.1)",
        fill: true,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: "Product Distribution",
      },
    },
    scales: {
      x: {
        grid: {
          display: true, 
        },
      },
      y: {
        grid: {
          display: true, 
        },
      },
    },
  };

  const lineOptions = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: "Sales Trend",
      },
    },
    scales: {
      x: {
        grid: {
          display: true, 
        },
      },
      y: {
        grid: {
          display: false, 
        },
      },
    },
  };

  return (
    <div className="d-flex">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <div className="container-fluid mt-5"> 
        {/* Cards */}
        <div className="row mt-4">
          {/* Card 1 - Sale */}
          <div className="col-md-4 mb-4">
            <div
              className="card bg-white shadow-sm"
              onClick={() => handleCardClick("sale")}
              style={{ cursor: "pointer" }}
            >
              <div className="card-body">
                <h5 className="card-title">Sale</h5>
                <p className="card-text">Total: 250 Products</p>
                <button className="btn btn-primary">View Details</button>
              </div>
            </div>
          </div>

          {/* Card 2 - Sold */}
          <div className="col-md-4 mb-4">
            <div
              className="card bg-white shadow-sm"
              onClick={() => handleCardClick("sold")}
              style={{ cursor: "pointer" }}
            >
              <div className="card-body">
                <h5 className="card-title">Sold</h5>
                <p className="card-text">Total: 50 Products</p>
                <button className="btn btn-primary">View Details</button>
              </div>
            </div>
          </div>

          {/* Card 3 - Remaining Stock */}
          <div className="col-md-4 mb-4">
            <div
              className="card bg-white shadow-sm"
              onClick={() => handleCardClick("remaining-stock")}
              style={{ cursor: "pointer" }}
            >
              <div className="card-body">
                <h5 className="card-title">Remaining Stock</h5>
                <p className="card-text">Total: 150 Stock Items</p>
                <button className="btn btn-primary">View Details</button>
              </div>
            </div>
          </div>
        </div>

        {/* Bar Chart */}
        <div className="row mb-4">
          <div className="col-md-5">
            <div className="card bg-white shadow-sm" style={{ borderRadius: "10px" }}>
              <div className="card-body">
                <h5 className="card-title">Product Distribution</h5>
                <div style={{ height: "300px", width: "100%" }}>
                  <Bar data={barData} options={options} />
                </div>
              </div>
            </div>
          </div>

          {/* Line Chart */}
          <div className="col-md-5">
            <div className="card bg-white shadow-sm" style={{ borderRadius: "10px" }}>
              <div className="card-body">
                <h5 className="card-title">Sales Trend</h5>
                <div style={{ height: "300px", width: "100%" }}>
                  <Line data={lineData} options={lineOptions} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
