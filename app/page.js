// C:\Users\Usuario\Desktop\ishuman\src\pages\FilePage.js

import React, { useState } from 'react';

const FilePage = () => {
  const [fileInfo, setFileInfo] = useState(null);
  const [dragging, setDragging] = useState(false);

  // Detecta el tipo de archivo (audio, texto o imagen)
  const classifyFile = (file) => {
    const fileType = file.type;

    if (fileType.startsWith('image/')) {
      return 'Imagen';
    } else if (fileType.startsWith('audio/')) {
      return 'Audio';
    } else if (fileType.startsWith('text/') || fileType === 'application/pdf') {
      return 'Texto';
    } else {
      return 'Tipo desconocido';
    }
  };

  // Maneja el archivo cuando se suelta en la zona de drop
  const handleDrop = (event) => {
    event.preventDefault();
    setDragging(false);

    const files = event.dataTransfer.files;
    if (files.length > 0) {
      const file = files[0]; // Solo se procesa el primer archivo en este ejemplo
      const classification = classifyFile(file);

      setFileInfo({
        name: file.name,
        size: file.size,
        type: classification,
      });
    }
  };

  // Estilos para Drag-and-Drop
  const dragStyles = {
    border: dragging ? '2px dashed #4CAF50' : '2px dashed #ccc',
    padding: '20px',
    textAlign: 'center',
    marginTop: '20px',
    backgroundColor: dragging ? '#f0fff0' : '#f9f9f9',
    transition: 'background-color 0.3s ease',
  };

  return (
    <div
      style={dragStyles}
      onDragOver={(e) => e.preventDefault()}
      onDragEnter={() => setDragging(true)}
      onDragLeave={() => setDragging(false)}
      onDrop={handleDrop}
    >
      <p>Arrastra y suelta tu archivo aquí o haz clic para seleccionarlo.</p>

      {fileInfo && (
        <div style={{ marginTop: '10px' }}>
          <h3>Información del archivo:</h3>
          <p><strong>Nombre:</strong> {fileInfo.name}</p>
          <p><strong>Tamaño:</strong> {Math.round(fileInfo.size / 1024)} KB</p>
          <p><strong>Clasificación:</strong> {fileInfo.type}</p>
        </div>
      )}
    </div>
  );
};

export default FilePage;