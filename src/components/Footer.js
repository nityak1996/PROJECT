import { Box, Button } from "@mui/material"
import { CustomizedTypography} from "./styles";

const Footer = () => {
  return (
   <Box display={"flex"} flexDirection={"column"}>
   <CustomizedTypography fontWeight={"bold"} fontSize={{lg:30,md:24,sm:18, sx:14}} variant="h3" padding={10} textAlign={"center"}>
   Ready for Any team Size
   </CustomizedTypography>
   <CustomizedTypography fontSize={{lg:24,md:20,sm:16,sx:14}} variant="div" textAlign={"center"} padding={4}>
   Optimized for any team size
   </CustomizedTypography>
  <Box display={"flex"} margin={"auto"} justifyContent={"center"} padding={5}>
  <Button sx={{mr:2,fontSize:{lg:18,md:17,sm:12,xs:8}}} variant="contained">Try Code_EnV For free</Button>
  <Button sx={{ml:2,fontSize:{lg:18,md:17,sm:12,xs:8}}} variant="outlined">Top to Sale</Button>
  </Box>

   </Box>
  )
}

export default Footer