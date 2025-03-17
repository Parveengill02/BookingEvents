import React, { useState } from "react";
import { Pencil, Trash, CheckCircle, XCircle, PlusCircle,Eye} from "lucide-react";
import { Link } from "react-router-dom";

const initialUsers = [
  { id: 1, username: "john_doe", email: "user1@example.com", role: "User", status: "Active", lastLogin: "2025-03-01 10:30 AM" },
  { id: 2, username: "jane_smith", email: "user2@example.com", role: "User", status: "Suspended", lastLogin: "2025-02-28 03:45 PM" },
  { id: 3, username: "mike_jordan", email: "user3@example.com", role: "Admin", status: "Active", lastLogin: "2025-03-02 08:15 AM" },
  { id: 4, username: "sarah_lee", email: "user4@example.com", role: "User", status: "Active", lastLogin: "2025-02-27 09:00 PM" },
  { id: 5, username: "david_clark", email: "user5@example.com", role: "Admin", status: "Suspended", lastLogin: "2025-02-25 02:10 PM" },
  { id: 6, username: "linda_moore", email: "user6@example.com", role: "User", status: "Active", lastLogin: "2025-03-01 11:45 AM" },
  { id: 7, username: "peter_wilson", email: "user7@example.com", role: "User", status: "Active", lastLogin: "2025-02-26 07:30 AM" },
  { id: 8, username: "emma_jones", email: "user8@example.com", role: "Admin", status: "Suspended", lastLogin: "2025-02-20 06:20 PM" },
  { id: 9, username: "robert_brown", email: "user9@example.com", role: "User", status: "Active", lastLogin: "2025-03-02 12:00 PM" },
  { id: 10, username: "olivia_taylor", email: "user10@example.com", role: "User", status: "Suspended", lastLogin: "2025-02-18 04:50 PM" }
];


const ManageUsers = () => {
  const [users, setUsers] = useState(initialUsers);
  const [search, setSearch] = useState("");
  const [modal, setModal] = useState(null);
  const [formData, setFormData] = useState({});

  const openModal = (type, data = {}) => {
    setModal(type);
    setFormData(data);
  };

  const closeModal = () => {
    setModal(null);
    setFormData({});
  };

  const handleSaveUser = () => {
    if (modal === "editUser") {
      setUsers(users.map((u) => (u.id === formData.id ? formData : u)));
    } else if (modal === "addUser") {
      const newUser = { ...formData, id: Date.now(), role: "User", status: "Active", lastLogin: "Never" };
      setUsers([...users, newUser]);
    }
    closeModal();
  };

  const toggleStatus = (id) => {
    setUsers(users.map((user) => (user.id === id ? { ...user, status: user.status === "Active" ? "Suspended" : "Active" } : user)));
  };

  const handleDelete = (id) => {
    setUsers(users.filter((user) => user.id !== id));
  };

  return (
    <div className="manage-users-container">
      <h2 className="manage-users-title">Manage Users</h2>
      
      <div className="manage-users-controls">
        <input className="manage-users-search" placeholder="Search users..." value={search} onChange={(e) => setSearch(e.target.value)} />
      </div>
      
      <button className="manage-users-add-btn" onClick={() => openModal("addUser")}>
        <PlusCircle size={20} /> Add New User
      </button>

      <div className="manage-users-table-container">
        <table className="manage-users-table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Username</th>
              <th>Email</th>
              <th>Role</th>
              <th>Status</th>
              <th>Last Login</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {users
              .filter((user) => user.username.toLowerCase().includes(search.toLowerCase()))
              .map((user) => (
                <tr key={user.id}>
                  <td>{user.id}</td>
                  <td>{user.username}</td>
                  <td>{user.email}</td>
                  <td>{user.role}</td>
                  <td>
                    <button className="manage-users-status-btn" onClick={() => toggleStatus(user.id)}>
                      {user.status === "Active" ? <CheckCircle className="status-active" size={20} /> : <XCircle className="status-suspended" size={20} />}
                      <span>{user.status}</span>
                    </button>
                  </td>
                  <td>{user.lastLogin}</td>
                  <td className="manage-users-actions">
                    <button className="edit-btn" onClick={() => openModal("editUser", user)}>
                      <Pencil size={16} />
                    </button>
                    <button className="delete-btn" onClick={() => handleDelete(user.id)}>
                      <Trash size={16} />
                    </button>
                    <Link to={`/admin/detailuser/${user.id}`}>
                    <button className="view-btn" >
                      <Eye size={16} /> View Details
                    </button>
                    </Link>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>

      {/* MODAL */}
      {modal && (
        <div className="modal-backdrop">
          <div className="modal-box">
            <span className="modal-close" onClick={closeModal}>&times;</span>
            <h2>{modal === "editUser" ? "Edit User" : "Add User"}</h2>
            <label>
              Username:
              <input className="modal-input" value={formData.username || ""} onChange={(e) => setFormData({ ...formData, username: e.target.value })} />
            </label>
            <label>
              Email:
              <input className="modal-input" value={formData.email || ""} onChange={(e) => setFormData({ ...formData, email: e.target.value })} />
            </label>
            <button className="modal-save-btn" onClick={handleSaveUser}>{modal === "editUser" ? "Save Changes" : "Add User"}</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ManageUsers;
