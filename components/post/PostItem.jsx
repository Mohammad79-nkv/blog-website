import Image from "next/image";
import  Link  from "next/link";
import classes from "./PostItem.module.css";

const PostItem = (props) => {
  const { title, image, date, slug, excerpt } = props;
  
  const formatedDate = new Date(date).toLocaleDateString("en-US", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
  
  const imagePath = `/images/posts/${image}`;
  const linkPath = `/post/${slug}`
  
  return (
    <li className={classes.post}>
      <Link href={linkPath}>
        <a>
          <div className={classes.image}>
            <Image src={imagePath} alt={image} width={300} height={200} layout="responsive" />
          </div>
          <div className={classes.content}>
            <h3>{title}</h3>
            <time>{formatedDate}</time>
            <p>{excerpt}</p>
          </div>
        </a>
      </Link>
    </li>
  );
};

export default PostItem;
