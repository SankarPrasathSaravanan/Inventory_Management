import React from "react";
import Sidebar from "../../../components/appBar/Sidebar";
function SoldDetails() {
  const tableData = [
    {
      name: "Product 1",
      description: "Description 1",
      category: "Category 1",
      modelNo: "54321",
      orderDate: "2025-01-01",
      quality: "High",
      orderStatus: "Shipped",
    },
    {
      name: "Product 2",
      description: "Description 2",
      category: "Category 2",
      modelNo: "54322",
      orderDate: "2025-01-02",
      quality: "Medium",
      orderStatus: "Delivered",
    },
  ];

  return (
    <div className="d-flex">
    {/* Sidebar */}
    <Sidebar />

    {/* Main Content */}
    <div className="container-fluid" style={{ flex: 1 }}>
      <div className="container mt-4">
        <h2>Sold Products</h2>
        <table className="table table-bordered">
          <thead>
            <tr>
              <th>Name</th>
              <th>Description</th>
              <th>Category</th>
              <th>Model No</th>
              <th>Order Date</th>
              <th>Quality</th>
              <th>Order Status</th>
            </tr>
          </thead>
          <tbody>
            {tableData.map((item, index) => (
              <tr key={index}>
                <td>{item.name}</td>
                <td>{item.description}</td>
                <td>{item.category}</td>
                <td>{item.modelNo}</td>
                <td>{item.orderDate}</td>
                <td>{item.quality}</td>
                <td>{item.orderStatus}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  </div>
  );
}

export default SoldDetails;
