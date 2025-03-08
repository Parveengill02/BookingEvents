import { useState } from "react";
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid, Legend } from "recharts";
import { Link } from "react-router-dom";
const initialVendors = [
  { 
    id: 1,
    name: "Mgmakeovers",
    category: "Event Planner - Specializing in bridal makeovers and wedding planning.",
    location: "Gurugram, Haryana",
    albums: "Albums: 1",
    image: "/images/d1.webp",
    sale: 1000
  },
  {
    id: 2,
    name: "Shaadi Saga",
    category: " Event Planner - Helping you plan your dream wedding with top vendors.",
    location: "Mumbai, Maharashtra",
    albums: "Albums: 3",
    image: "/images/d2.webp",
    sale: 3000
  },
  {
    id: 3,
    name: "U&I FotoClics Studios",
    category: " Photographer - Capturing your precious wedding moments beautifully.",
    location: "Gurugram, Haryana",
    albums: "Albums: 0",
    image: "/images/d3.jpg",
    sale: 0
  },
  {
    id: 4,
    name: "Pixel Memories",
    category: " Photographer - Experts in candid and cinematic wedding photography.",
    location: "Kolkata, West Bengal",
    albums: "Albums: 3",
    image: "/images/d4.jpg",
    sale: 3000
  },
  {
    id: 5,
    name: "Royal Feast",
    category: " Caterer - Serving luxurious and delicious wedding feasts.",
    location: "Delhi, India",
    albums: "Albums: 4",
    image: "/images/d5.jpg",
    sale: 4000
  },
  {
    id: 6,
    name: "Tandoori Treats",
    category: " Caterer - Specializing in authentic Indian and Mughlai cuisine.",
    location: "Lucknow, Uttar Pradesh",
    albums: "Albums: 5",
    image: "/images/d6.jpg",
    sale: 5000
  },
  {
    id: 7,
    name: "Aura Linens",
    category: " Rentals - Providing premium decor rentals for weddings.",
    location: "New Delhi, Delhi",
    albums: "Albums: 0",
    image: "/images/d7.jpg",
    sale: 0
  },
  {
    id: 8,
    name: "Ocean View Resorts",
    category: "Venue Rental - Stunning beachfront venues for dream weddings.",
    location: "Goa, India",
    albums: "Albums: 5",
    image: "/images/d8.jpg",
    sale: 5000
  },
  {
    id: 9,
    name: "Bloom Weddings",
    category: " Decor & Floral - Transforming venues with elegant floral decorations.",
    location: "Mumbai, Maharashtra",
    albums: "Albums: 3",
    image: "/images/d9.jpg",
    sale: 3000
  },
  {
    id: 10,
    name: "Bollywood Beats",
    category: " Entertainment - Bringing energetic dance and music performances.",
    location: "Mumbai, Maharashtra",
    albums: "Albums: 4",
    image: "/images/d10.jpg",
    sale: 4000
  },
  {
    id: 11,
    name: "Glam Look Studio",
    category: "Makeup Artist - Professional bridal and party makeup services.",
    location: "Delhi, India",
    albums: "Albums: 5",
    image: "/images/d11.jpg",
    sale: 5000
  },
  {
    id: 12,
    name: "Manish Malhotra Designs",
    category: " Wedding Attire - Luxurious designer wedding outfits.",
    location: "Mumbai, Maharashtra",
    albums: "Albums: 5",
    image: "/images/d12.jpeg",
    sale: 5000
  },
  {
    id: 13,
    name: "Tanishq Jewels",
    category: " Jewelry - Elegant and traditional wedding jewelry collections.",
    location: "Delhi, India",
    albums: "Albums: 5",
    image: "/images/d13.jpg",
    sale: 5000
  },
  {
    id: 14,
    name: "Royal Scrolls",
    category: " Invitation Designer - Exclusive handcrafted wedding invitations.",
    location: "Delhi, India",
    albums: "Albums: 2",
    image: "/images/d14.jpg",
    sale: 2000
  }
];

export default function ManageVendors() {
  const [vendors, setVendors] = useState(initialVendors);
  const [search, setSearch] = useState("");
  const [editingIdea, setEditingIdea] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [newVendor, setNewVendor] = useState({ name: "", category: "", location: "", sale: 0 });

  const handleDelete = (id) => {
    setVendors(vendors.filter((vendor) => vendor.id !== id));
  };

  // Updated to accept the vendor object instead of id
  const handleEditIdea = (vendor) => {
    setEditingIdea(vendor);
    setIsModalOpen(true);
  };

  // Saves the changes made in the modal
  const handleSaveEdit = () => {
    setVendors(vendors.map((v) => (v.id === editingIdea.id ? editingIdea : v)));
    setEditingIdea(null);
    setIsModalOpen(false);
  };

  const handleAddVendor = () => {
    setVendors([...vendors, { id: vendors.length + 1, ...newVendor }]);
    setNewVendor({ name: "", category: "", location: "", sale: 0 });
  };

  return (
    <div className="admin-container">
      <h1 className="admin-title">Manage Vendors</h1>
      <input
        type="text"
        placeholder="Search Vendors..."
        className="admin-search"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <div className="admin-card">
        <h2>Vendor Sales Overview</h2>
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={vendors} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="sale" stroke="#8884d8" strokeWidth={2} />
          </LineChart>
        </ResponsiveContainer>
      </div>

      <div className="admin-add-form">
        <h2>Add New Vendor</h2>
        <input
          type="text"
          placeholder="Name"
          value={newVendor.name}
          onChange={(e) => setNewVendor({ ...newVendor, name: e.target.value })}
        />
        <input
          type="text"
          placeholder="Category"
          value={newVendor.category}
          onChange={(e) => setNewVendor({ ...newVendor, category: e.target.value })}
        />
        <input
          type="text"
          placeholder="Location"
          value={newVendor.location}
          onChange={(e) => setNewVendor({ ...newVendor, location: e.target.value })}
        />
        <input
          type="number"
          placeholder=" Enter Sales"
          value={newVendor.sale === 0 ? "" : newVendor.sale}
          onChange={(e) => setNewVendor({ ...newVendor, sale: Number(e.target.value) })}
        />
        <button className="modal-save-btn" onClick={handleAddVendor}>Add Vendor</button>
      </div>

      <table className="admin-vendor-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Image</th>
            <th>Vendor</th>
            <th>Category</th>
            <th>Location</th>
            <th>Sales</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {vendors.map((vendor) => (
            <tr key={vendor.id}>
              <td>{vendor.id}</td>
              <td>
                <img src={vendor.image} alt={vendor.name} />
              </td>
              <td>{vendor.name}</td>
              <td>{vendor.category}
                <br/>
                <Link to={`/admin/adminvendordetail/${vendor.name}`} className="text-blue-500 underline text-sm">
    View Details
  </Link>
              </td>
              <td>{vendor.location}</td>
              <td>{vendor.sale}</td>
              <td className="table-action-buttons">
                <button className="edit-idea-btn" onClick={() => handleEditIdea(vendor)}>
                  Edit
                </button>
                <button className="delete-idea-btn" onClick={() => handleDelete(vendor.id)}>
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {isModalOpen && editingIdea && (
        <div className="modal-backdrop">
          <div className="modal-box">
            <h2>Edit Vendor</h2>
            <input
              type="text"
              className="modal-input"
              value={editingIdea.name}
              onChange={(e) => setEditingIdea({ ...editingIdea, name: e.target.value })}
            />
            <input
              type="text"
              className="modal-input"
              value={editingIdea.image}
              onChange={(e) => setEditingIdea({ ...editingIdea, image: e.target.value })}
            />
            <input
              type="text"
              className="modal-input"
              value={editingIdea.category}
              onChange={(e) => setEditingIdea({ ...editingIdea, category: e.target.value })}
            />
            <div className="modal-buttons-container">
              <button className="modal-cancel-btn" onClick={() => setIsModalOpen(false)}>
                Cancel
              </button>
              <button className="modal-save-btn" onClick={handleSaveEdit}>
                Save
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
