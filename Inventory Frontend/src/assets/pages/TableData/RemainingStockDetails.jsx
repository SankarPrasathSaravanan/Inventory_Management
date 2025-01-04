import React, { useState } from "react";
import Sidebar from "../../../components/appBar/Sidebar";
import { FaEdit, FaTrash } from "react-icons/fa"; // Importing icons from react-icons/fa

function RemainingStockDetails() {
  const [tableData, setTableData] = useState([
    {
      name: "Product 1",
      description: "Description 1",
      category: "Category 1",
      modelNo: "98765",
      orderDate: "2025-01-01",
      quality: "High",
      orderStatus: "In Stock",
    },
    {
      name: "Product 2",
      description: "Description 2",
      category: "Category 2",
      modelNo: "98766",
      orderDate: "2025-01-02",
      quality: "Medium",
      orderStatus: "In Stock",
    },
  ]);

  const [modalVisible, setModalVisible] = useState(false); // Track modal visibility
  const [editIndex, setEditIndex] = useState(null); // Track the product being edited
  const [formData, setFormData] = useState({}); // Form data for the modal

  // Handle Edit action: Open modal and set data
  const handleEdit = (index) => {
    setEditIndex(index);
    setFormData(tableData[index]); // Pre-fill the form with the selected product data
    setModalVisible(true); // Show the modal
  };

  // Handle Delete action
  const handleDelete = (index) => {
    const updatedData = tableData.filter((_, i) => i !== index); // Remove the product at the specified index
    setTableData(updatedData); // Update the state to reflect the deletion
  };

  // Handle form change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Handle form submit (Save changes)
  const handleSave = () => {
    const updatedData = [...tableData];
    updatedData[editIndex] = formData; // Update the edited product data
    setTableData(updatedData); // Update table data with new values
    setModalVisible(false); // Close the modal after saving
    alert("Product data updated");
  };

  return (
    <div className="d-flex">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <div className="container-fluid" style={{ flex: 1 }}>
        <div className="container mt-4">
          <h2>Remaining Stock</h2>
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

      {/* Modal Backdrop (Gray Overlay) */}
      {modalVisible && (
        <div
          className="modal-backdrop"
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundColor: "rgba(0, 0, 0, 0.5)", 
            zIndex: 1040, 
          }}
        />
      )}

      {/* Edit Modal */}
      {modalVisible && (
        <div
          className="modal show"
          style={{
            display: "block",
            position: "fixed",
            top: 0,
            left: 0,
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

export default RemainingStockDetails;
