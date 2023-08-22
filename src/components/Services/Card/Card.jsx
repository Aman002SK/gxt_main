import styles from "../Services.module.css";
import { useContext } from "react";
import { ThemeContext } from "@/context/ThemeContext";

export default function ServiceCard({
  image,
  altImage,
  title,
  description,
  onHover,
}) {
  const { mode } = useContext(ThemeContext);
  return (
    <div
      onMouseEnter={() => onHover({ image, altImage, title, description })}
      className={styles.card}
      style={mode === "dark" ? { backgroundColor: `#161616` } : undefined}
    >
      <div className={styles.cardHeader}>
        <div className={styles.serviceImage}>
          <img src={image} alt={altImage} className={styles.img} />
        </div>
        <h2 className={styles.cardTitle}>{title}</h2>
      </div>
      {/* <p className={styles.cardDescription}>{description}</p> */}
    </div>
  );
}
