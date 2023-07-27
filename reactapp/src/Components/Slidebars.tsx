import * as React from "react";
import { useNavigate } from "react-router-dom";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import MenuIcon from "@material-ui/icons/Menu";
import IconButton from "@mui/material/IconButton";

export default function Slidebars() {
  const [open, setOpen] = React.useState(false);
  const navigate = useNavigate();

  const toggleDrawer = () => {
    setOpen(!open);
  };

 

  return (
    <div>
      <IconButton onClick={toggleDrawer} color="inherit">
        <MenuIcon />
      </IconButton>
      <Drawer anchor="left" open={open} onClose={toggleDrawer} >
        <Box sx={{ width: 250 }} role="presentation">
          <List >
            <ListItem disablePadding>
              <ListItemButton onClick={()=>navigate("Queries")}>
                <ListItemIcon>
                  <InboxIcon />
                </ListItemIcon>
                <ListItemText primary="Queries" />
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton >
                <ListItemIcon>
                  <MailIcon />
                </ListItemIcon>
                <ListItemText primary="Tickets" />
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton >
                <ListItemIcon>
                  <InboxIcon />
                </ListItemIcon>
                <ListItemText primary="Solved" />
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton  >
                <ListItemIcon>
                  <MailIcon />
                </ListItemIcon>
                <ListItemText primary="Assign" />
              </ListItemButton>
            </ListItem>
          </List>
          <Divider />
          <List>
            <ListItem disablePadding >
              <ListItemButton  >
                <ListItemIcon>
                  <InboxIcon />
                </ListItemIcon>
                <ListItemText primary="All mail" />
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton >
                <ListItemIcon>
                  <MailIcon />
                </ListItemIcon>
                <ListItemText primary="Trash" />
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton >
                <ListItemIcon>
                  <InboxIcon />
                </ListItemIcon>
                <ListItemText primary="Spam" />
              </ListItemButton>
            </ListItem>
          </List>
        </Box>
      </Drawer>
    </div>
  );
}
