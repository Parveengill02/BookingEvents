import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

// Sample user data for demo purposes
const userData = [
  {
    id: 1,
    Username: "John_doe",
    Email: "user1@example.com",
    PhoneNumber: "123-456-7890",
    Role: "User",
    Status: "Active",
    bookings: [
      {
        EventType: "Wedding",
        PreferredDate: "2025-06-15",
        GuestCount: "100+",
        Duration: "6 hours",
        Budget: "Rs.90,000 - Rs.1,00,000",
        PaymentMethod: "Credit Card",
      },
    ],
  },
];

const ManageUsersDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [user, setUser] = useState(userData.find((u) => u.id === parseInt(id)));
  const [isEditingPersonal, setIsEditingPersonal] = useState(false);
  const [isEditingBooking, setIsEditingBooking] = useState(false);
  const [editableUser, setEditableUser] = useState({ ...user });

  if (!user) {
    return <div>User not found</div>;
  }

  const handleInputChange = (e, section, field) => {
    if (section === "personal") {
      setEditableUser({ ...editableUser, [field]: e.target.value });
    } else {
      const updatedBookings = editableUser.bookings.map((booking, index) =>
        index === 0 ? { ...booking, [field]: e.target.value } : booking
      );
      setEditableUser({ ...editableUser, bookings: updatedBookings });
    }
  };

  const handleSavePersonal = () => {
    setUser(editableUser);
    setIsEditingPersonal(false);
  };

  const handleSaveBooking = () => {
    setUser(editableUser);
    setIsEditingBooking(false);
  };

  return (
    <div className="admin-user-detail-container">
      <button className="admin-user-detail-back-button" onClick={() => navigate(-1)}>Back</button>
      <h2 className="admin-user-detail-title">Personal Details</h2>

      {/* Personal Details Table */}
      <table className="admin-user-detail-table">
        <tbody>
          {Object.entries(user).map(
            ([key, value]) =>
              key !== "bookings" && (
                <tr key={key}>
                  <th>{key}</th>
                  <td>{value}</td>
                </tr>
              )
          )}
        </tbody>
      </table>

      {/* Edit Personal Details Button */}
      <button className="admin-user-detail-edit-button" onClick={() => setIsEditingPersonal(true)}>
        Edit Personal Details
      </button>

      <h3 className="admin-user-detail-subtitle">Booking Details</h3>

      {/* Booking Details Table */}
      {user.bookings.length > 0 ? (
        user.bookings.map((booking, index) => (
          <table key={index} className="admin-user-detail-table">
            <tbody>
              {Object.entries(booking).map(([key, value]) => (
                <tr key={key}>
                  <th>{key}</th>
                  <td>{value}</td>
                </tr>
              ))}
            </tbody>
          </table>
        ))
      ) : (
        <p>No bookings found.</p>
      )}

      {/* Edit Booking Details Button */}
      <button className="admin-user-detail-edit-button" onClick={() => setIsEditingBooking(true)}>
        Edit Booking Details
      </button>

      {/* Personal Details Edit Modal */}
      {isEditingPersonal && (
        <div className="admin-user-detail-modal-overlay">
          <div className="admin-user-detail-modal">
            <h3>Edit Personal Details</h3>
            {Object.entries(user).map(
              ([key]) =>
                key !== "bookings" && (
                  <label key={key}>
                    {key}:{" "}
                    <input
                      className="modal-input" 
                      type="text"
                      value={editableUser[key]}
                      onChange={(e) => handleInputChange(e, "personal", key)}
                    />
                  </label>
                )
            )}
            <button className="admin-user-detail-modal-save" onClick={handleSavePersonal}>Save</button>
            <button className="admin-user-detail-modal-cancel" onClick={() => setIsEditingPersonal(false)}>Cancel</button>
          </div>
        </div>
      )}

      {/* Booking Details Edit Modal */}
      {isEditingBooking && (
        <div className="admin-user-detail-modal-overlay">
          <div className="admin-user-detail-modal">
            <h3>Edit Booking Details</h3>
            {user.bookings.length > 0 &&
              Object.entries(user.bookings[0]).map(([key]) => (
                <label key={key}>
                  {key}:{" "}
                  <input
                    type="text"
                    value={editableUser.bookings[0][key]}
                    onChange={(e) => handleInputChange(e, "booking", key)}
                  />
                </label>
              ))}
            <button className="admin-user-detail-modal-save" onClick={handleSaveBooking}>Save</button>
            <button className="admin-user-detail-modal-cancel" onClick={() => setIsEditingBooking(false)}>Cancel</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ManageUsersDetails;
