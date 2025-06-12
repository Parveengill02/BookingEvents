import React, { useState,useEffect } from "react";
import axios from "axios";
import { useParams } from 'react-router-dom';
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css"; // Import toast styl
const AdminVendorDetail = () => {
    const [basicDetails, setBasicDetails] = useState({
        Name: "",
        Location: "",
        Category: "",
        AvailableDates: "",
    });

    // const [services, setServices] = useState([
    //     { id: 1, name: "Party Makeup" },
    //     { id: 2, name: "Bridal Makeup" },
    //     { id: 3, name: "Engagement Makeup" },
    //     { id: 4, name: "Airbrush Makeup" },
    //     { id: 5, name: "Pre-Bridal Packages" },
    // ]);

    // const [portfolio, setPortfolio] = useState([
    //     { id: 1, img: "/images/br1.jpg" },
    //     { id: 2, img: "/images/br2.jpeg" },
    //     { id: 3, img: "/images/br3.jpg" },
    // ]);

     const [reviews, setReviews] = useState([
       { id: 1, user: "User 1", rating: "★★★★★", review: "Excellent service!" },
       { id: 2, user: "User 2", rating: "★★★★☆", review: "Great experience!" },
     ]);
    const [vendorDetails, setVendorDetails] = useState({});
    const [modal, setModal] = useState(null);
    const [formData, setFormData] = useState({});
    const [services, setVendorservices] = useState([]);
    const [gallery, setGallery] = useState([]);
    const { id } = useParams()
      const token = localStorage.getItem("acess_token")
    const openModal = (type, data) => {
        setModal(type);
        setFormData(data || {});
    };

    const closeModal = () => {
        setModal(null);
        setFormData({});
    };
    const getvendorDetails = async (id) => {
        try {
          console.log(id, "vendor id")
          const result = await axios.get(`${'http://localhost:9000/api/user/single-vendor-detail'}/${id}`)
          console.log(result.data, "resultttt")
          setVendorDetails({
            ...result.data.data,
             
          });
    
          setVendorservices(result.data.data.vendor_services|| []);
         
          setGallery(result.data.data.vendor_portfolios|| []);
        } catch (err) {
          console.log(err)
        }
      }
      console.log(gallery, "checkbenuerere")
    
    
      useEffect(() => {
        getvendorDetails(id)
      }, [id])

      console.log(vendorDetails,"vendor details-->")


      //add-portfolio
      
      const handleAddPortfolio = async () => {
        try {
            const formDataForUpload = new FormData();
            formDataForUpload.append("vendor_id", id); // backend expects vendor_id in body
            formDataForUpload.append("file", formData.portfolio_image); // 'file' not 'portfolio_image'
    
            const res = await axios.post("http://localhost:9000/api/admin/portfolio-image", formDataForUpload, {
                headers: {
                    "Content-Type": "multipart/form-data",
                    acess_token: token,
                },
            });
    
            if (res.data.success) {
                setGallery([...gallery, ...res.data.data]);
                toast.success("Portfolio added successfully!");
                closeModal();
            } else {
                toast.error("Failed to add portfolio.");
            }
        } catch (err) {
            console.error("Error uploading portfolio:", err);
            toast.error("Something went wrong while adding the portfolio.");
        }
    };
    
    return (
        <div className="admin-vendor-detail">
            {/* Basic Info */}
            <div className="admin-vendor-detail__section">
                <h2>Basic Information</h2>
                <table className="admin-vendor-detail__table">
                <thead>
                        <tr>
                            <th>Name</th>
                            <th>Location</th>
                            <th>Category</th>
                            <th>Available Dates</th>
                        </tr>
                    </thead>
                    <tbody>
                      
                        {/* {Object.keys(vendorDetails).map((vendor) => ( */}
                            <tr>
                             
                                <td>{vendorDetails?.name}</td>
                                <td>{vendorDetails?.location}</td>
                                <td>{vendorDetails?.category}</td>
                                <td>{vendorDetails?.available_dates}</td>
                            </tr>
                        {/* ))} */}
                    </tbody>
                </table>
                {/* <button className="edit-idea-btn" onClick={() => openModal("editBasic", basicDetails)}>Edit</button> */}
            </div>

            {/* Services in Table */}
            <div className="admin-vendor-detail__section">
                <h2>Services</h2>
                <table className="admin-vendor-detail__table">
                    <thead>
                        <tr>
                            <th>Service</th>
                            <th>Description</th>
                            {/* <th>Actions</th> */}
                        </tr>
                    </thead>
                    <tbody>
  {services.map((service) => (
    <tr key={service.id}>
      <td>{service.vendor_service}</td>
      <td>{service.description}</td>    
      {/* <td className="table-action-buttons">
        <button
          className="edit-idea-btn"
          onClick={() => openModal("editService", service)}
        >
          Edit
        </button>
        <button
          className="delete-idea-btn"
          onClick={() => setVendorservices(services.filter((s) => s.id !== service.id))}
        >
          Delete
        </button>
      </td> */}
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
                            {/* <th>Actions</th> */}
                        </tr>
                    </thead>
                    <tbody>
  {gallery.map((item) => (
    <tr key={item.id}>
      <td>
        <img
          src={`http://localhost:9000/uploads/${item.portfolio_image}`}
          alt="Portfolio"
          className="admin-vendor-detail__portfolio-img"
        />
      </td>
      
      {/* <td className="table-action-buttons">
        <button
          className="edit-idea-btn"
          onClick={() => openModal("editPortfolio", item)}
        >
          Edit
        </button>
        <button
          className="delete-idea-btn"
          onClick={() =>
            setGallery(gallery.filter((p) => p.id !== item.id))
          }
        >
          Delete
        </button>
      </td> */}
    </tr>
  ))}
</tbody>

                </table>
                <button className="edit-idea-btn" onClick={() => openModal("addPortfolio")}>Add Portfolio</button>
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
                                    value={formData.vendor_service || ""}
                                    name="vendor_service"
                                    onChange={(e) => setFormData({ ...formData,vendor_service: e.target.value })}
                                    placeholder="service"
                                />
                                  <input
                                 className="modal-input"
                                    value={formData.description || ""}
                                    name="description"
                                    onChange={(e) => setFormData({ ...formData,description: e.target.value })}
                                    placeholder="description"
                                />
                                <button className="modal-save-btn"  onClick={async () => {
        try {
          const token = localStorage.getItem("acess_token");
          const payload = [
            {
              vendor_id: id,
              vendor_service: formData.vendor_service,
              description: formData.description || "",
            },
          ];
          const res = await axios.post("http://localhost:9000/api/admin/vendor-services", payload, {
            headers: { acess_token: token },
          });

          if (res.data.success) {
            setVendorservices([...services, ...res.data.data]);
            toast.success("Service added successfully!");
            closeModal();
          } else {
            console.error("Add Service failed", res.data.message);
            toast.error("Failed to add service."); 
          }
        } catch (err) {
          toast.error("Something went wrong while adding the service.");
          console.error("API error while adding service", err);
        }
      }}
    >
      Add
    </button>
                            </>
                        )}
                      {modal === "addPortfolio" && (
  <>
    <h2>Add Portfolio Image</h2>
    <input
      type="file"
      multiple
      className="modal-input"
      onChange={(e) => setFormData({ ...formData, files: e.target.files })}
    />
    <button
      className="modal-save-btn"
      onClick={async () => {
        try {
          const token = localStorage.getItem("acess_token");
          const form = new FormData();
          for (let i = 0; i < formData.files.length; i++) {
            form.append("file", formData.files[i]);
          }
          form.append("vendor_id", id); // Send vendor ID in form data

          const res = await axios.post(
            "http://localhost:9000/api/admin/portfolio-image",
            form,
            {
              headers: {
                "Content-Type": "multipart/form-data",
                acess_token: token,
              },
            }
          );

          if (res.data.success) {
            setGallery([...gallery, ...res.data.data]);
            toast.success("Portfolio images added successfully!");
            closeModal();
          } else {
            toast.error("Failed to add portfolio images.");
          }
        } catch (err) {
          console.error("Upload Error:", err);
          toast.error("Something went wrong while uploading images.");
        }
      }}
    >
      Add
    </button>
  </>
)}
                    </div>
                    <ToastContainer />
                </div>
            )}
            
        </div>
    );
};

export default AdminVendorDetail;
