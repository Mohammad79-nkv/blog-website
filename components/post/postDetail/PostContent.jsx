import Image from "next/image";
import PostHeader from "./PostHeader";
import ReactMarkdown from "react-markdown";
import classes from "./PostContent.module.css";

const PostContent = ({ post }) => {

  function image({ src, alt }) {
    return <Image src={src} alt={alt} width={600} height={300} />;
  }

  return (
    <article className={classes.content}>
      <PostHeader {...post} />
      <ReactMarkdown components={{ img: image }}>
        {post.content}
      </ReactMarkdown>
    </article>
  );
};

export default PostContent;
