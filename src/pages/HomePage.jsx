import AppBarComponent from "../components/AppBarComponent";
import React, { useState, useEffect } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Get_Blog from "../api/Blog/GetBlogController";
import { Backdrop, CircularProgress } from "@mui/material";

export default function HomePage({ history }) {
  const [data, setData] = useState([]);
  const [showLoading, setShowLoading] = useState(false);

  useEffect(() => {
    Get_Blog(setData, setShowLoading);
  }, []);
  return (
    <>
      <AppBarComponent history={history} />
      <TableContainer component={Paper} sx={{ mt: 3 }}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell align="right">Blog ID</TableCell>
              <TableCell align="right">Blog Title</TableCell>
              <TableCell align="right">Blog Author</TableCell>
              <TableCell align="right">Blog Content</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map((row) => (
              <TableRow
                key={row.Blog_Id}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell align="right">{row.Blog_Id}</TableCell>
                <TableCell align="right">{row.Blog_Title}</TableCell>
                <TableCell align="right">{row.Blog_Author}</TableCell>
                <TableCell align="right">{row.Blog_Content}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <Backdrop
        sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={showLoading}
      >
        <CircularProgress color="inherit" />
      </Backdrop>
    </>
  );
}
