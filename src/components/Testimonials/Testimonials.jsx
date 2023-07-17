import React from "react";
import styles from "./Testimonials.module.css";
import Hero from "../../../public/hero.png"

const testimonials = [
  {
    id: 1,
    name: "fhdbhfg th hrt rtujhrt rturt  erhe ",
    role: "Web Developer",
    avatar: "https://media.licdn.com/dms/image/C4D03AQGw7ojbxWiJnA/profile-displayphoto-shrink_800_800/0/1657742907920?e=2147483647&v=beta&t=RnS6_i9TIs647Smegh77hCdypD98_DpQsfCCIKT4lKs",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin at mollis nunc, id fermentum nisi. Donec efficitur quam sed ipsum vestibulum, vel molestie velit pharetra.",
  },
  {
    id: 2,
    name: "Jane Smith",
    role: "UX Designer",
    avatar: "https://media.licdn.com/dms/image/C4D03AQGw7ojbxWiJnA/profile-displayphoto-shrink_800_800/0/1657742907920?e=2147483647&v=beta&t=RnS6_i9TIs647Smegh77hCdypD98_DpQsfCCIKT4lKs",
    content:
      "Nulla facilisi. In hendrerit elit vel dapibus consequat. Fusce ac erat vitae ex semper finibus at sit amet tortor.",
  },
  {
    id: 2,
    name: "Jane Smith",
    role: "UX Designer",
    avatar: "https://media.licdn.com/dms/image/C4D03AQGw7ojbxWiJnA/profile-displayphoto-shrink_800_800/0/1657742907920?e=2147483647&v=beta&t=RnS6_i9TIs647Smegh77hCdypD98_DpQsfCCIKT4lKs",
    content:
      "Nulla facilisi. In hendrerit elit vel dapibus consequat. Fusce ac erat vitae ex semper finibus at sit amet tortor.",
  },
  {
    id: 2,
    name: "Jane Smith",
    role: "UX Designer",
    avatar: "https://media.licdn.com/dms/image/C4D03AQGw7ojbxWiJnA/profile-displayphoto-shrink_800_800/0/1657742907920?e=2147483647&v=beta&t=RnS6_i9TIs647Smegh77hCdypD98_DpQsfCCIKT4lKs",
    content:
      "Nulla facilisi. In hendrerit elit vel dapibus consequat. Fusce ac erat vitae ex semper finibus at sit amet tortor.",
  },
  {
    id: 2,
    name: "Jane Smith",
    role: "UX Designer",
    avatar: "https://media.licdn.com/dms/image/C4D03AQGw7ojbxWiJnA/profile-displayphoto-shrink_800_800/0/1657742907920?e=2147483647&v=beta&t=RnS6_i9TIs647Smegh77hCdypD98_DpQsfCCIKT4lKs",
    content:
      "Nulla facilisi. In hendrerit elit vel dapibus consequat. Fusce ac erat vitae ex semper finibus at sit amet tortor.",
  }
  
  // Add more testimonials as needed
];

const Testimonials = () => {
  return (
    <section className={styles.testimonialSection}>
      <div className={styles.servicesHeading}>
        <h2>Tesimonials</h2>
        <p>What Our Clients Say</p>
      </div>
      <div className={styles.testimonialsContainer}>
        <div className={styles.testimonialsGrid}>
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className={styles.testimonialCard}>
              <img
                src={testimonial.avatar}
                alt="Avatar"
                className={styles.avatar}
              />
              <h3 className={styles.name}>{testimonial.name}</h3>
              <p className={styles.role}>{testimonial.role}</p>
              <p className={styles.content}>{testimonial.content}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
