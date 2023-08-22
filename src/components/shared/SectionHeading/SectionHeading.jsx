import styles from "./SectionHeading.module.css";
const SectionHeading = ({ title, subTitle }) => {
  return (
    <div className={styles.servicesHeading}>
      <h2>{title}</h2>
      {subTitle && <p>{subTitle}</p>}
    </div>
  );
};

export default SectionHeading;
