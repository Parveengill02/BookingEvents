import React, { useEffect, useState } from "react";
import axios from "axios";


const AdminContact = () => {
  const [messages, setMessages] = useState([]);
  const token = localStorage.getItem("acess_token");

  useEffect(() => {
    const fetchMessages = async () => {
      try {
        const res = await axios.get("http://localhost:9000/api/admin/contact-messages", {
          headers: {
            acess_token: token,
          },
        });
        setMessages(res.data.data);
      } catch (error) {
        console.error("Failed to fetch contact messages:", error);
      }
    };
    fetchMessages();
  }, []);

  return (
    <div className="admin-contact-container">
      <h3 className="admin-contact-title">User Contact Messages</h3>
      <table className="admin-contact-table">
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Email</th>
            <th>Message</th>
            <th>Date</th>
          </tr>
        </thead>
        <tbody>
          {messages.map((msg, index) => (
            <tr key={msg.id}>
              <td>{index + 1}</td>
              <td>{msg.name}</td>
              <td>{msg.email}</td>
              <td>{msg.message}</td>
              <td>{new Date(msg.created_at).toLocaleString()}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AdminContact;
