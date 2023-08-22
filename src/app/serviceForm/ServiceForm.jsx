"use client"; // This is a client component 👈🏽
import axios from "axios";
import { useState } from "react";
import styles from "./page.module.css";

export default function ServiceForm() {
  const [formData, setFormData] = useState({
    userName: "",
    email: "",
    subject: "",
    message: "",
    dropdownValue: "", // Add a new state for the dropdown value
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    // console.log(name, value);
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    // console.log("file", file);
    setFormData((prevData) => ({ ...prevData, file }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const form = new FormData();
      form.append("name", formData.userName);
      form.append("email", formData.email);
      form.append("subject", formData.subject);
      form.append("message", formData.message);
      form.append("file", formData.file, "hi.pptx");
      await axios.post("/api/submitForm", form, {
        headers: { "content-type": "multipart/form-data" },
      });
      console.log("data sent successfully");
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
    } catch (error) {
      console.error(error);
    }
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
              value={formData.name}
              onChange={handleChange}
            />
            <input
              type="text"
              placeholder="Email"
              className={styles.input}
              name="email"
              value={formData.email}
              onChange={handleChange}
            />
            <select
              className={styles.input}
              name="dropdownValue"
              value={formData.dropdownValue}
              onChange={handleChange}
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
              value={formData.subject}
              onChange={handleChange}
            />
            <textarea
              className={styles.textArea}
              placeholder="Message"
              cols="30"
              rows="10"
              name="message"
              value={formData.message}
              onChange={handleChange}
            ></textarea>
            <div className={styles.formGroup}>
              <label htmlFor="file">Upload File </label>
              <input
                type="file"
                id="file"
                name="file"
                onChange={handleFileChange}
              />
            </div>
            <button
              type="submit"
              className={styles.submitBtn}
              onClick={handleSubmit}
            >
              Submit
            </button>
          </form>
        </div>
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
