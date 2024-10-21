import React, { useState, useEffect } from "react";
import "../styles/ImageGallery.scss";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import Button from "@mui/material/Button";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import { useTranslation } from "react-i18next";
import "../i18n";

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
  {
    id: 7,
    src: "https://images.pexels.com/photos/60597/dahlia-red-blossom-bloom-60597.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    alt: "Image 7",
  },
  {
    id: 8,
    src: "https://images.pexels.com/photos/1563355/pexels-photo-1563355.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    alt: "Image 8",
  },
  {
    id: 9,
    src: "https://images.pexels.com/photos/807598/pexels-photo-807598.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    alt: "Image 9",
  },
  {
    id: 10,
    src: "https://images.pexels.com/photos/1366957/pexels-photo-1366957.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    alt: "Image 10",
  },
  {
    id: 11,
    src: "https://images.pexels.com/photos/29020688/pexels-photo-29020688/free-photo-of-serene-sunset-over-wilderness-bog-lake.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    alt: "Image 11",
  },
  {
    id: 12,
    src: "https://images.pexels.com/photos/372166/pexels-photo-372166.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    alt: "Image 12",
  },
];

const ImageGallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [isRtl, setIsRtl] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const { t, i18n } = useTranslation();
  const [language, setLanguage] = useState("en");

  //===========================================================
  //for dark  mode
  useEffect(() => {
    const savedTheme = localStorage.getItem("isDarkMode");
    if (savedTheme) {
      setIsDarkMode(JSON.parse(savedTheme));
    }
  }, []);
  const toggleDarkMode = () => {
    setIsDarkMode((prevMode) => !prevMode);
  };

  useEffect(() => {
    localStorage.setItem("isDarkMode", JSON.stringify(isDarkMode));
    document.body.className = isDarkMode ? "" : "light";
  }, [isDarkMode]);
  //===========================================================

  const changeLanguage = (lng) => {
    setLanguage((prevLang) => {
      const newLang = prevLang === "en" ? "ar" : "en";
      i18n.changeLanguage(newLang);
      setIsRtl(newLang === "ar");
      return newLang;
    });
  };

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
      } else if (e.key === "ArrowRight") {
        handlePrevNext(1);
      } else if (e.key === "ArrowLeft") {
        handlePrevNext(-1);
      }
    };
    window.addEventListener("keydown", handleKeydown);
    return () => window.removeEventListener("keydown", handleKeydown);
  }, [selectedImage, handlePrevNext, closeLightbox]);

  const toggleDrawer = (open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    setIsDrawerOpen(open);
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="fixed" sx={{ width: "100%", top: 0 }}>
        <Toolbar variant="dense" sx={{ direction: isRtl ? "rtl" : "ltr" }}>
          <Typography
            variant="h6"
            color="inherit"
            component="div"
            sx={{ flexGrow: 1 }}
          >
            {t("gallery_title")}
          </Typography>

          {/* Dark mode toggle button */}
          <Button
            color="inherit"
            onClick={toggleDarkMode}
            sx={{ ml: isRtl ? 0 : 2, mr: isRtl ? 2 : 0, m: 1 }}
          >
            {isDarkMode ? t("light_mode") : t("dark_mode")}
          </Button>

          {/* Language toggle buttons */}
          <Button color="inherit" onClick={changeLanguage}>
            {language === "en" ? "العربية" : "English"}
          </Button>
        </Toolbar>
      </AppBar>

      {/* Drawer for mobile */}
      <Drawer anchor="left" open={isDrawerOpen} onClose={toggleDrawer(false)}>
        <List>
          <ListItem button onClick={toggleDarkMode}>
            <ListItemText primary={isDarkMode ? "Light Mode" : "Dark Mode"} />
          </ListItem>
          <ListItem button onClick={() => setIsRtl(!isRtl)}>
            <ListItemText primary={isRtl ? "Switch to LTR" : "Switch to RTL"} />
          </ListItem>
        </List>
      </Drawer>

      <Box sx={{ mt: 8 }}>
        <Typography variant="body1" sx={{ p: 2 }}>
          <div className={`gallery-container ${isRtl ? "rtl" : ""}`}>
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
                <img
                  src={selectedImage.src}
                  alt={selectedImage.alt}
                  onClick={(e) => e.stopPropagation()}
                />
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
        </Typography>
      </Box>
    </Box>
  );
};

export default ImageGallery;
