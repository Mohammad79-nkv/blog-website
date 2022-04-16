import FeaturedPost from "../components/home_page/featured-post";
import { Fragment } from "react";
import Hero from "../components/home_page/Hero";
import { getFeaturedPosts } from "../lib/posts-utils";

export default function Home({featuredPosts}) {
  

  return (
    <Fragment>
      <Hero />
      <FeaturedPost posts={featuredPosts} />
    </Fragment>
  );
}

export function getStaticProps() {
  const featuredPosts = getFeaturedPosts();

  return {
    props: {
      featuredPosts,
    },
  };
}
