import {
  AppBar,
  Box,
  Button,
  Link,
  Tab,
  Tabs,
  Toolbar,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import ApiIcon from "@mui/icons-material/Api";
import DrawerComp from "./DrawerComp";
import GoogleIcon from '@mui/icons-material/Google';
import EmailIcon from '@mui/icons-material/Email';
import { CustomizedTypography } from "./styles";

const links = ["Products", "Solution", "Pricing", "Enterprise"];

const Headers = () => {
  const isMatch = useMediaQuery(useTheme().breakpoints.down("md"));
  console.log(isMatch);
  return (
    <AppBar
      sx={{
        backgroundColor: "transparent",
        boxShadow: "0",
        position: "sticky",
      }}
    >
      {isMatch ? (
        <Box display={"flex"}>
          <ApiIcon sx={{ color: "black", padding: 1 }} />
          <Typography
            sx={{ padding: 0.5, color: "black" }}
            variant="h6"
            fontFamily={"fantasy"}
          >
            CodeEnv
          </Typography>
          <DrawerComp links={links} />
        </Box>
      ) : (
        <Toolbar>
          <Box
            sx={{
              display: "flex",
              width: "100%",

              alignItems: "center",
            }}
          >
            <ApiIcon sx={{ color: "black" }} />
            <Box>
              <Tabs component={Link} sx={{ textDecoration: "none" }}>
                {links.map((link, index) => (
                  <Tab
                    sx={{
                      fontWeight: "bold",
                      textDecoration: "none",
                      ":hover": {
                        textDecoration: "none",
                        textUnderlineOffset: "5px",
                      },
                    }}
                    label={link}
                    key={index}
                  />
                ))}
              </Tabs>
            </Box>
            <Box display={"flex"} marginLeft={"auto"}>
              <Button sx={{ mr: 2 }} variant="outlined">
                Talk To Us
              </Button>
              <Button sx={{ ml: 2 }} variant="contained">
                Try For Free
              </Button>
            </Box>
          </Box>
        </Toolbar>
      )}

      <Box width="100%" height="100vh">
        <video
          width={"100%"}
          height={"70%"}
          autoPlay
          loop
          muted
          playsInline
          src="/video.mp4"
        ></video>
        <Box display={"flex"} width={"100%"}>
          <CustomizedTypography
          fontWeight={"bold"}
          fontSize={{lg:30,md:24,sm:18, sx:14}}
            margin={"auto"}
            variant="h4"
            color={"black"}
            textAlign={"center"}
          >
            Build Your Software Hassel And With Top Notch Quality
          </CustomizedTypography>
        </Box>
        <Box
          width={"100%"}
          display={"flex"}
          margin={"auto"}
          justifyContent={"center"}
          marginTop={5}
        >
          <Button endIcon={<EmailIcon/>} variant="outlined" sx={{ mr: 3 }}>
            signup 
          </Button>
          <Button color="error" endIcon={<GoogleIcon/>} sx={{ ml: 3 }} variant="contained">
            signup 
          </Button>
        </Box>
      </Box>
    </AppBar>
  );
};

export default Headers;
