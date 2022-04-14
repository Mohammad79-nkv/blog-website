import Image from 'next/image';
import classes from './PostHeader.module.css'

const PostHeader = (props) => {
    const {title, image} = props;
    return ( 
        <headr className={classes.header}>
            <h1>{title}</h1>
            <Image src={image} alt={image}/>
        </headr>
     );
}
 
export default PostHeader;