import PostContent from "../../components/post/postDetail/PostContent";
import { getSinglePost } from "../../lib/posts-utils";

// import { getAllPosts } from "../../lib/posts-utils";

const PostDetailPage = ({post}) => {
  console.log(post);
  return <PostContent />;
};

export default PostDetailPage;

// export function getStaticProps(context) {
//   const postSlug = context;
//   return {
//     props: {},
//   };
// }

// export function getStaticPaths() {
//   const postsPaths = getAllPosts().map((post) => {
//     return { params: { slug: post.slug } };
//   });
//   return {
//     paths: postsPaths,
//     fallback: true,
//   };
// }

export function getServerSideProps (context) {
  
  console.log(context.params.slug.toString())
  const postSlug = context.params.slug
  const post = getSinglePost(postSlug)
  console.log(post)

  return {
    props: {
      post
    }
  }
  
}