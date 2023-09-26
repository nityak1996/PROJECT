import {
  Drawer,
  IconButton,
  List,
  ListItemButton,
  ListItemText,
} from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';
import { useState } from "react";



const DrawerComp = ({links}) => {
const [open,setOpen]= useState(false)

  return (
    <>
      <Drawer open={open} onClose={()=>setOpen(false)}>
        <List>
          {links.map((item,index) => (
            <ListItemButton key={index} onClick={()=>setOpen(false)}>
            <ListItemText>{item}</ListItemText>
            </ListItemButton>
          ))}
        </List>
      </Drawer>
      <IconButton onClick={()=>setOpen(true)} sx={{marginLeft:"auto"}}>
      <MenuIcon color="white"/>
      </IconButton>
    </>
  );
};

export default DrawerComp;
