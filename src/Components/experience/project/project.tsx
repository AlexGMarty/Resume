import styles from "./project.module.scss";

type HeaderProps = {
  title: string;
  bullets: string[];
};

export default function Project({ title, bullets }: HeaderProps) {
  return (
    <>
      <div className={styles.title}>{title}</div>
      <ul className={styles.bullets}>
        {bullets.map((bullet, index) => (
          <li
            key={index}
            className={styles.bullet}
            dangerouslySetInnerHTML={{ __html: bullet }}
          />
        ))}
      </ul>
    </>
  );
}
