import Image from 'next/image';
import classes from './PostHeader.module.css'

const PostHeader = (props) => {
    const {title, image} = props;
    
    const imageSrc = `/images/posts/${image}`
    return ( 
        <headr className={classes.header}>
            <h1>{title}</h1>
            <Image src={imageSrc} alt={image} width={300} height={200}/>
        </headr>
     );
}
 
export default PostHeader;