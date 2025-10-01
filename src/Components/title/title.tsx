import "./title.scss";

type TitleProps = {
  name: string;
  title: string;
};

export default function Title({ name, title }: TitleProps) {
  return (
    <div className="title-container">
      <div className="name">{name}</div>
      <div className="title">{title}</div>
    </div>
  );
}
