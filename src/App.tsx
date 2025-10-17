import styles from "./App.module.scss";
import BodySectionHeader from "./Components/body-section-header/body-section-header";
import ContactInfo from "./Components/contact-info/contact-info";
import Education from "./Components/education/education";
import Experience from "./Components/experience/experience";
import MadeWithReact from "./Components/made-with-react/made-with-react";
import Skills from "./Components/skills/skills";
import Summary from "./Components/summary/summary";
import Title from "./Components/title/title";
import translations from "./translations/en";

function App() {
  return (
    <div className={styles.appRoot}>
      <header className={styles.header}>
        <div className={styles.top}>
          <Title
            name={translations.header.name}
            title={translations.header.title}
          />
          <ContactInfo />
        </div>
        <MadeWithReact />
      </header>

      <main className={styles.body}>
        <Summary />
        <BodySectionHeader header={translations.body.experience} />
        <Experience />
        <BodySectionHeader header={translations.body.education} />
        <Education />
        <BodySectionHeader header={translations.body.skills} />
        <Skills />
      </main>
    </div>
  );
}

export default App;
