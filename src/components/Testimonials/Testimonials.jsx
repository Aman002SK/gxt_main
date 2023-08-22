"use client";
import React, { useContext } from "react";
import styles from "./Testimonials.module.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { ThemeContext } from "@/context/ThemeContext";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Pagination, Navigation } from "swiper/modules";
import SectionHeading from "../shared/SectionHeading/SectionHeading";

const testimonials = [
  {
    id: 1,
    name: "Venkatesh",
    role: "Student",
    avatar:
      "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_640.png",
    content:
      "I am incredibly impressed by GXT's ability to deliver exceptional writing services within an extremely short timeframe. They not only met but exceeded my expectations by completing the writing task well before the deadline.",
  },
  {
    id: 2,
    name: "Sai Sandeep",
    role: "Senior Research Analyst @IBC Consultants",
    avatar:
      "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_640.png",
    content:
      "I'm truly impressed with the professionalism and technical proficiency of GXT SOLUTIONS. This automation has not only increased my productivity but also allowed me to focus on more strategic aspects of my work.",
  },
  {
    id: 3,
    name: "Mahesh",
    role: "Student",
    avatar:
      "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_640.png",
    content:
      "The team at GXT SOLUTIONS not only provided thorough editing that enhanced the clarity and coherence of my writing but also employed advanced plagiarism detection tools to ensure the originality of my content. The result was a polished and refined thesis that adhered to the highest standards of academic integrity.",
  },
  {
    id: 4,
    name: "Venkatesh",
    role: "Student",
    avatar:
      "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_640.png",
    content:
      "Working with GXT SOLUTIONS has been a seamless and positive experience. Their commitment to excellence and their ability to produce top-tier content in such a short period is a testament to their expertise and professionalism. I am grateful for their outstanding service and look forward to collaborating with them again in the future",
  },
  

  // Add more testimonials as needed
];

const Testimonials = () => {
  const { mode } = useContext(ThemeContext);
  return (
    <section className={styles.testimonialSection}>
      <SectionHeading title={`Tesimonials`} subTitle={`What Our Clients Say`} />
      <div className={styles.testimonialsContainer}>
        <Swiper
          slidesPerView={1}
          spaceBetween={100}
          breakpoints={{
            640: {
              slidesPerView: 2,
              spaceBetween: 175,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 200,
            },
            992: {
              slidesPerView: 3,
              spaceBetween: 250,
            },
            1200: {
              slidesPerView: 3,
              spaceBetween: 370,
            },
          }}
          loop={true}
          centeredSlides={true}
          navigation={true}
          modules={[Pagination, Navigation]}
          className={`mySwiper`}
        >
          {testimonials.map((testimonial) => (
            <SwiperSlide>
              <div
                key={testimonial.id}
                className={styles.testimonialCard}
                style={
                  mode === "dark" ? { backgroundColor: `#161616` } : undefined
                }
              >
                <img
                  src={testimonial.avatar}
                  alt="Avatar"
                  className={styles.avatar}
                />
                <p className={styles.content}>{testimonial.content}</p>
                <h3
                  className={styles.name}
                >{`- ${testimonial.name}, ${testimonial.role}`}</h3>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Testimonials;
