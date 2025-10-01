import "./App.scss";
import ContactInfo from "./Components/contact-info/contact-info";
import Title from "./Components/title/title";

function App() {
  return (
    <div className="root">
      <header className="header">
        <Title name="Alex Marty" title="Software Engineer" />
        <ContactInfo />
      </header>

      <main className="body">
        <div>Body body</div>
      </main>
    </div>
  );
}

export default App;
