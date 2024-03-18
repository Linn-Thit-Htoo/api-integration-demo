import axios from "axios";
import API_ENDPOINT from "../URL";

const Get_Blog = async (setData, setShowLoading) => {
  setShowLoading(true);
  await axios
    .get(`${API_ENDPOINT.URL}/Blog`)
    .then((res) => {
      if (res.status === 200) {
        res.data.map(({ BlogId, BlogTitle, BlogAuthor, BlogContent }) => {
          setData((item) => [
            ...item,
            { BlogId, BlogTitle, BlogAuthor, BlogContent },
          ]);
        });
        setShowLoading(false);
      }
    })
    .catch((err) => {
      console.error(err);
      setShowLoading(false);
    });
};
export default Get_Blog;
