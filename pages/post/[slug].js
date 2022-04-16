import PostContent from "../../components/post/postDetail/PostContent";
import { getSinglePost } from "../../lib/posts-utils";

// import { getAllPosts } from "../../lib/posts-utils";

const PostDetailPage = ({ post }) => {
  console.log(post);
  return <PostContent post={post} />;
};

export default PostDetailPage;

export function getServerSideProps(context) {
  console.log(context.params.slug.toString());
  const postSlug = context.params.slug;
  const post = getSinglePost(postSlug);

  return {
    props: {
      post,
    },
  };
}
