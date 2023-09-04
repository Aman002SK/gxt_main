"use client"; // This is a client component 👈🏽
import axios from "axios";
import { useState } from "react";
import styles from "./page.module.css";
import { Oval } from "react-loader-spinner";

export default function ServiceForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [service, setService] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);


  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const response = await fetch("/api/sendEmail", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, email, service, subject, message }),
      });

      if (response.ok) {
        setIsSubmitted(true);
        setName("");
        setEmail("");
        setService("");
        setSubject("");
        setMessage("");
        // Reset isSubmitted to false after 5 seconds
        setTimeout(() => {
          setIsSubmitted(false);
        }, 5000);
      } else {
        throw new Error("Failed to send email.");
      }
    } catch (error) {
      console.error(error);
    }

    setIsLoading(false);
  };

  return (
    <div className="container">
      <div className={`${styles.container} mb-[5%]`}>
        <h1 className={styles.title}>Get your work started</h1>

        <div className={styles.content}>
          <form className={styles.form}>
            <input
              type="text"
              placeholder="Name"
              className={styles.input}
              name="userName"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <input
              type="text"
              placeholder="Email"
              className={styles.input}
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <select
              className={styles.input}
              name="dropdownValue"
              value={service}
              onChange={(e) => setService(e.target.value)}
            >
              <option value="" className={styles.option} disabled>
                Select service
              </option>
              <option value="Web Development" className={styles.option}>
                Web Development
              </option>
              <option value="Inbound Services" className={styles.option}>
                Data Entry/Inbound Services
              </option>
              <option value="Manuscript Preparation" className={styles.option}>
                Manuscript Preparation
              </option>
              <option value="Editorial Services" className={styles.option}>
                Editorial Services
              </option>
              <option value="Project Management" className={styles.option}>
                Project Management
              </option>
              <option value="Peer Review Services" className={styles.option}>
                Peer Review Services
              </option>
              <option value="Plagiarism Report" className={styles.option}>
                Plagiarism Report
              </option>
              <option value="Plagiarism Elimination" className={styles.option}>
                Plagiarism Elimination
              </option>
            </select>
            <input
              type="text"
              placeholder="Subject"
              className={styles.input}
              name="subject"
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
            />
            <textarea
              className={styles.textArea}
              placeholder="Message"
              cols="30"
              rows="10"
              name="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            ></textarea>
            {/* <div className={styles.formGroup}>
              <label htmlFor="file">Upload File </label>
              <input
                type="file"
                id="file"
                name="file"
                onChange={handleFileChange}
              />
            </div> */}
            {isLoading ? (
              <div className="w-[fit-content]">
                <Oval
                  height={40}
                  width={40}
                  color="#53c28b"
                  wrapperStyle={{}}
                  wrapperclassName=""
                  visible={true}
                  ariaLabel="oval-loading"
                  secondaryColor="white"
                  strokeWidth={2}
                  strokeWidthSecondary={2}
                />
              </div>
            ) : (
              <button
                type="submit"
                className={styles.submitBtn}
                onClick={handleSubmit}
              >
                Submit
              </button>
            )}

          </form>
        </div>
        {isSubmitted && (
          <p className="text-white bg-[#53c28b] py-[10px] px-[20px] rounded my-[20px] text-sm md:text-base">
            We appreciate you contacting us. One of our colleagues will
            get back in touch with you soon! Have a great day!
          </p>
        )}
      </div>
    </div>

  );
}

// <Button
//    onSubmit={handleSubmit}
//   url="#"
//   text="Send"
//   className={styles.submitBtn}
// />
