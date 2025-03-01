import { useState } from "react";
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid, Legend } from "recharts";

const initialVendors = [
  { id: 1, name: "Vendor A", sales: 1000, location: "New York", category: "Electronics" },
  { id: 2, name: "Vendor B", sales: 1500, location: "Los Angeles", category: "Fashion" },
  { id: 3, name: "Vendor C", sales: 1200, location: "Chicago", category: "Food" },
];

export default function ManageVendors() {
  const [vendors, setVendors] = useState(initialVendors);
  const [search, setSearch] = useState("");
  const [currentVendor, setCurrentVendor] = useState(null);
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const handleEditClick = (vendor) => {
    setCurrentVendor(vendor);
    setIsDialogOpen(true);
  };

  const handleDelete = (id) => {
    setVendors(vendors.filter((vendor) => vendor.id !== id));
  };

  const handleSave = () => {
    if (currentVendor.id) {
      setVendors(vendors.map((v) => (v.id === currentVendor.id ? currentVendor : v)));
    } else {
      setVendors([...vendors, { ...currentVendor, id: vendors.length + 1 }]);
    }
    setIsDialogOpen(false);
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

      {/* Sales Graph */}
      <div className="admin-card">
        <h2>Vendor Sales Overview</h2>
        <ResponsiveContainer width="100%" height={300} padding-top="14px">
          <LineChart data={vendors} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="sales" stroke="#8884d8" strokeWidth={2} />
          </LineChart>
        </ResponsiveContainer>
      </div>

      {/* Add Vendor Button (Now Below the Graph) */}
      <button 
        className="admin-add-btn" 
        onClick={() => { 
          setCurrentVendor({ name: "", sales: 0, location: "", category: "" }); 
          setIsDialogOpen(true); 
        }}
      >
        ➕ Add New Vendor
      </button>

      {/* Vendors Table */}
      <table className="admin-table">
        <thead>
          <tr>
            <th>Vendor</th>
            <th>Sales</th>
            <th>Location</th>
            <th>Category</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {vendors.map((vendor) => (
            <tr key={vendor.id}>
              <td>{vendor.name}</td>
              <td>{vendor.sales}</td>
              <td>{vendor.location}</td>
              <td>{vendor.category}</td>
              <td className="admin-btn-container">
                <button className="admin-btn edit" onClick={() => handleEditClick(vendor)}>Edit</button>
                <button className="admin-btn delete" onClick={() => handleDelete(vendor.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Modal for Adding/Editing Vendors */}
      {isDialogOpen && (
        <div className="admin-modal">
          <div className="admin-modal-content">
            <h2>{currentVendor.id ? "Edit Vendor" : "Add Vendor"}</h2>
            <input type="text" placeholder="Vendor Name" value={currentVendor.name} onChange={(e) => setCurrentVendor({ ...currentVendor, name: e.target.value })} />
            <input type="number" placeholder="Sales" value={currentVendor.sales} onChange={(e) => setCurrentVendor({ ...currentVendor, sales: parseInt(e.target.value) })} />
            <input type="text" placeholder="Location" value={currentVendor.location} onChange={(e) => setCurrentVendor({ ...currentVendor, location: e.target.value })} />
            <input type="text" placeholder="Category" value={currentVendor.category} onChange={(e) => setCurrentVendor({ ...currentVendor, category: e.target.value })} />
            <div className="admin-modal-btns">
              <button className="admin-modal-btn cancel" onClick={() => setIsDialogOpen(false)}>Cancel</button>
              <button className="admin-modal-btn save" onClick={handleSave}>Save</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
