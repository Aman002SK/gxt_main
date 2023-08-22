import React from "react";
import styles from "./page.module.css";
import Image from "next/image";
import Button from "@/components/Button/Button";
import SectionHeading from "@/components/shared/SectionHeading/SectionHeading";
import TeamCard from "./TeamCard/TeamCard";

const About = () => {
  return (
    <div className="container">
 <div className={styles.container}>
      <div className={styles.imgContainer}>
        <Image
          src="https://images.pexels.com/photos/3194521/pexels-photo-3194521.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          fill={true}
          alt=""
          className={styles.img}
        />
        <div className={styles.imgText}>
          <h1 className={styles.imgTitle}>Unleashing Creativity</h1>
          <h2 className={styles.imgDesc}>
            Creating tailored solutions for academic, digital, and web
            application development needs.
          </h2>
        </div>
      </div>
      <div className={styles.textContainer}>
        <div className={styles.item}>
          <SectionHeading title={`Who Are We?`} />
          <p className={styles.desc}>
           

At GXT Solutions, we are a dynamic team of creators, problem-solvers, and visionaries who thrive on turning ideas into impactful realities. With a passion for innovation, we specialize in providing top-tier BPO services, crafting compelling content, and shaping outstanding web experiences.
            <br></br>
            <br></br>
            clients from around the world rely on Gxt Solutions for all their
            Digital, Web-app development, and academic assistance requirements. Gxt offers a diverse range of
            formats, making it the perfect online platform for students seeking
            help with assignments and homework. Numerous factors contribute to
            the popularity of Gxt among our clients. These include the
            provision of accurate solutions with zero complains, access to
            highly knowledgeable developers, affordability, and round-the-clock
            availability.
          </p>
        </div>
        <div className={styles.item}>
          <SectionHeading title={`What We Do?`} />
          <p className={styles.desc}>
          Unlock the Power of Words:
Elevate your brand with captivating content that resonates. Our skilled writers craft words that inspire, engage, and convert. From blog posts to marketing copy, we transform ideas into impactful narratives.
<br/>
<br/>
<br/>
Crafting Digital Experiences:
Embark on a digital journey that captivates your audience. Our web development experts blend creativity and technology to design immersive websites that leave a lasting impression. Seamless functionality meets stunning design.
<br/>
<br/>
<br/>
Beyond Boundaries, Beyond Imagination:
Dive into a realm of endless possibilities. Our array of services goes beyond writings and web development. From graphic design to SEO optimization, we turn visions into reality. Whatever you dream, we bring to life.
            <br/>
            <br/>
            <br/> Why Choose Us?
            <br/>
            <br />
            <br /> Expertise: Our team comprises seasoned professionals in writing and web development, ensuring top-tier results every time.
            <br />
            <br /> Innovation: We stay at the forefront of industry trends, delivering cutting-edge solutions that set you apart.
            <br />
            <br /> Collaboration: Your vision drives us. We work hand in hand, valuing your input at every stage of the process.
            <br/>
            <br /> Results: We measure our success by your success. Expect outcomes that exceed expectations.
          </p>
          <Button url="/contact" text="Contact" />
        </div>
      </div>
      <SectionHeading title={`Our Team`} />
      <div className={styles.teamContainer}>
        <TeamCard
          image={"/team.jpeg"}
          name={"Vishal Rai"}
          position={"CO-Founder"}
        />
        <TeamCard
          image={"/team.jpeg"}
          name={"Aman Rai"}
          position={"CEO & Founder"}
        />
        
      </div>
    </div>
    </div>
   
  );
};

export default About;
