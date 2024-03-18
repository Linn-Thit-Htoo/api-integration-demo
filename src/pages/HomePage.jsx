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
import { Backdrop, Button, CircularProgress } from "@mui/material";
import Delete_Blog from "../api/Blog/DeleteBlogController";

export default function HomePage({ history }) {
  const [data, setData] = useState([]);
  const [showLoading, setShowLoading] = useState(false);

  useEffect(() => {
    Get_Blog(setData, setShowLoading);
  }, []);

  const btnDelete = (id) => {
    if (window.confirm("Are you sure you want to delete?")) {
      Delete_Blog(id, setShowLoading, setData);
    }
  };
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
              <TableCell align="right">Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map((row) => (
              <TableRow
                key={row.BlogId}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell align="right">{row.BlogId}</TableCell>
                <TableCell align="right">{row.BlogTitle}</TableCell>
                <TableCell align="right">{row.BlogAuthor}</TableCell>
                <TableCell align="right">{row.BlogContent}</TableCell>
                <TableCell align="right">
                  <Button
                    variant="outlined"
                    onClick={() => history.push(`/blog/edit?id=${row.BlogId}`)}
                  >
                    Edit
                  </Button>
                  <Button
                    variant="outlined"
                    color="error"
                    sx={{ ml: 3 }}
                    onClick={() => {
                      btnDelete(row.BlogId);
                    }}
                  >
                    Delete
                  </Button>
                </TableCell>
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
