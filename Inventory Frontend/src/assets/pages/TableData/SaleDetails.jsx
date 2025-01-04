import React, { useState } from "react";
import Sidebar from "../../../components/appBar/Sidebar";
import { FaEdit, FaTrash } from "react-icons/fa"; 

function SaleDetails() {
  const [modalVisible, setModalVisible] = useState(false); 
  const [editIndex, setEditIndex] = useState(null);
  const [formData, setFormData] = useState({}); 

  const tableData = [
    {
      name: "Product 1",
      description: "Description 1",
      category: "Category 1",
      modelNo: "12345",
      orderDate: "2025-01-01",
      quality: "High",
      orderStatus: "Shipped",
    },
    {
      name: "Product 2",
      description: "Description 2",
      category: "Category 2",
      modelNo: "12346",
      orderDate: "2025-01-02",
      quality: "Medium",
      orderStatus: "Pending",
    },
  ];

  const handleEdit = (index) => {
    setEditIndex(index);
    setFormData(tableData[index]); 
    setModalVisible(true);
  };

  const handleDelete = (index) => {
    alert(`Delete product at index ${index}`);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Handle form submit (Save data)
  const handleSave = () => {
    const updatedData = [...tableData];
    updatedData[editIndex] = formData; // Update the edited row with new data
    
    alert("Product data updated");
    setModalVisible(false); 
  };

  return (
    <div className="d-flex">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <div className="container-fluid" style={{ flex: 1 }}>
        <div className="container mt-4">
          <h2>Sale Products</h2>
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
                <th>Actions</th> {/* New column for Edit/Delete */}
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
                  <td>
                    {/* Edit and Delete icons */}
                    <FaEdit
                      style={{
                        cursor: "pointer",
                        marginRight: "10px",
                        color: "green",
                      }}
                      onClick={() => handleEdit(index)}
                    />
                    <FaTrash
                      style={{ cursor: "pointer", color: "red" }}
                      onClick={() => handleDelete(index)}
                    />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Backdrop */}
      {modalVisible && (
        <div
          className="modal-backdrop fade show"
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundColor: "rgba(0, 0, 0, 0.5)",
            zIndex: 1040, 
          }}
        ></div>
      )}

      {/* Edit Modal */}
      {modalVisible && (
        <div
          className="modal show"
          style={{
            display: "block",
            position: "fixed",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            zIndex: 1050, 
          }}
          tabIndex="-1"
          aria-labelledby="editModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="editModalLabel">
                  Edit Product
                </h5>
                <button
                  type="button"
                  className="close"
                  data-dismiss="modal"
                  aria-label="Close"
                  onClick={() => setModalVisible(false)}
                >
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div className="modal-body">
                <div className="form-group">
                  <label>Name</label>
                  <input
                    type="text"
                    className="form-control"
                    name="name"
                    value={formData.name || ""}
                    onChange={handleChange}
                  />
                </div>
                <div className="form-group">
                  <label>Description</label>
                  <input
                    type="text"
                    className="form-control"
                    name="description"
                    value={formData.description || ""}
                    onChange={handleChange}
                  />
                </div>
                <div className="form-group">
                  <label>Category</label>
                  <input
                    type="text"
                    className="form-control"
                    name="category"
                    value={formData.category || ""}
                    onChange={handleChange}
                  />
                </div>
                <div className="form-group">
                  <label>Model No</label>
                  <input
                    type="text"
                    className="form-control"
                    name="modelNo"
                    value={formData.modelNo || ""}
                    onChange={handleChange}
                  />
                </div>
                <div className="form-group">
                  <label>Order Date</label>
                  <input
                    type="text"
                    className="form-control"
                    name="orderDate"
                    value={formData.orderDate || ""}
                    onChange={handleChange}
                  />
                </div>
                <div className="form-group">
                  <label>Quality</label>
                  <input
                    type="text"
                    className="form-control"
                    name="quality"
                    value={formData.quality || ""}
                    onChange={handleChange}
                  />
                </div>
                <div className="form-group">
                  <label>Order Status</label>
                  <input
                    type="text"
                    className="form-control"
                    name="orderStatus"
                    value={formData.orderStatus || ""}
                    onChange={handleChange}
                  />
                </div>
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  data-dismiss="modal"
                  onClick={() => setModalVisible(false)}
                >
                  Close
                </button>
                <button type="button" className="btn btn-primary" onClick={handleSave}>
                  Save changes
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default SaleDetails;
