import React from "react";
import styles from "./page.module.css";
import Image from "next/image";
import Button from "@/components/Button/Button";
import ServiceForm from "../serviceForm/ServiceForm";

export const metadata = {
  title: "EduTrek Contact Information",
  description: "This is Contact Page",
};

const Contact = () => {
  return (
    // <div className={styles.container}>
    //   <h1 className={styles.title}>Let's Keep in Touch</h1>
    //   <div className={styles.content}>
    //     <div className={styles.imgContainer}>
    //       <Image
    //         src="/contact.png"
    //         alt=""
    //         fill={true}
    //         className={styles.image}
    //       />
    //     </div>
    //     <form className={styles.form}>
    //       <input type="text" placeholder="name" className={styles.input} />
    //       <input type="text" placeholder="email" className={styles.input} />
    //       <textarea
    //         className={styles.textArea}
    //         placeholder="message"
    //         cols="30"
    //         rows="10"
    //       ></textarea>
    //       <Button url="#" text="Send"/>
    //     </form>
    //   </div>
    // </div>
    <ServiceForm />
  );
};

export default Contact;
// import React from "react";
// import styles from "./page.module.css";
// import Image from "next/image";

// export const metadata = {
//   title: "EduTrek Contact Information",
//   description: "This is Contact Page",
// };

// const Contact = () => {
//   const handleWhatsAppButtonClick = () => {
//     // Replace "YOUR_PHONE_NUMBER" with your actual phone number
//     const phoneNumber = 9025795814;
//     const message = "Hello, I would like to get in touch.";

//     // Generate the WhatsApp message link
//     const encodedMessage = encodeURIComponent(message);
//     const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;

//     // Open the WhatsApp message link
//     window.open(whatsappLink);
//   };

//   return (
//     <div className={styles.container}>
//       <h1 className={styles.title}>Let's Keep in Touch</h1>
//       <div className={styles.content}>
//         <div className={styles.imgContainer}>
//           <Image src="/contact.png" alt="" fill={true} className={styles.image} />
//         </div>
//         <form className={styles.form}>
//           <input type="text" placeholder="name" className={styles.input} />
//           <input type="text" placeholder="email" className={styles.input} />
//           <textarea
//             className={styles.textArea}
//             placeholder="message"
//             cols="30"
//             rows="10"
//           ></textarea>
//           <button onClick={handleWhatsAppButtonClick} className={styles.button}>
//             Send WhatsApp Message
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default Contact;
