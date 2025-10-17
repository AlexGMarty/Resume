import styles from "./title.module.scss";

type TitleProps = {
  name: string;
  title: string;
};

export default function Title({ name, title }: TitleProps) {
  return (
    <div className={styles.container}>
      <div className={styles.name}>{name}</div>
      <div className={styles.title}>{title}</div>
    </div>
  );
}
