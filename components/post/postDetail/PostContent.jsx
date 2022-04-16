import PostHeader from './PostHeader';
import ReactMarkdown from 'react-markdown';
import classes from './PostContent.module.css'

const PostContent = ({post}) => {
    return ( 
        <article className={classes.content}>
            <PostHeader {...post}/>
            <ReactMarkdown>{post.content}</ReactMarkdown>
        </article>
     );
}
 
export default PostContent;