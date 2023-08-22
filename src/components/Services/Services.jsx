"use client";
import styles from "./Services.module.css";
import { servicesCardsData } from "@/content/services";
import ServiceCard from "./Card/Card";
import { Fragment, useState } from "react";

export default function Services() {
  const [hoverService, setHoverService] = useState(servicesCardsData[0]);
  return (
    <section>
      <div className={styles.servicesHeading}>
        <h2>    OUR TOP SERVICES</h2>
        <p>We Have Services Offer For You</p>
      </div>

      <div className={styles.cardGrid}>
        {servicesCardsData.map((service, index) => {
          if (index === 2) {
            return (
              <Fragment key={hoverService.title}>
                <div className={styles.serviceDescripton}>
                  <h1 className={styles.serviceDescriptonTitle}>
                    {hoverService.title}
                  </h1>
                  <h2 className={styles.serviceDescriptonContent}>
                    {hoverService.description}
                  </h2>
                </div>
                <ServiceCard
                  image={service.image}
                  altImage={service.altImage}
                  title={service.title}
                  description={service.description}
                  onHover={(data) => setHoverService(data)}
                />
              </Fragment>
            );
          }
          return (
            <ServiceCard
              key={index}
              image={service.image}
              altImage={service.altImage}
              title={service.title}
              description={service.description}
              onHover={(data) => setHoverService(data)}
            />
          );
        })}
      </div>
    </section>
  );
}
