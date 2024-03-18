import BlogComponent from "../../components/BlogComponent";

export default function CreateBlogPage({ history }) {
  return (
    <>
      <BlogComponent buttonName="Create" history={history} />
    </>
  );
}
