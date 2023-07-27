import React, { useState, useEffect } from "react";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { IconButton } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import TextsmsIcon from "@mui/icons-material/Textsms";
import VisibilityIcon from "@mui/icons-material/Visibility";
import { ThemeProvider, createTheme } from "@mui/material/styles";
 // Replace 'background.jpg' with your image file name and path

import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
  Button,
} from "@mui/material";

import axios from "axios";
// Other imports...

// Other imports...

import { useNavigate } from "react-router-dom";
import { background } from "@chakra-ui/react";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: "#87B6A7",
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

const theme = createTheme();

export default function Pending() {
  const [data, setdata] = useState([]);
  const [loading, setLoading] = useState(null);
  const [openDialog, setOpenDialog] = useState(false);
  const [messageToShow, setMessageToShow] = useState("");
  const navigate = useNavigate();
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "http://localhost:2023/api/v1/auth/get"
        );
        setdata(response.data);
      } catch (e) {
        console.log(e);
      }
    };
    fetchData();
  }, []);

  const eventEdit = (event, id) => {
    event.preventDefault();
    navigate(`/update/${id}`);
  };

  const eventDelete = async (event, id) => {
    event.preventDefault();
    try {
      await axios.delete(`http://localhost:2023/api/v1/auth/del/${id}`);
      setdata((prevData) => prevData.filter((query) => query.id !== id));
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const handleOpenDialog = (message) => {
    setMessageToShow(message);
    setOpenDialog(true);
  };

  const handleCloseDialog = () => {
    setOpenDialog(false);
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        backgroundImage: `url('/images/bg.jpg')`,
        backgroundSize: "cover"
      }}
    >
      <ThemeProvider theme={theme}>
        <TableContainer
          component={Paper}
          sx={{ maxWidth: "700px", boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)" }}
        >
          <Table sx={{ minWidth: 700 }} aria-label="customized table">
            <TableHead>
              <TableRow>
                <StyledTableCell>ID</StyledTableCell>
                <StyledTableCell align="right">Name</StyledTableCell>
                <StyledTableCell align="right">Email</StyledTableCell>
                <StyledTableCell align="right"></StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {data.map((ele) => (
                <StyledTableRow key={ele.id}>
                  <StyledTableCell component="th" scope="row">
                    {ele.id}
                  </StyledTableCell>
                  <StyledTableCell align="right">{ele.name}</StyledTableCell>
                  <StyledTableCell align="right">{ele.email}</StyledTableCell>
                  <StyledTableCell align="right">
                    <div
                      style={{ display: "flex", justifyContent: "flex-end" }}
                    >
                      <IconButton
                        name={ele.id}
                        size="small"
                        onClick={() => handleOpenDialog(ele.message)}
                      >
                        <TextsmsIcon />
                      </IconButton>
                      <IconButton
                        name={ele.id}
                        onClick={(e) => eventEdit(e, ele.id)}
                        size="small"
                      >
                        <VisibilityIcon />
                      </IconButton>
                      <IconButton
                        name={ele.id}
                        onClick={(e) => eventDelete(e, ele.id)}
                        size="small"
                      >
                        <DeleteIcon />
                      </IconButton>
                    </div>
                  </StyledTableCell>
                </StyledTableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
        {/* Dialog for displaying message */}
        <Dialog open={openDialog} onClose={handleCloseDialog}>
          <DialogTitle>Message</DialogTitle>
          <DialogContent>
            <DialogContentText>{messageToShow}</DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleCloseDialog}>Close</Button>
          </DialogActions>
        </Dialog>
      </ThemeProvider>
    </div>
  );
}
