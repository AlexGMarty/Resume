import styles from "./experience.module.scss";
import translations from "../../translations/en";

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
    </div>
  );
}
