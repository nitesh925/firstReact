import React, { useState } from 'react';
import { useDropzone } from 'react-dropzone';

function FileUploader({ onAddFiles }) {
  const [folderName, setFolderName] = useState('');

  const onDrop = (acceptedFiles) => {
    if (folderName.trim() === '') {
      alert('Please enter a folder name!');
      return;
    }
    const files = acceptedFiles.map((file) => ({
      file,
      preview: URL.createObjectURL(file),
    }));
    onAddFiles(folderName, files);
  };

  const { getRootProps, getInputProps } = useDropzone({ onDrop });

  return (
    <div className="file-uploader">
      <input
        type="text"
        placeholder="Enter folder name"
        value={folderName}
        onChange={(e) => setFolderName(e.target.value)}
      />
      <div {...getRootProps({ className: 'dropzone' })}>
        <input {...getInputProps()} />
        <p>Drag & drop files here, or click to select files</p>
      </div>
    </div>
  );
}

export default FileUploader;
