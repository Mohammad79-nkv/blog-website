import AllPosts from "../../components/post/AllPosts";

const PostsPage = () => {
  const DUMMY_DATA = [
    {
      title: "blog1",
      image: "getting-started-nextjs.png",
      date: "2022-02-10",
      slug: "getting-started-nextjs1",
      excerpt: "NextJs is react framework for production",
    },
    {
      title: "blog1",
      image: "getting-started-nextjs.png",
      date: "2022-02-10",
      slug: "getting-started-nextjs1",
      excerpt: "NextJs is react framework for production",
    },
    {
      title: "blog1",
      image: "getting-started-nextjs.png",
      date: "2022-02-10",
      slug: "getting-started-nextjs1",
      excerpt: "NextJs is react framework for production",
    },
  ];
  return <AllPosts posts={DUMMY_DATA} />;
};

export default PostsPage;
