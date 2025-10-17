import styles from "./skills.module.scss";
import translations from "../../translations/en";

export default function Skills() {
  const skillsEntries = Object.values(translations.skills);

  return (
    <ul className={styles.list}>
      {skillsEntries.map((entry, index) => (
        <li
          key={index}
          className={styles.item}
          dangerouslySetInnerHTML={{ __html: entry }}
        />
      ))}
    </ul>
  );
}
