import PostsGrid from '../post/PostsGrid';
import classes from './featured-post.module.css'

const FeaturedPost = (props) => {
    const {posts} = props;
    return ( 
        <section className={classes.latest}>
            <h2>Featured post</h2>
            <PostsGrid posts={posts} />
        </section>
     );
}
 
export default FeaturedPost;