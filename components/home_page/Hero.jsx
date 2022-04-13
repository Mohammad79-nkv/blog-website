import Image from "next/image";
import classes from "./hero.module.css";

const Hero = () => {
  return (
    <section className={classes.hero}>
      <div className={classes.image}>
        <Image src="/images/site/me.jpg" alt="me" width={300} height={300} />
      </div>
      <h1>Hi, I`m Mohammad</h1>
      <p>
        I share blog about web development specifically FrontEnd in this website
      </p>
    </section>
  );
};

export default Hero;
