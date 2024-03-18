import BlogComponent from "../../components/BlogComponent";

export default function EditBlogPage({ history }) {
  return (
    <>
      <BlogComponent buttonName="Edit" history={history} />
    </>
  );
}
