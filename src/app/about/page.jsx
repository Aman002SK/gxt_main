import React from "react";
import styles from "./page.module.css";
import Image from "next/image";
import Button from "@/components/Button/Button";

const About = () => {
  return (
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
          Creating tailored solutions for academic, corporate, and web application development needs.
          </h2>
        </div>
      </div>
      <div className={styles.textContainer}>
        <div className={styles.item}>
          <h1 className={styles.title}>Who Are We?</h1>
          <p className={styles.desc}>
          EduTrek is passionate about supporting researchers by providing the relevant content, 
          collaborating with others, and creating better content from their research work.

          We are experienced in providing editorial services to the authors, reviewers and 
          the editors of the scientific research community. We are also experienced in providing 
          solutions to the students globally, which  help them with obtaining graduation and 
          pursue their career.
          <br></br>
          <br></br>

          Students from around the world rely on EduTrek for all their academic assistance requirements. 
          EduTrek offers a diverse range of formats, making it the perfect online platform for students 
          seeking help with assignments and homework. Numerous factors contribute to the popularity of 
          EduTrek among students. These include the provision of accurate solutions with zero plagiarism, 
          access to highly knowledgeable tutors, affordability, and round-the-clock availability.
          </p>
        </div>
        <div className={styles.item}>
          <h1 className={styles.title}>What We Do?</h1>
          <p className={styles.desc}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus
            quae dolor, optio voluptatibus magnam iure esse tempora beatae, a
            suscipit eos. Animi quibusdam cum omnis officiis voluptatum quo ea
            eveniet? Lorem ipsum dolor sit amet consectetur adipisicing elit. -
            Creative Illustrations
            <br />
            <br /> - Dynamic Websites
            <br />
            <br /> - Academic 
            <br />
            <br /> - Corporate Solutions
          </p>
          <Button url="/contact" text="Contact" />
        </div>
      </div>
    </div>
  );
};

export default About;
