import styles from "./made-with-react.module.scss";
import translations from "../../translations/en";

export default function MadeWithReact() {
  return (
    <div className={styles.react}>
      {translations.body.react}
      <a
        href="https://github.com/AlexGMarty/Resume"
        className={styles.seeTheCode}
        target="_blank"
        rel="noopener noreferrer"
      >
        {translations.body.seeTheCode}
      </a>
    </div>
  );
}
