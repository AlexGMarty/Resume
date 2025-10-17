import styles from "./experience.module.scss";
import translations from "../../translations/en";
import Project from "./project/project";

export default function Experience() {
  return (
    <div className={styles.experience}>
      <div className={styles.oloContainer}>
        <div className={styles.olo}>{translations.body.olo}</div>
        <div className={styles.date}>{translations.body.oloDates}</div>
      </div>

      <div className={styles.positions}>
        <div className={styles.position}>{translations.body.SE2}</div>
        <div className={styles.date}>{translations.body.SE2Dates}</div>
        <div className={styles.position}>{translations.body.SE1}</div>
        <div className={styles.date}>{translations.body.SE1Dates}</div>
        <div className={styles.position}>{translations.body.SEIntern}</div>
        <div className={styles.date}>{translations.body.SEInternDates}</div>
      </div>

      <div className={styles.oloSummary}>
        Core contributor to <strong>Serve</strong>, Olo’s flagship online
        ordering platform used by over <strong>600 restaurant brands</strong>{" "}
        and <strong>23,000 individual restaurants</strong> to manage over{" "}
        <strong>200,000 daily orders</strong> and{" "}
        <strong>85 million unique annual users</strong>.
      </div>

      <div className={styles.keyProjects}>{translations.body.keyProjects}</div>

      <div className={styles.projects}>
        <Project
          title="Legacy Platform Modernization"
          bullets={[
            "Key driver of front-end rewrite of Serve, migrating it from a legacy Ember framework to React",
            "Actively contributed to design and functionality improvements to enhance user experience",
            "Launch of React Menu page led to a <strong>full 1% conversion rate increase</strong> across all of Serve and <strong>70% faster load times</strong>",
          ]}
        />

        <Project
          title="Voice AI Ordering for Drive-Thru"
          bullets={[
            "Developed and delivered a working Voice AI Ordering product valued at <strong>$100M+ ARR</strong>",
            "Key features included real-time Point of Sale (POS) and hardware integrations, NLP-driven upsells, and live order confirmation display",
            "Front-end application displays live order data on drive-thru menu board while back-end leverages Chat GPT 4o integration for full order taking process, including menu parsing, modifier handling, order escalation, and edge case management",
          ]}
        />

        <Project
          title="Pay-at-Table QR Code Payment"
          bullets={[
            "Developed and delivered a new payment system to allow guests to pay by scanning a QR code on the check or at the table, including API integration to in-restaurant POS equipment",
            "Split check functionality allows multiple guests to split the check by specific amount, selected items, or number of guests",
            "Direct survey integration allows restaurant brands to gather guest feedback and promote loyalty programs",
            "Project immediately led to 10 new account deals totaling <strong>over 600 new locations</strong> and <strong>$1M+ ARR</strong>",
          ]}
        />
      </div>
    </div>
  );
}
