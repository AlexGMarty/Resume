import "./made-with-react.scss";
import translations from "../../translations/en";

export default function MadeWithReact() {
  return (
    <div className="react">
      {translations.body.react}
      <a
        href="https://github.com/AlexGMarty/Resume"
        className="seeTheCode"
        target="_blank"
        rel="noopener noreferrer"
      >
        {translations.body.seeTheCode}
      </a>
    </div>
  );
}
