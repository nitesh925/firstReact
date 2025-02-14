import React from 'react';

function FolderView({ folderName, images }) {
  return (
    <div className="folder-view">
      <h2>{folderName}</h2>
      <div className="images-container">
        {images.map((image, index) => (
          <div key={index} className="image-card">
            <img src={image.preview} alt={`Uploaded ${index}`} />
            <p>{image.file.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default FolderView;
