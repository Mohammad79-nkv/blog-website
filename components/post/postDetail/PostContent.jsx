import PostHeader from './PostHeader';
import classes from './PostContent.module.css'

const PostContent = () => {
    return ( 
        <article className={classes.content}>
            <PostHeader/>
            
        </article>
     );
}
 
export default PostContent;