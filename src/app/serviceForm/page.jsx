"use client"; // This is a client component 👈🏽
import axios from "axios";
import { useState } from "react";
import styles from "./page.module.css";
import Image from "next/image";
import Button from "@/components/Button/Button";

export default function FormPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
    dropdownValue: "", // Add a new state for the dropdown value
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setFormData((prevData) => ({ ...prevData, file }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("/api/submitForm", {
        name: formData.name,
        email: formData.email,
        subject: formData.subject,
        message: formData.message,
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
    <div className={styles.container}>
      <p>Your content will start here...</p>
      <h1 className={styles.title}>Service Form</h1>
      <form className={styles.form}>
        <div className={styles.content}>
          <form className={styles.form}>
            <input
              type="text"
              placeholder="name"
              className={styles.input}
              name="name"
              value={formData.name}
              onChange={handleChange}
            />
            <input
              type="text"
              placeholder="email"
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
              placeholder="subject"
              className={styles.input}
              name="subject"
              value={formData.subject}
              onChange={handleChange}
            />
            <textarea
              className={styles.textArea}
              placeholder="message"
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
      </form>
    </div>
  );
}

// <Button
//    onSubmit={handleSubmit}
//   url="#"
//   text="Send"
//   className={styles.submitBtn}
// />
