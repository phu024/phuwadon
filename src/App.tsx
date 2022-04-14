import * as React from "react";
import IconButton from "@mui/material/IconButton";
import Box from "@mui/material/Box";
import { useTheme, ThemeProvider, createTheme } from "@mui/material/styles";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";
import { PaletteMode } from "@mui/material";
import { amber, grey} from "@mui/material/colors";
import Typography from "@mui/material/Typography";
import Home from "./components/home";

const ColorModeContext = React.createContext({ toggleColorMode: () => {} });

// function MyNav() {
//   const theme = useTheme();
//   const colorMode = React.useContext(ColorModeContext);
//   return (
//     <Box sx={{ flexGrow: 1 }}>
//       <AppBar position="static">
//         <Toolbar variant="dense">
//           <Typography
//             variant="h4"
//             sx={{ fontFamily: "'Pacifico', cursive;", my: 2 }}
//           >
//             I'am Phu.
//           </Typography>
//           <Box sx={{ ml: "auto" }}>
//             <IconButton
//               sx={{ ml: 1 }}
//               onClick={colorMode.toggleColorMode}
//               color="inherit"
//             >
//               {theme.palette.mode === "dark" ? (
//                 <Brightness7Icon />
//               ) : (
//                 <Brightness4Icon />
//               )}
//             </IconButton>
//             {/* {theme.palette.mode} mode */}
//           </Box>
//         </Toolbar>
//       </AppBar>
//     </Box>
//   );
// }

function Mymenu() {
  const theme = useTheme();
  const colorMode = React.useContext(ColorModeContext);
  return (
    <Box
      sx={{
        display: "flex",
        width: "100%",
        alignItems: "center",
        justifyContent: "right",
        bgcolor: "background.default",
        color: "text.primary",
        borderRadius: 1,
        p: 3,
      }}
    >
      <Typography sx={{ minWidth: 100 }}>Profile</Typography>
      <Typography sx={{ minWidth: 100 }}>Contact</Typography>
      {/* {theme.palette.mode} mode */}
      <IconButton
        sx={{ ml: 1 }}
        onClick={colorMode.toggleColorMode}
        color="inherit"
      >
        {theme.palette.mode === "dark" ? (
          <Brightness7Icon />
        ) : (
          <Brightness4Icon />
        )}
      </IconButton>
    </Box>
  );
}

export default function App() {
  const [mode, setMode] = React.useState<PaletteMode>("dark");
  const getDesignTokens = (mode: PaletteMode) => ({
    palette: {
      mode,
      ...(mode === "light"
        ? {
            // palette values for light mode
            primary: amber,
            divider: amber[200],
            text: {
              primary: grey[900],
              secondary: grey[800],
            },
          }
        : {
            // // palette values for dark mode
            // primary: deepOrange,
            // divider: deepOrange[700],
            // background: {
            //   default: deepOrange[900],
            //   paper: deepOrange[900],
            // },
            // text: {
            //   primary: "#fff",
            //   secondary: grey[500],
            // },
          }),
    },
  });
  const colorMode = React.useMemo(
    () => ({
      // The dark mode switch would invoke this method
      toggleColorMode: () => {
        setMode((prevMode: PaletteMode) =>
          prevMode === "light" ? "dark" : "light"
        );
      },
    }),
    []
  );

  // Update the theme only if the mode changes
  const theme = React.useMemo(() => createTheme(getDesignTokens(mode)), [mode]);

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <Mymenu />
        <Home />
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}
