import React, { useState, useEffect } from "react";
import {
  Backdrop,
  Button,
  Card,
  CircularProgress,
  TextField,
} from "@mui/material";
import AppBarComponent from "../../components/AppBarComponent";
import Create_Blog from "../../api/Blog/CreateBlogController";

export default function CreateBlogPage({ history }) {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [content, setContent] = useState("");
  const [disabledBtn, setDisabledBtn] = useState(true);
  const [showLoading, setShowLoading] = useState(false);

  const btnCreate = () => {
    const postBody = {
      Blog_Title: title,
      Blog_Author: author,
      Blog_Content: content,
    };
    Create_Blog(postBody, history, setShowLoading);
  };

  return (
    <>
      <AppBarComponent history={history} />
      <Card
        sx={{
          width: 300,
          height: 350,
          mt: 4,
          ml: 3,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <TextField
          label="Blog Title"
          type="text"
          variant="outlined"
          sx={{ width: "80%" }}
          onChange={(e) => [
            setTitle(e.target.value),
            e.target.value === "" ||
            e.target.value === null ||
            author === "" ||
            author === null ||
            content === "" ||
            content === null
              ? setDisabledBtn(true)
              : setDisabledBtn(false),
          ]}
        />
        <TextField
          label="Blog Author"
          type="text"
          variant="outlined"
          sx={{ my: 3, width: "80%" }}
          onChange={(e) => [
            setAuthor(e.target.value),
            e.target.value === "" ||
            e.target.value === null ||
            title === "" ||
            title === null ||
            content === "" ||
            content === null
              ? setDisabledBtn(true)
              : setDisabledBtn(false),
          ]}
        />
        <TextField
          label="Blog Content"
          type="text"
          variant="outlined"
          sx={{ width: "80%" }}
          onChange={(e) => [
            setContent(e.target.value),
            e.target.value === "" ||
            e.target.value === null ||
            title === "" ||
            title === null ||
            author === "" ||
            author === null
              ? setDisabledBtn(true)
              : setDisabledBtn(false),
          ]}
        />
        <Button
          variant="outlined"
          sx={{ mt: 3, width: "80%" }}
          disabled={disabledBtn}
          onClick={() => {
            btnCreate();
          }}
        >
          Create
        </Button>
      </Card>
      <Backdrop
        sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={showLoading}
      >
        <CircularProgress color="inherit" />
      </Backdrop>
    </>
  );
}
