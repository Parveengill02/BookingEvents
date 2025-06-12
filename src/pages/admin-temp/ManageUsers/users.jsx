import { Pencil, Trash, CheckCircle, XCircle, PlusCircle, Eye } from "lucide-react";
import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const ManageUsers = () => {
  const [users, setUsers] = useState([]);
  const [search, setSearch] = useState("");
  const [modal, setModal] = useState(null);
  const [formData, setFormData] = useState({});

  useEffect(() => {
    fetchUserList();
  }, []);

  const fetchUserList = async () => {
    try {
      const token = localStorage.getItem("acess_token");
      const response = await axios.get("http://localhost:9000/api/admin/userlist", {
        headers: {
          acess_token: token,
        },
      });
      console.log(response.data.data)
      setUsers(response.data.data);
    } catch (error) {
      console.error("Error fetching user list:", error);
    }
  };

  const openModal = (type, data = {}) => {
    setModal(type);
    setFormData({
      id: data.id || null,
      fullName: data?.user_detail?.fullName || "",
      Email: data.Email || "",
    });
  };

  const closeModal = () => {
    setModal(null);
    setFormData({});
  };

  const handleSaveUser = async () => {
    try {
      const token = localStorage.getItem("acess_token");

      if (modal === "editUser") {
        await axios.put(`http://localhost:9000/api/admin/updateuser/${formData.id}`, formData, {
          headers: { acess_token: token },
        });
      } else if (modal === "addUser") {
        await axios.post("http://localhost:9000/api/admin/createuser", formData, {
          headers: { acess_token: token },
        });
      }

      fetchUserList();
      closeModal();
    } catch (error) {
      console.error("Error saving user:", error);
    }
  };

  const toggleStatus = async (id, currentStatus) => {
    try {
      const token = localStorage.getItem("acess_token");
      const newStatus = currentStatus === "Active" ? "Suspended" : "Active";

      await axios.patch(`http://localhost:9000/api/admin/updatestatus/${id}`, { status: newStatus }, {
        headers: { acess_token: token },
      });

      fetchUserList();
    } catch (error) {
      console.error("Error toggling user status:", error);
    }
  };

  const handleDelete = async (id) => {
    try {
      const token = localStorage.getItem("acess_token");

      await axios.delete(`http://localhost:9000/api/admin/deleteuser/${id}`, {
        headers: { acess_token: token },
      });

      setUsers(users.filter((user) => user.id !== id));
    } catch (error) {
      console.error("Error deleting user:", error);
    }
  };

  const filteredUsers = users.filter((user) => {
    const fullName = user?.user_detail?.fullName?.toLowerCase() || '';
    const Email = user?.Email?.toLowerCase() || '';
    const searchTerm = search.toLowerCase();
  
    return fullName.includes(searchTerm) || Email.includes(searchTerm);
  });
  

  return (
    <div className="manage-users-container">
      <h2 className="manage-users-title">Manage Users</h2>

      {/* <div className="manage-users-controls">
        <input
          className="manage-users-search"
          placeholder="Search users..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div> */}

      {/* <button className="manage-users-add-btn" onClick={() => openModal("addUser")}>
        <PlusCircle size={20} /> Add New User
      </button> */}

      <div className="manage-users-table-container">
        <table className="manage-users-table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Username</th>
              <th>Email</th>
              <th>Role</th>
              {/* <th>Status</th>
              <th>Last Login</th>
              <th>Actions</th> */}
            </tr>
          </thead>
          <tbody>
            {filteredUsers.map((user) => (
              <tr key={user.id}>
                <td>{user.id}</td>
                <td>{user?.user_detail?.fullname}</td>
                <td>{user.Email}</td>
                <td>{user?.role?.role}</td>
                {/* <td>
                  <button
                    className="manage-users-status-btn"
                    onClick={() => toggleStatus(user.id, user.status)}
                  >
                    {user.status === "Active" ? (
                      <CheckCircle className="status-active" size={20} />
                    ) : (
                      <XCircle className="status-suspended" size={20} />
                    )}
                    <span>{user.status}</span>
                  </button>
                </td>
                <td>{user.lastLogin || "Never"}</td>
                <td className="manage-users-actions">
                  <button className="edit-btn" onClick={() => openModal("editUser", user)}>
                    <Pencil size={16} />
                  </button>
                  <button className="delete-btn" onClick={() => handleDelete(user.id)}>
                    <Trash size={16} />
                  </button>
                  <Link to={`/admin/detailuser/${user.id}`}>
                    <button className="view-btn">
                      <Eye size={16} /> View Details
                    </button>
                  </Link>
                </td> */}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* MODAL */}
      {modal && (
        <div className="modal-backdrop">
          <div className="modal-box">
            <span className="modal-close" onClick={closeModal}>
              &times;
            </span>
            <h2>{modal === "editUser" ? "Edit User" : "Add User"}</h2>
            <label>
              Full Name:
              <input
                className="modal-input"
                value={formData.fullName || ""}
                onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
              />
            </label>
            <label>
              Email:
              <input
                className="modal-input"
                value={formData.email || ""}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              />
            </label>
            <button className="modal-save-btn" onClick={handleSaveUser}>
              {modal === "editUser" ? "Save Changes" : "Add User"}
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ManageUsers;
