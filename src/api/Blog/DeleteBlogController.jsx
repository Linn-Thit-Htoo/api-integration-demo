import axios from "axios";
import API_ENDPOINT from "../URL";
import Get_Blog from "./GetBlogController";
import ShowSweetAlert from "../../helper/ShowSweetAlert";

const Delete_Blog = async (id, setShowLoading, setData) => {
  setShowLoading(true);
  await axios
    .delete(API_ENDPOINT.URL + `/Blog/${id}`)
    .then((res) => {
      if (res.status === 202) {
        ShowSweetAlert(res.data, "success");
        setShowLoading(false);
        setData([]);
        Get_Blog(setData, setShowLoading);
      }
    })
    .catch((err) => {
      console.error(err);
      setShowLoading(false);
    });
};
export default Delete_Blog;
