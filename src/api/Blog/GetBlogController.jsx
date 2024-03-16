import axios from "axios";
import API_ENDPOINT from "../URL";

const Get_Blog = async (setData, setShowLoading) => {
  setShowLoading(true);
  await axios
    .get(`${API_ENDPOINT.URL}/Blog`)
    .then((res) => {
      if (res.status === 200) {
        res.data.map(({ Blog_Id, Blog_Title, Blog_Author, Blog_Content }) => {
          setData((item) => [
            ...item,
            { Blog_Id, Blog_Title, Blog_Author, Blog_Content },
          ]);
        });
        setShowLoading(false);
      }
    })
    .catch((err) => {
      console.error(err);
    });
};
export default Get_Blog;
