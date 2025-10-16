import styles from "./body-section-header.module.scss";

type HeaderProps = {
  header: string;
};

export default function BodySectionHeader({ header }: HeaderProps) {
  return <div className={styles.header}>{header}</div>;
}
