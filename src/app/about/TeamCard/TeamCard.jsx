"use client";
import styles from "./TeamCard.module.css";
import { useContext } from "react";
import { ThemeContext } from "@/context/ThemeContext";
import Image from "next/image";

const TeamCard = ({ image, name, position }) => {
  const { mode } = useContext(ThemeContext);
  return (
    <div className={styles.container}>
      <div className={styles.imageContainer}>
        <Image
          className={styles.image}
          width={500}
          height={500}
          src={image}
        />
      </div>
      <div
        className={styles.content}
        style={mode === "light" ? { backgroundColor: `white` } : undefined}
      >
        <span className={styles.borderTop}></span>
        <h2>{name}</h2>
        <h4>{position}</h4>
      </div>
    </div>
  );
};

export default TeamCard;
