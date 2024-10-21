import React, { useState } from "react";
import "../styles/ImageGallery.scss";

const images = [
  {
    id: 1,
    src: "https://images.pexels.com/photos/33109/fall-autumn-red-season.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    alt: "Image 1",
  },
  {
    id: 2,
    src: "https://images.pexels.com/photos/1563355/pexels-photo-1563355.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    alt: "Image 2",
  },
  {
    id: 3,
    src: "https://images.pexels.com/photos/459203/pexels-photo-459203.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    alt: "Image 3",
  },
  {
    id: 4,
    src: "https://images.pexels.com/photos/842711/pexels-photo-842711.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    alt: "Image 4",
  },
  {
    id: 5,
    src: "https://images.pexels.com/photos/709552/pexels-photo-709552.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    alt: "Image 5",
  },
  {
    id: 6,
    src: "https://images.pexels.com/photos/36487/above-adventure-aerial-air.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    alt: "Image 6",
  },
];

const ImageGallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageClick = (image) => {
    setSelectedImage(image);
  };

  const closeLightbox = () => {
    setSelectedImage(null);
  };

  const handlePrevNext = (direction) => {
    const currentIndex = images.findIndex((img) => img.id === selectedImage.id);
    const nextIndex =
      (currentIndex + direction + images.length) % images.length;
    setSelectedImage(images[nextIndex]);
  };

  React.useEffect(() => {
    const handleKeydown = (e) => {
      if (e.key === "Escape") {
        closeLightbox();
      }
    };
    window.addEventListener("keydown", handleKeydown);
    return () => window.removeEventListener("keydown", handleKeydown);
  }, []);

  return (
    <div className="gallery-container">
      <div className="gallery-grid">
        {images.map((image) => (
          <div key={image.id} className="gallery-item">
            <img
              src={image.src}
              alt={image.alt}
              loading="lazy"
              onClick={() => handleImageClick(image)}
            />
          </div>
        ))}
      </div>

      {selectedImage && (
        <div className="lightbox" onClick={closeLightbox}>
          <span className="lightbox-close" onClick={closeLightbox}>
            &times;
          </span>
          <img src={selectedImage.src} alt={selectedImage.alt} />
          <button
            className="prev"
            onClick={(e) => {
              e.stopPropagation();
              handlePrevNext(-1);
            }}
          >
            &#10094;
          </button>
          <button
            className="next"
            onClick={(e) => {
              e.stopPropagation();
              handlePrevNext(1);
            }}
          >
            &#10095;
          </button>
        </div>
      )}
    </div>
  );
};

export default ImageGallery;
