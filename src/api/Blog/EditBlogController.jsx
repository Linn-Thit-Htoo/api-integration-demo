import axios from "axios";
import API_ENDPOINT from "../URL";

const Edit_Blog = async (
  id,
  setTitle,
  setAuthor,
  setContent,
  setShowLoading
) => {
  setShowLoading(true);
  await axios
    .get(API_ENDPOINT.URL + `/Blog/${id}`)
    .then((res) => {
      if (res.status === 200) {
        setTitle(res.data.BlogTitle);
        setAuthor(res.data.BlogAuthor);
        setContent(res.data.BlogContent);
        console.log(res.data.BlogContent);
        setShowLoading(false);
      }
    })
    .catch((err) => {
      console.error(err);
      setShowLoading(false);
    });
};
export default Edit_Blog;