// import * as React from "react";
// import AppBar from "@mui/material/AppBar";
// import Box from "@mui/material/Box";
// import Toolbar from "@mui/material/Toolbar";
// import Typography from "@mui/material/Typography";
// import IconButton from "@mui/material/IconButton";
// import MenuIcon from "@mui/icons-material/Menu";
// import Button from "@mui/material/Button"; // Import the Button component

// export default function DenseAppBar() {
//   const [isDarkMode, setIsDarkMode] = React.useState(false); // State for dark mode
//   const [isRtl, setIsRtl] = React.useState(false); // State for RTL

//   const toggleDarkMode = () => {
//     setIsDarkMode((prev) => !prev);
//   };

//   const toggleDirection = () => {
//     setIsRtl((prev) => !prev);
//   };

//   return (
//     <Box sx={{ flexGrow: 1 }}>
//       <AppBar position="fixed" sx={{ width: "100%", top: 0 }}>
//         <Toolbar variant="dense" sx={{ direction: isRtl ? "rtl" : "ltr" }}>
//           <IconButton
//             edge="start"
//             color="inherit"
//             aria-label="menu"
//             sx={{ mr: 2, order: isRtl ? 2 : 0 }} // Adjust order for RTL
//           >
//             <MenuIcon />
//           </IconButton>
//           <Typography
//             variant="h6"
//             color="inherit"
//             component="div"
//             sx={{ flexGrow: 1 }}
//           >
//             Photos
//           </Typography>
//           {/* Dark mode toggle button */}
//           <Button
//             color="inherit"
//             onClick={toggleDarkMode}
//             sx={{ ml: isRtl ? 0 : 2, mr: isRtl ? 2 : 0 }} // Adjust margin for RTL
//           >
//             {isDarkMode ? "Light Mode" : "Dark Mode"}
//           </Button>
//           {/* RTL toggle button */}
//           <Button color="inherit" onClick={toggleDirection} sx={{ ml: 2 }}>
//             Switch to {isRtl ? "LTR" : "RTL"}
//           </Button>
//         </Toolbar>
//       </AppBar>
//       {/* Optional: Add some content below the AppBar to see the effect */}
//       <Box sx={{ mt: 8 }}>
//         {" "}
//         {/* This margin-top offsets the content below the fixed AppBar */}
//         <Typography variant="body1" sx={{ p: 2 }}>
//           Your content goes here.
//         </Typography>
//       </Box>
//     </Box>
//   );
// }
