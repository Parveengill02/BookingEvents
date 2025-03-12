import React, { useState } from "react";
import { Link } from "react-router-dom";
function ManageVenuePage() {
  const [venues, setVenues] = useState([
    
      {
        id: 1,
        name: "Hotel Taj Mahal Palace",
        location: "Apollo Bandar, Colaba, Mumbai, Maharashtra 400001, India",
        category: "Luxury Hotel",
        status: "Active",
        images: ["/images/v1.jpg"]
      },
      {
        id: 2,
        name: "ITC Grand Central",
        location: "287, Dr Baba Saheb Ambedkar Rd, Parel, Mumbai, Maharashtra 400012, India",
        category: "Banquet Hall",
        status: "Inactive",
        images: ["/images/v2.jpg"]
      },
      {
        id: 3,
        name: "The St. Regis Mumbai",
        location: "462, Senapati Bapat Marg, Lower Parel, Mumbai, Maharashtra 400013, India",
        category: "5-Star Hotel",
        status: "Active",
        images: ["/images/v4.jpg"]
      },
      {
        id: 4,
        name: "JW Marriott Mumbai Juhu",
        location: "Juhu Tara Rd, Juhu, Mumbai, Maharashtra 400049, India",
        category: "Beachfront Hotel",
        status: "Active",
        images: ["/images/v3.jpg"]
      },
      {
        id: 5,
        name: "Trident Hotel Bandra Kurla",
        location: "C-56, G Block, Bandra Kurla Complex, Mumbai, Maharashtra 400051, India",
        category: "Luxury Hotel",
        status: "Inactive",
        images: ["/images/v13.avif"]
      },
      {
        id: 6,
        name: "Four Seasons Hotel Mumbai",
        location: "1/136, Dr E Moses Rd, Worli, Mumbai, Maharashtra 400018, India",
        category: "Luxury Hotel",
        status: "Inactive",
        images: ["/images/v14.jpg"]
      },
      {
        id: 7,
        name: "Sofitel Mumbai BKC",
        location: "C-57, G Block, Bandra Kurla Complex, Mumbai, Maharashtra 400051, India",
        category: "Luxury Hotel",
        status: "Active",
        images: ["/images/s.webp"]
      },
      {
        id: 8,
        name: "Grand Hyatt Mumbai",
        location: "Off Western Express Hwy, Santacruz East, Mumbai, Maharashtra 400055, India",
        category: "Banquet Hall",
        status: "Inactive",
        images: ["/images/v18.jpg"]
      },
      {
        id: 9,
        name: "The Oberoi Mumbai",
        location: "Nariman Point, Mumbai, Maharashtra 400021, India",
        category: "Luxury Hotel",
        status: "Active",
        images: ["/images/v19.jpg"]
      },
      {
        id: 10,
        name: "Renaissance Mumbai Convention Centre Hotel",
        location: "2 & 3B, Near Chinmayanand Ashram, Powai, Mumbai, Maharashtra 400087, India",
        category: "Convention Centre",
        status: "Inactive",
        images: ["/images/v20.jpg"]
      }
  ]);

  const [modalOpen, setModalOpen] = useState(false);
  const [currentVenue, setCurrentVenue] = useState(null);
  const [newVenue, setNewVenue] = useState({
    id:"",
    name: "",
    location: "",
    category: "",
    status: "Active",
    images:""
  });

  const openModal = (venue = null) => {
    setCurrentVenue(venue);
    setNewVenue(
      venue
        ? { ...venue }
        : { name: "", location: "", category: "", status: "Active", images:""}
    );
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    setCurrentVenue(null);
  };

  const handleChange = (e) => {
    setNewVenue({ ...newVenue, [e.target.name]: e.target.value });
  };

  const handleSave = () => {
    if (currentVenue) {
      setVenues(
        venues.map((venue) =>
          venue.id === currentVenue.id ? { ...newVenue, id: currentVenue.id } : venue
        )
      );
    } else {
      setVenues([...venues, { ...newVenue, id: venues.length + 1 }]);
    }
    closeModal();
  };

  const handleDelete = (id) => {
    setVenues(venues.filter((venue) => venue.id !== id));
  };

  return (
    <div className="admin-venue-container">
      <h1 className="admin-venue-title">Manage Venues</h1>
      <button className="admin-venue-add-btn" onClick={() => openModal()}>
        + Add Venue
      </button>

      <table className="admin-venue-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Image</th>
            <th>Venue Name</th>
            <th>Location</th>
            <th>Category</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {venues.map((venue) => (
            <tr key={venue.id}>
              <td>{venue.id}</td>
              <td>
                <img src={venue.images}/></td>
              <td>{venue.name}
              <br/>
              <Link to={`/admin/detailvenue/${venue.name}`} className="text-blue-500 underline text-sm">
    View Details
  </Link>
              </td>
              

              <td>{venue.location}</td>
              <td>{venue.category}</td>
              <td
                className={
                  venue.status === "Active"
                    ? "admin-venue-active"
                    : "admin-venue-inactive"
                }
              >
                {venue.status}
              </td>
              <td className="admin-venues-button">
                <button
                  className="admin-venue-edit-btn"
                  onClick={() => openModal(venue)}
                >
                  Edit
                </button>
                <button
                  className="admin-venue-delete-btn"
                  onClick={() => handleDelete(venue.id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {modalOpen && (
        <div className="admin-venue-modal">
          <div className="admin-venue-modal-content">
            <h2>{currentVenue ? "Edit Venue" : "Add Venue"}</h2>
            <input
              type="text"
              name="name"
              placeholder="Venue Name"
              value={newVenue.name}
              onChange={handleChange}
            />
            <input
              type="text"
              name="location"
              placeholder="Location"
              value={newVenue.location}
              onChange={handleChange}
            />
            <input
              type="text"
              name="category"
              placeholder="Category"
              value={newVenue.category}
              onChange={handleChange}
            />
            <select name="status" value={newVenue.status} onChange={handleChange}>
              <option value="Active">Active</option>
              <option value="Inactive">Inactive</option>
            </select>
            <div className="admin-venue-modal-buttons">
              <button className="admin-venue-save-btn" onClick={handleSave}>
                Save
              </button>
              <button className="admin-venue-close-btn" onClick={closeModal}>
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default ManageVenuePage;
