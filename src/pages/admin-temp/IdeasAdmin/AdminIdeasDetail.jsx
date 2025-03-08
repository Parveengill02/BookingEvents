import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const IdeaDetails = () => {
  const navigate = useNavigate();

  const [ideas, setIdeas] = useState([
    {
      id: 1,
      title: "Centerpieces & Tablescapes",
      image: "/images/ida.avif",
      category: "Decor",
      relatedImages: [
        "/images/ida2.avif",
        "/images/ida3.avif",
        "/images/ida4.avif",
        "/images/ida5.avif",
        "/images/ida6.avif"
      ]
    }
  ]);

  const selectedIdea = ideas[0];
  const [newImage, setNewImage] = useState("");
  const [isAddDialogOpen, setIsAddDialogOpen] = useState(false);
  const [isEditDialogOpen, setIsEditDialogOpen] = useState(false);
  const [editImage, setEditImage] = useState("");
  const [editIndex, setEditIndex] = useState(null);

  const handleAddImage = () => {
    if (newImage) {
      setIdeas(prevIdeas =>
        prevIdeas.map(idea =>
          idea.id === selectedIdea.id
            ? { ...idea, relatedImages: [...idea.relatedImages, newImage] }
            : idea
        )
      );
      setNewImage("");
      setIsAddDialogOpen(false);
    }
  };

  const handleDeleteImage = img => {
    setIdeas(prevIdeas =>
      prevIdeas.map(idea =>
        idea.id === selectedIdea.id
          ? { ...idea, relatedImages: idea.relatedImages.filter(image => image !== img) }
          : idea
      )
    );
  };

  const handleEditImage = () => {
    if (editImage !== "" && editIndex !== null) {
      setIdeas(prevIdeas =>
        prevIdeas.map(idea =>
          idea.id === selectedIdea.id
            ? {
                ...idea,
                relatedImages: idea.relatedImages.map((image, index) =>
                  index === editIndex ? editImage : image
                )
              }
            : idea
        )
      );
      setEditImage("");
      setEditIndex(null);
      setIsEditDialogOpen(false);
    }
  };

  return (
    <div className="admin-idea-details-container">
      <h1>{selectedIdea.title}</h1>
      <p>Category: {selectedIdea.category}</p>

      <table className="admin-idea-images-table">
        <thead>
          <tr>
            <th>Image</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {selectedIdea.relatedImages.map((img, index) => (
            <tr key={index}>
              <td><img src={img} alt="Idea" className="table-image" /></td>
              <td>
                <button className="idea-edit-button" onClick={() => { setEditImage(img); setEditIndex(index); setIsEditDialogOpen(true); }}>Edit</button>
                <button className="idea-delete-button" onClick={() => handleDeleteImage(img)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="end-buttons">
      <button onClick={() => setIsAddDialogOpen(true)}>Add New Image</button>
      <button onClick={() => navigate(-1)}>Back</button>
      </div>

      {isAddDialogOpen && (
        <div className="modal-backdrop">
          <div className="modal-box">
            <h3>Add New Image</h3>
            <input
              type="text"
              className="modal-input"
              placeholder="Enter Image URL"
              value={newImage}
              onChange={(e) => setNewImage(e.target.value)}
            />
            <div className="modal-buttons-container">
              <button className="modal-save-btn" onClick={handleAddImage}>Add</button>
              <button className="modal-cancel-btn" onClick={() => setIsAddDialogOpen(false)}>Cancel</button>
            </div>
          </div>
        </div>
      )}

      {isEditDialogOpen && (
        <div className="modal-backdrop">
          <div className="modal-box">
            <h3>Edit Image</h3>
            <input
              type="text"
              className="modal-input"
              placeholder="Edit Image URL"
              value={editImage}
              onChange={(e) => setEditImage(e.target.value)}
            />
            <div className="modal-buttons-container">
              <button className="modal-save-btn" onClick={handleEditImage}>Save</button>
              <button className="modal-cancel-btn" onClick={() => setIsEditDialogOpen(false)}>Cancel</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default IdeaDetails;
