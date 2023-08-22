import Link from "next/link"
import styles from "./contactsection.module.css"
const ContactSection = () => {
    return (
        <div className={styles.containerStyle}>
            <div className={`container ${styles.containerDivStyle}`}>
                <h2 className={styles.title}>
                    Contact Us
                </h2>
                <p className={styles.desc}>Get in Touch with GXT SOLUTIONS – Let's Create Something Extraordinary Together!  </p>
                <Link href="/contact" className={styles.button}>Let's Connect</Link>
            </div>

            <div className={styles.backgroundDivStyle}></div>
        </div>
    )
}

export default ContactSection