import styles from "./education.module.scss";
import translations from "../../translations/en";

export default function Education() {
  const educationEntries = Object.values(translations.education);

  return (
    <ul className={styles.list}>
      {educationEntries.map((entry, index) => (
        <li
          key={index}
          className={styles.item}
          dangerouslySetInnerHTML={{ __html: entry }}
        />
      ))}
    </ul>
  );
}
