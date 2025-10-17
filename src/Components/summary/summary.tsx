import styles from "./summary.module.scss";
import translations from "../../translations/en";

export default function Summary() {
  return <div className={styles.summary}>{translations.body.summary}</div>;
}
