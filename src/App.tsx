import "./App.scss";
import ContactInfo from "./Components/contact-info/contact-info";
import MadeWithReact from "./Components/made-with-react/made-with-react";
import Summary from "./Components/summary/summary";
import Title from "./Components/title/title";
import translations from "./translations/en";

function App() {
  return (
    <div className="appRoot">
      <header className="header">
        <div className="top">
          <Title
            name={translations.header.name}
            title={translations.header.title}
          />
          <ContactInfo />
        </div>
        <MadeWithReact />
      </header>

      <main className="body">
        <Summary />
      </main>
    </div>
  );
}

export default App;
