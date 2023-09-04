import React from "react";
import styles from "./page.module.css";
import BlogCard from "./Card/Card";

async function getData() {
  try {
    const res = await fetch(`http://localhost:3000/api/posts`, {
      cache: "no-store",
    });

    if (!res.ok) {
    }
    const reponse = await res.json();
    return reponse.blogs;
  } catch (error) {
    console.log("err", error);
  }
}

const Blog = async () => {
  const data = await getData();
  return (
    <div className={styles.mainContainer}>
      <div className={styles.cardContainer}>
        {data.map((item,i) => {
          return (
            <>
              <BlogCard
                slug={item.slug}
                image={item.img}
                title={item.title}
                desc={item.desc}
                key={i}
              />
            </>
          );
        })}
      </div>
    </div>
  );
};

export default Blog;
