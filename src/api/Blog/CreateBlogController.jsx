import axios from "axios";
import API_ENDPOINT from "../URL";
import ShowSweetAlert from "../../helper/ShowSweetAlert";

const Create_Blog = async (postBody, history, setShowLoading) => {
  setShowLoading(true);
  await axios
    .post(API_ENDPOINT.URL + "/Blog", postBody)
    .then((res) => {
      if (res.status === 201) {
        console.log(res.data);
        ShowSweetAlert(res.data, "success");
        history.push("/");
      }
    })
    .catch((err) => {
      setShowLoading(false);
      console.error(err);
    });
};
export default Create_Blog;
