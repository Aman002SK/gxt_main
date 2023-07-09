import Image from "next/image";
import styles from "./page.module.css";
import Hero from "public/hero.png";
import Button from "@/components/Button/Button";

export default function Home() {
  return (
    <div>
      <div className={styles.container}>
        <div className={styles.item}>
          <h1 className={styles.title}>
            Better design for your digital products.
          </h1>
          <p className={styles.desc}>
            Turning your Idea into Reality. We bring together the teams from the
            global tech industry.
          </p>
          <Button url="/portfolio" text="See Our Works" />
        </div>
        <div className={styles.item}>
          <Image src={Hero} alt="" className={styles.img} />
        </div>
      </div>

      <div className={styles.servicesHeading}>
        <h2>BEST SERVICES</h2>
        <p>We Have Services Offer For You</p>
      </div>

      <div className={styles.cardGrid}>
        <div className={styles.card}>
          <div className={styles.cardHeader}>
            <div className={styles.serviceImage}>
              <img
                src="/manuscript-image.png"
                alt="Manuscript Preparation"
                className={styles.serviceImg}
              />
            </div>
            <h2 className={styles.cardTitle}>Manuscript Preparation</h2>
          </div>
          <p className={styles.cardDescription}>
            Increase your chances of getting published in international
            peer-reviewed journals by using our manuscript writing services.
          </p>
        </div>

        <div className={styles.card}>
          <div className={styles.cardHeader}>
            <div className={styles.serviceImage}>
              <img
                src="/manuscript-image.png"
                alt="Manuscript Preparation"
                className={styles.serviceImg}
              />
            </div>
            <h2 className={styles.cardTitle}>Editorial Services</h2>
          </div>
          <p className={styles.cardDescription}>
            Ensure that your article is accurate, clear and correct by using our
            copy editing, language editing and proof reading services.
          </p>
        </div>
        <div className={styles.card}>
          <div className={styles.cardHeader}>
            <div className={styles.serviceImage}>
              <img
                src="/manuscript-image.png"
                alt="Manuscript Preparation"
                className={styles.serviceImg}
              />
            </div>
            <h2 className={styles.cardTitle}>Project Management</h2>
          </div>
          <p className={styles.cardDescription}>
            Give us the responsibility of overseeing your projects and complete
            the work as per the planned schedule, budget and effective
            communication.
          </p>
        </div>

        <div className={styles.card}>
          <div className={styles.cardHeader}>
            <div className={styles.serviceImage}>
              <img
                src="/manuscript-image.png"
                alt="Manuscript Preparation"
                className={styles.serviceImg}
              />
            </div>
            <h2 className={styles.cardTitle}>Peer Review Services</h2>
          </div>
          <p className={styles.cardDescription}>
            Handle the peer review process in the most proficient and
            comprehensive way.
          </p>
        </div>

        <div className={styles.card}>
          <div className={styles.cardHeader}>
            <div className={styles.serviceImage}>
              <img
                src="/manuscript-image.png"
                alt="Manuscript Preparation"
                className={styles.serviceImg}
              />
            </div>
            <h2 className={styles.cardTitle}>Plagiarism Report</h2>
          </div>
          <p className={styles.cardDescription}>
            Plagiarism is a serious offence. Submit your work and receive a
            30-minute authentic plagiarism report.
          </p>
        </div>

        <div className={styles.card}>
          <div className={styles.cardHeader}>
            <div className={styles.serviceImage}>
              <img
                src="/manuscript-image.png"
                alt="Manuscript Preparation"
                className={styles.serviceImg}
              />
            </div>
            <h2 className={styles.cardTitle}>Plagiarism Elimination</h2>
          </div>
          <p className={styles.cardDescription}>
            Any journal or university will not accept a submission with a
            plagiarism value of more than 5%. Avail our services to lower the
            plagiarism to 5% or less.
          </p>
        </div>
      </div>
    </div>
  );
}
