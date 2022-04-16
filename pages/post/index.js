import AllPosts from "../../components/post/AllPosts";
import { getAllPosts } from "../../lib/posts-utils";

const PostsPage = ({allPosts}) => {
  
  return <AllPosts posts={allPosts} />;
};

export default PostsPage;

export function getStaticProps () {
  
  const allPosts = getAllPosts();
  
  return {
    props:{
      allPosts
    }
  }
}
