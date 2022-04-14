import FeaturedPost from "../components/home_page/featured-post";
import { Fragment } from "react";
import Hero from "../components/home_page/Hero";

export default function Home() {
  const DUMMY_DATA = [
    {
      title: "blog1",
      image: "getting-started-nextjs.png",
      date: "2022-02-10",
      slug: "getting-started-nextjs1",
      excerpt: "NextJs is react framework for production",
    },
    {
      title: "blog1",
      image: "getting-started-nextjs.png",
      date: "2022-02-10",
      slug: "getting-started-nextjs1",
      excerpt: "NextJs is react framework for production",
    },
    {
      title: "blog1",
      image: "getting-started-nextjs.png",
      date: "2022-02-10",
      slug: "getting-started-nextjs1",
      excerpt: "NextJs is react framework for production",
    },
  ];

  return (
    <Fragment>
      <Hero />
      <FeaturedPost posts={DUMMY_DATA} />
    </Fragment>
  );
}
