import React from "react";
import ImageCard from "./ImageCard";

function ImageList({ images }) {
  if (!images || images.length === 0) {
    return <p>No images yet. Search above to see results.</p>;
  }

  return (
    <div className="image-list">
      {images.map((image) => (
        <ImageCard key={image.id} image={image} />
      ))}
    </div>
  );
}

export default ImageList;
