import styles from "./Card.module.css";
import Link from "next/link";

const BlogCard = ({ slug, image, title, desc }) => {
  const imageBuffer = Buffer.from(image);
  const base64String = imageBuffer.toString("base64");
  return (
    <Link href={`/blog/${slug}`} className={styles.container}>
      <div className={styles.imageContainer}>
        <img
          src={`data:image/jpg;base64,${base64String}`}
          alt=""
          width={400}
          height={250}
          className={styles.image}
        />
      </div>
      <div className={styles.content}>
        <h1 className={styles.title}>{title}</h1>
        <p className={styles.desc}>{desc}</p>
      </div>
    </Link>
  );
};

export default BlogCard;
