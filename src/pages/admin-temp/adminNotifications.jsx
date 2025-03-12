import React, { useState } from "react";


const AdminNotifications = () => {
  const [notifications, setNotifications] = useState([
    { id: 1, message: "New vendor request pending approval.", unread: true, type: "vendorRequest" },
    { id: 2, message: "Event booking confirmed for April 10.", unread: true, type: "booking" },
    { id: 3, message: "Profile update successful.", unread: false, type: "profile" },
    { id: 4, message: "User requested a quote for wedding decoration.", unread: true, type: "quote" },
    { id: 5, message: "New catering vendor signed up.", unread: true, type: "vendorRequest" },
    { id: 6, message: "Vendor profile update awaiting review.", unread: true, type: "vendorRequest" },
    { id: 7, message: "Client requested a quote for corporate event planning.", unread: true, type: "quote" },
    { id: 8, message: "New user registered on the platform.", unread: false, type: "user" },
    { id: 9, message: "Booking request received for birthday party services.", unread: true, type: "booking" },
    { id: 10, message: "Vendor submitted portfolio for approval.", unread: true, type: "vendorRequest" },
  ]);

  const [selectedNotification, setSelectedNotification] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const unreadCount = notifications.filter((n) => n.unread).length;

  const deleteNotification = (id) => {
    setNotifications(notifications.filter((n) => n.id !== id));
    setIsModalOpen(false);
  };

  const approveVendor = (id) => {
    setNotifications(notifications.filter((n) => n.id !== id));
    setIsModalOpen(false);
    alert("Vendor request approved!");
  };

  const denyVendor = (id) => {
    setNotifications(notifications.filter((n) => n.id !== id));
    setIsModalOpen(false);
    alert("Vendor request denied!");
  };

  const openModal = (notification) => {
    setSelectedNotification(notification);
    setIsModalOpen(true);
    setNotifications(
      notifications.map((n) => (n.id === notification.id ? { ...n, unread: false } : n))
    );
  };

  return (
    <div className="admin-notifications-container">
      <h2 className="admin-notifications-header">Notifications ({unreadCount} unread)</h2>
      <ul className="admin-notifications-list">
        {notifications.map((notification) => (
          <li
            key={notification.id}
            className={`admin-notification-item ${notification.unread ? 'admin-unread' : ''}`}
          >
            <span onClick={() => openModal(notification)} className="admin-notification-message">{notification.message}</span>
            <button onClick={() => deleteNotification(notification.id)} className="admin-delete-button">Delete</button>
          </li>
        ))}
      </ul>

      {isModalOpen && selectedNotification && (
        <div className="admin-modal-overlay">
          <div className="admin-modal-content">
            <h3 className="admin-modal-title">Notification</h3>
            <p>{selectedNotification.message}</p>
            <div className="admin-modal-actions">
              <button onClick={() => setIsModalOpen(false)} className="admin-modal-button admin-close-button">Close</button>
              {selectedNotification.type === "vendorRequest" && (
                <>
                  <button onClick={() => approveVendor(selectedNotification.id)} className="admin-modal-button admin-approve-button">Approve</button>
                  <button onClick={() => denyVendor(selectedNotification.id)} className="admin-modal-button admin-deny-button">Deny</button>
                </>
              )}
              <button onClick={() => deleteNotification(selectedNotification.id)} className="admin-modal-button admin-delete-button">Delete</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AdminNotifications;
