import * as React from "react";
import IconButton from "@mui/material/IconButton";
import Box from "@mui/material/Box";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";
import { PaletteMode } from "@mui/material";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";

// import components
import Home from "./components/home";
import ContactUs from "./components/contactForm";

// import styles
import "./App.css";
import {cyan, deepOrange, orange, teal } from "@mui/material/colors";

const ColorModeContext = React.createContext({ toggleColorMode: () => {} });

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

// function Mymenu() {
//   const theme = useTheme();
//   const colorMode = React.useContext(ColorModeContext);
//   return (
//     <Box
//       sx={{
//         display: "flex",
//         alignItems: "center",
//         justifyContent: "right",
//         color: "text.primary",
//         p: 3,
//       }}
//     >

//       <Button sx={{textTransform:"capitalize",mr:2}} href="/">Home</Button>
//       <Button variant="outlined" sx={{borderRadius: '20px',textTransform:"capitalize"}} href="/sayHello">Contact Us</Button>
//       {/* {theme.palette.mode} mode */}
//       <IconButton
//         sx={{ ml: 1 }}
//         onClick={colorMode.toggleColorMode}
//         color="inherit"
//       >
//         {theme.palette.mode === "dark" ? (
//           <Brightness7Icon />
//         ) : (
//           <Brightness4Icon />
//         )}
//       </IconButton>
//     </Box>
//   );
// }

export default function App() {
  const [mode, setMode] = React.useState<PaletteMode>("light");
  const [value, setValue] = React.useState(0);
  const getDesignTokens = (mode: PaletteMode) => ({
    palette: {
      mode,
      ...(mode === "light"
        ? {
            // palette values for light mode
            primary: teal,
            secondary: deepOrange,
            // divider: amber[200],
            // text: {
            //   primary: "#3f51b5",
            //   secondary: "#ec407a",
            // },
          }
        : {
            // // palette values for dark mode
            // primary: deepOrange,
            // divider: deepOrange[700],
            primary: cyan,
            secondary: orange,
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
  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };
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
        <Box sx={{ width: "100%" }}>
          <Box
            sx={{
              mt: 2,
              mr: 1,
              display: "flex",
              alignItems: "center",
              justifyContent: "right",
            }}
          >
            <Tabs
              value={value}
              onChange={handleChange}
              aria-label="basic tabs example"
            >
              <Tab label="Home" {...a11yProps(0)} />
              <Tab label="Contact Us" {...a11yProps(1)} />
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
            </Tabs>
          </Box>
          <TabPanel value={value} index={0}>
            <Home />
          </TabPanel>
          <TabPanel value={value} index={1}>
            <ContactUs />
          </TabPanel>
        </Box>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}
