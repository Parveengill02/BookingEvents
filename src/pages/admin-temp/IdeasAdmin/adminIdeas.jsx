import React, { useState } from "react";
import { FaPlus } from "react-icons/fa";
import { Link } from "react-router-dom";
import axios from "axios";

const AdminEventIdeas = () => {
  const [ideas, setIdeas] = useState([
    { id: 1, title: "Centerpieces & Tablescapes", image: "/images/ida.avif", category: "Decor" },
    { id: 2, title: "Floral & Decor", image: "/images/idb.avif", category: "Decor" },
    { id: 3, title: "Food & Drink", image: "/images/idc.avif", category: "Catering" },
    { id: 4, title: "Bars & Lounges", image: "/images/idd.avif", category: "Catering" },
    { id: 5, title: "Invitations", image: "/images/ide.avif", category: "Stationery" },
    { id: 6, title: "Dance Floors", image: "/images/idf.avif", category: "Entertainment" },
    { id: 7, title: "Lighting", image: "/images/idg.avif", category: "Decor" },
    { id: 8, title: "Entertainment", image: "/images/idh.avif", category: "Entertainment" }
  ]);
  
  const [newIdea, setNewIdea] = useState({ title: "", image: "", category: "" });
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState(""); 
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingIdea, setEditingIdea] = useState(null);
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  
  const handleAddIdea = async () => {
    if (newIdea.title && newIdea.image && newIdea.category) {
      try {
        const formData = new FormData();
        formData.append("title", newIdea.title);
        formData.append("category", newIdea.category);
  
        // Use "file" instead of "image" to match backend expectations
        if (newIdea.image instanceof File) {
          formData.append("file", newIdea.image);  // Now appending as "file"
        } else {
          alert("Please upload a valid image file.");
          return;
        }
  
        const token = localStorage.getItem("acess_token");
  
        const res = await axios.post(
          "http://localhost:9000/api/admin/add-ideas",
          formData,
          {
            headers: {
              "Content-Type": "multipart/form-data",
              acess_token: token,
            },
          }
        );
  
        setIdeas([...ideas, res.data.data]);
        setNewIdea({ title: "", image: "", category: "" });
        setIsAddModalOpen(false);
      } catch (error) {
        console.error("Error adding idea:", error);
        alert("Failed to add idea.");
      }
    } else {
      alert("Please fill all fields.");
    }
  };
  
  

  const handleDeleteIdea = (id) => {
    setIdeas(ideas.filter((idea) => idea.id !== id));
  };

  const handleEditIdea = (idea) => {
    setEditingIdea(idea);
    setIsModalOpen(true);
  };

  const handleSaveEdit = () => {
    setIdeas(ideas.map(idea => idea.id === editingIdea.id ? editingIdea : idea));
    setIsModalOpen(false);
    setEditingIdea(null);
  };

  const filteredIdeas = ideas.filter(
    (idea) =>
      idea.title.toLowerCase().includes(search.toLowerCase()) &&
      (filter ? idea.category === filter : true)
  );




  return (
    <div className="event-ideas-wrapper">
      <h1 className="ideas-title">Manage Event Ideas</h1>
      
      {/* Search and Filter */}
      <div className="search-filter-container">
        <input
          type="text"
          placeholder="Search ideas..."
          className="search-input-field"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <select
          className="category-filter"
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
        >
          <option value="">All Categories</option>
    <option value="Decor">Decor</option>
    <option value="Catering">Catering</option>
    <option value="Stationery">Stationery</option>
    <option value="Entertainment">Entertainment</option>
        </select>
      </div>

      {/* Add New Idea Button */}
      <button className="modal-cancel-btn" onClick={() => setIsAddModalOpen(true)}>
        <FaPlus className="add-idea-icon" /> Add New Idea
      </button>
      
      {/* Ideas Table */}
      <table className="event-ideas-table">
        <thead>
          <tr>
            <th>Image</th>
            <th>Title</th>
            <th>Category</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {filteredIdeas.map((idea) => (
            <tr key={idea.id}>
              <td><img src={idea.image} alt={idea.title} className="table-idea-image" /></td>
              <td>{idea.title}
              <br />
  <Link to={`/admin/admindetailIdeas/${idea.title}`} className="text-blue-500 underline text-sm">
    View Details
  </Link>
  </td>
              <td>{idea.category}</td>
              <td className="table-action-buttons">
                <button className="edit-idea-btn" onClick={() => handleEditIdea(idea)}>Edit</button>
                <button className="delete-idea-btn" onClick={() => handleDeleteIdea(idea.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Add Idea Modal */}
      {isAddModalOpen && (
        <div className="modal-backdrop">
          <div className="modal-box">
            <h2>Add New Idea</h2>
            <input
              type="text"
              className="modal-input"
              placeholder="Title"
              value={newIdea.title}
              onChange={(e) => setNewIdea({ ...newIdea, title: e.target.value })}
            />
           <input
  type="file"
  className="modal-input"
  accept="image/*"
  onChange={(e) => setNewIdea({ ...newIdea, image: e.target.files[0] })}
/>

            <input
              type="text"
              className="modal-input"
              placeholder="Category"
              value={newIdea.category}
              onChange={(e) => setNewIdea({ ...newIdea, category: e.target.value })}
            />
            <div className="modal-buttons-container">
              <button className="modal-cancel-btn" onClick={() => setIsAddModalOpen(false)}>Cancel</button>
              <button className="modal-save-btn" onClick={handleAddIdea}>Add</button>
            </div>
          </div>
        </div>
      )}

      {/* Edit Modal */}
      {isModalOpen && (
        <div className="modal-backdrop">
          <div className="modal-box">
            <h2>Edit Idea</h2>
            <input
              type="text"
              className="modal-input"
              value={editingIdea.title}
              onChange={(e) => setEditingIdea({ ...editingIdea, title: e.target.value })}
            />
            <input
  type="file"
  className="modal-input"
  accept="image/*"
  onChange={(e) => setNewIdea({ ...newIdea, image: e.target.files[0] })}
/>

            <input
              type="text"
              className="modal-input"
              value={editingIdea.category}
              onChange={(e) => setEditingIdea({ ...editingIdea, category: e.target.value })}
            />
            <div className="modal-buttons-container">
              <button className="modal-cancel-btn" onClick={() => setIsModalOpen(false)}>Cancel</button>
              <button className="modal-save-btn" onClick={handleSaveEdit}>Save</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AdminEventIdeas;
