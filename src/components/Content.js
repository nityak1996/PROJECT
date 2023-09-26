import { Box } from "@mui/material";
import ContectItems from "./ContectItems";

const contectArray = [
  {
    title: "Get Things Done",
    discription:
      "lightweight but powerful source code editor which runs on your desktop and is available for Windows. macOS and Linux. It comes with built-in support for javascript, typescript and Node",
    img: "/1.jpg",
  },
  {
    title: "Productivity Is Brilliant",
    discription:
      "lightweight but powerful source code editor which runs on your desktop and is available for Windows. macOS and Linux. It comes with built-in support for javascript, typescript and Node",
    img: "/2.jpg",
  },
  {
    title: "Fast Development By Nitya ",
    discription:
      "lightweight but powerful source code editor which runs on your desktop and is available for Windows. macOS and Linux. It comes with built-in support for javascript, typescript and Node",
    img: "/3.jpg",
  },
];

const Content = () => {
  return (
    <Box
      bgcolor={"#fbf2f2"}
      display={"flex"}
      justifyContent={"center"}
      flexDirection={"column"}
      width={"100vw"}
      height={"10%"}
    >
      {contectArray.map((cont, index) => (
        <ContectItems
          title={cont.title}
          discription={cont.discription}
          img={cont.img}
          key={index}
          swap={index % 2 === 0}
        />
      ))}
    </Box>
  );
};

export default Content;
