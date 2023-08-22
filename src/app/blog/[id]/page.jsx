import React from "react";
import styles from "./page.module.css";
import ReactMarkdown from "react-markdown";

import { notFound } from "next/navigation";

async function getData(id) {
  const res = await fetch(`http://localhost:3000/api/posts/${id}`, {
    cache: "no-store",
  });

  if (!res.ok) {
    return notFound();
  }
  const reponse = await res.json();
  return reponse.data;
}

export async function generateMetadata({ params }) {
  const post = await getData(params.id);
  return {
    title: post.title,
    description: post.desc,
  };
}

const BlogPost = async ({ params }) => {
  const data = await getData(params.id);
  const imageBuffer = Buffer.from(data.img);
  const base64String = imageBuffer.toString("base64");
  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <img
          src={`data:image/jpg;base64,${base64String}`}
          alt=""
          className={styles.image}
        />
        <div className={styles.info}>
          <h1 className={styles.title}>{data.title}</h1>
          <div className={styles.author}>
            <span className={styles.username}>By {data.username}</span>
          </div>
        </div>
      </div>
      <div className={styles.content}>
        <ReactMarkdown>{data.content}</ReactMarkdown>
      </div>
    </div>
  );
};

export default BlogPost;
