import { items } from "../data";
import { notFound } from "next/navigation";
import styles from "./page.module.css";
import Image from "next/image";
import ServiceForm from "@/app/serviceForm/ServiceForm";

const getData = (params) => {
  const data = items[params.category];
  
  // if (data) {
  //   for (let i = 0; i < data.length; i++) {
  //     if (data[i].slug && data[i].slug == params.subCategory) {
  //       console.log(data[i].slug + "===" + params.subCategory);
  //       return data[i];
       
  //     } else {
  //       return notFound();
  //     }
  //   }
  // } else {
  //   return notFound();
  // }

  if (data) {
    for (let i = 0; i < data.length; i++) {
      if (data[i].slug && data[i].slug == params.subCategory) {
        console.log(data[i].slug + "===" + params.subCategory);
        return data[i];
      }
    }
    // If no matching element is found in the loop, return notFound()
    return notFound();
  } else {
    return notFound();
  }
};
const SubCategory = ({ params }) => {
  const data = getData(params);
  // console.log("params", data.title);
  return (
    <>
      <h1 className={styles.catTitle}>{data.title}</h1>
      <p className={styles.desc}>{data.content.about}</p>
      <div className={styles.imgContainer}>
        <Image className={styles.img} fill={true} src={data.image} alt="" />
      </div>
      <div className={styles.content}></div>
      <section className={styles.pointerSection}>
        <>
          <ul className={styles.pointerListContainer}>
            {data.content.features.map((feature, index) => {
              return (
                <li className={styles.pointerListItem} key={index}>
                  <div className={styles.title}>
                    <div className={styles.indexWrapper}>
                      {(index + 1).toString().padStart(2, `0`)}
                    </div>
                    {feature.title}
                  </div>
                  <p className={styles.subTitle}>{feature.desc}</p>
                </li>
              );
            })}
          </ul>
        </>
      </section>
      <ServiceForm />
    </>
  );
};

export default SubCategory;
