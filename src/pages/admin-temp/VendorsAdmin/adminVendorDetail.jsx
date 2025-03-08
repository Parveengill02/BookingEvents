import React, { useState } from "react";


const AdminVendorDetail = () => {
    const [basicDetails, setBasicDetails] = useState({
        Name: "MG Makeovers",
        Location: "Gurugram, Haryana",
        Category: "Bridal Makeup Artists",
        AvailableDates: "March 2025 - June 2025",
    });

    const [services, setServices] = useState([
        { id: 1, name: "Party Makeup" },
        { id: 2, name: "Bridal Makeup" },
        { id: 3, name: "Engagement Makeup" },
        { id: 4, name: "Airbrush Makeup" },
        { id: 5, name: "Pre-Bridal Packages" },
    ]);

    const [portfolio, setPortfolio] = useState([
        { id: 1, img: "/images/br1.jpg" },
        { id: 2, img: "/images/br2.jpeg" },
        { id: 3, img: "/images/br3.jpg" },
    ]);

    const [reviews, setReviews] = useState([
        { id: 1, user: "User 1", rating: "★★★★★", review: "Excellent service!" },
        { id: 2, user: "User 2", rating: "★★★★☆", review: "Great experience!" },
    ]);

    const [modal, setModal] = useState(null);
    const [formData, setFormData] = useState({});

    const openModal = (type, data) => {
        setModal(type);
        setFormData(data || {});
    };

    const closeModal = () => {
        setModal(null);
        setFormData({});
    };

    return (
        <div className="admin-vendor-detail">
            {/* Basic Info */}
            <div className="admin-vendor-detail__section">
                <h2>Basic Information</h2>
                <table className="admin-vendor-detail__table">
                    <tbody>
                        {Object.keys(basicDetails).map((key) => (
                            <tr key={key}>
                                <td><b>{key.replace(/([A-Z])/g, " $1")}</b></td>
                                <td>{basicDetails[key]}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                <button className="edit-idea-btn" onClick={() => openModal("editBasic", basicDetails)}>Edit</button>
            </div>

            {/* Services in Table */}
            <div className="admin-vendor-detail__section">
                <h2>Services</h2>
                <table className="admin-vendor-detail__table">
                    <thead>
                        <tr>
                            <th>Service</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {services.map((service) => (
                            <tr key={service.id}>
                                <td>{service.name}</td>
                                <td className="table-action-buttons">
                                    <button className="edit-idea-btn" onClick={() => openModal("editService", service)}>Edit</button>
                                    <button className="delete-idea-btn" onClick={() => setServices(services.filter((s) => s.id !== service.id))}>Delete</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                <button className="edit-idea-btn" onClick={() => openModal("addService")}>Add Service</button>
            </div>

            {/* Portfolio in Table */}
            <div className="admin-vendor-detail__section">
                <h2>Portfolio</h2>
                <table className="admin-vendor-detail__table">
                    <thead>
                        <tr>
                            <th>Image</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {portfolio.map((item) => (
                            <tr key={item.id}>
                                <td><img src={item.img} alt="Portfolio" className="admin-vendor-detail__portfolio-img" /></td>
                                <td className="table-action-buttons">
                                    <button className="edit-idea-btn"onClick={() => openModal("editPortfolio", item)}>Edit</button>
                                    <button className="delete-idea-btn" onClick={() => setPortfolio(portfolio.filter((p) => p.id !== item.id))}>Delete</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            {/* Customer Reviews */}
            <div className="admin-vendor-detail__section">
                <h2>Customer Reviews</h2>
                <table className="admin-vendor-detail__table">
                    <thead>
                        <tr>
                            <th>User</th>
                            <th>Rating</th>
                            <th>Review</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {reviews.map((review) => (
                            <tr key={review.id}>
                                <td>{review.user}</td>
                                <td>{review.rating}</td>
                                <td>{review.review}</td>
                                <td>
                                    <button className="delete-idea-btn" onClick={() => setReviews(reviews.filter((r) => r.id !== review.id))}>
                                        Delete
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            {/* Modals */}
            {modal && (
                <div className="modal-backdrop">
                    <div className="modal-box">
                        <span className="admin-vendor-detail__close" onClick={closeModal}>&times;</span>

                        {modal === "editBasic" && (
                            <>
                                <h2>Edit Basic Details</h2>
                                {Object.keys(basicDetails).map((key) => (
                                    <label key={key}>
                                        {key.replace(/([A-Z])/g, " $1")}
                                        <input
                                             className="modal-input"
                                            value={formData[key] || ""}
                                            onChange={(e) => setFormData({ ...formData, [key]: e.target.value })}
                                        />
                                    </label>
                                ))}
                                <button className="modal-save-btn" onClick={() => { setBasicDetails(formData); closeModal(); }}>Save</button>
                            </>
                        )}

                        {modal === "editService" && (
                            <>
                                <h2>Edit Service</h2>
                                <input
                                    className="modal-input"
                                    value={formData.name || ""}
                                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                />
                                <button className="modal-save-btn" onClick={() => {
                                    const updatedServices = services.map(s => s.id === formData.id ? formData : s);
                                    setServices(updatedServices);
                                    closeModal();
                                }}>Save</button>
                            </>
                        )}

                        {modal === "addService" && (
                            <>
                                <h2>Add Service</h2>
                                <input
                                 className="modal-input"
                                    value={formData.name || ""}
                                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                />
                                <button className="modal-save-btn" onClick={() => {
                                    setServices([...services, { id: Date.now(), name: formData.name }]);
                                    closeModal();
                                }}>Add</button>
                            </>
                        )}

                        {modal === "editPortfolio" && (
                            <>
                                <h2>Edit Portfolio Image</h2>
                                <input
                                 className="modal-input"
                                    value={formData.img || ""}
                                    onChange={(e) => setFormData({ ...formData, img: e.target.value })}
                                />
                                <button className="modal-save-btn" onClick={() => {
                                    setPortfolio(portfolio.map(p => p.id === formData.id ? { ...p, img: formData.img } : p));
                                    closeModal();
                                }}>Save</button>
                            </>
                        )}
                    </div>
                </div>
            )}
        </div>
    );
};

export default AdminVendorDetail;
