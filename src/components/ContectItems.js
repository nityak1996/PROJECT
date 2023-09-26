import { Box, useMediaQuery, useTheme } from "@mui/material";
import { CustomizedTypography } from "./styles";
const ContectItems = ({ title, discription, img, swap }) => {
  const isMatch = useMediaQuery(useTheme().breakpoints.down("md"));
  return (
    <Box
      display={"flex"}
      flexDirection={isMatch ? "column" : "row"}
      padding={10}
      justifyContent="space-between"
      alignItems="center"
      bgcolor={!swap && "#fff"}
    >
      {swap ? (
        <>
          {" "}
          <Box display={"flex"} flexWrap={"wrap"}>
            <CustomizedTypography
              fontSize={{ lg: 32, md: 28, sm: 24, xs: 20 }}
              color={"#734950"}
              padding={3}
              variant="h3"
              fontWeight={"bold"}
            >
              {title}
            </CustomizedTypography>

            <CustomizedTypography
              fontSize={{ lg: 24, md: 20, sm: 16, xs: 14 }}
              variant="caption"
              padding={3}
            >
              {discription}
            </CustomizedTypography>
          </Box>
          <img
            src={img}
            alt={title}
            loading="lazy"
            width={isMatch ? "100%" : "50%"}
            height={"300px"}
            style={{
              boxShadow: "10px 10px 20px #ccc",
              marginLeft: "10%",
              borderRadius: 20,
            }}
          />{" "}
        </>
      ) : (
        <>
          <img
            src={img}
            alt={title}
            loading="lazy"
            width={isMatch ? "100%" : "50%"}
            height={"300px"}
            style={{
              boxShadow: "10px 10px 20px #ccc",
              marginRight: "10%",
              borderRadius: 20,
            }}
          />
          <Box display={"flex"} flexWrap={"wrap"}>
            <CustomizedTypography
              fontSize={{ lg: 32, md: 28, sm: 24, xs: 20 }}
              color={"#734950"}
              padding={3}
              variant="h3"
            >
              {title}
            </CustomizedTypography>

            <CustomizedTypography
              fontSize={{ lg: 24, md: 20, sm: 16, xs: 14 }}
              variant="caption"
              padding={3}
            >
              {discription}
            </CustomizedTypography>
          </Box>
        </>
      )}
    </Box>
  );
};

export default ContectItems;
