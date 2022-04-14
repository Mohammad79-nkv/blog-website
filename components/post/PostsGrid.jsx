import PostItem from "./PostItem";
import classes from "./PostsGrid.module.css";

const PostsGrid = (props) => {
  const { posts } = props;
  return (
    <ul className={classes.grid}>
      {posts && posts.map((post) => <PostItem key={post.slug} {...post} />)}
    </ul>
  );
};

export default PostsGrid;
