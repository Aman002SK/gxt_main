'use client';
import Image from "next/image";
import styles from "./page.module.css";
import Hero from "public/hero.png";
import Button from "@/components/Button/Button";
import Testimonials from "@/components/Testimonials/Testimonials";
import Services from "@/components/Services/Services";
import Contact from "@/components/Contact/Contact";
import ServiceForm from "./serviceForm/ServiceForm";
import { useEffect, useState } from "react";
import ContactSection from "@/components/Contact/ContactSection";

export default function Home() {
  const images = [
    '/bg1.jpeg',
    '/bg2.jpeg',
    '/bg3.jpeg',
    '/bg4.jpeg',
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 2000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  const containerStyle = {
    padding: '10% 0',
    position: 'relative',
  };

  const backgroundDivStyle = {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backgroundImage: `url('${images[currentImageIndex]}')`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    opacity: 0.7,
    transition: 'background 0.3s, border-radius 0.3s, opacity 0.3s',
  };
  return (
    <div>
      <div style={containerStyle}>

        <div className={`${styles.container} container`}>
          <div className={styles.item}>
            <h1 className={styles.title}>
            Elevating brands with captivating content, immersive web development, and digital Solutions.
            </h1>
            <p className={styles.desc}>
            Your Vision, Our Expertise - Unleash Possibilities.
            </p>
            <Button url="/portfolio" text="See Our Works" />
          </div>
          {/* <div className={styles.item}>
            <Image src={Hero} alt="" className={styles.img} />
          </div> */}
        </div>
        <div style={backgroundDivStyle}></div>

      </div>
      <div className="container">
        <Services />
        <Testimonials />
      </div>
      <ContactSection />
      {/* <ServiceForm /> */}
      {/* <Contact /> */}


    </div>
  );
}
