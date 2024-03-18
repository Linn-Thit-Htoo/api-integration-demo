import axios from "axios";
import API_ENDPOINT from "../URL";
import ShowSweetAlert from "../../helper/ShowSweetAlert";

const Update_Blog = async (postBody, setShowLoading, history) => {
  setShowLoading(true);
  await axios
    .put(API_ENDPOINT.URL + "/Blog", postBody)
    .then((res) => {
      if (res.status === 202) {
        ShowSweetAlert(res.data, "success");
        history.push("/");
      }
    })
    .catch((err) => {
      console.error(err);
      ShowSweetAlert(err.response.data, "error");
      setShowLoading(false);
    });
};
export default Update_Blog;
