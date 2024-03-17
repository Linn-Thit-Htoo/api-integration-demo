import axios from "axios";
import API_ENDPOINT from "../URL";

const Create_Blog = async (postBody, history, setShowLoading) => {
  setShowLoading(true);
  await axios
    .post(API_ENDPOINT.URL + "/Blog", postBody)
    .then((res) => {
      if (res.status === 201) {
        console.log(res.data);
        history.push("/");
      }
    })
    .catch((err) => {
      setShowLoading(false);
      console.error(err);
    });
};
export default Create_Blog;
