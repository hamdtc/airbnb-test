
import './App.css';
import Navbar from './componets/Navbar';
import Hero from "./componets/Hero";
import Card from "./componets/Card";
import cardData from "./data/Data";

function App() {
  const cardElements = cardData.map((data) => {
    return <Card key={data.id} item={data} />;
  });
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <section className="cards-list">{cardElements}</section>

      <div> this is app</div>
    </div>
  );
}

export default App;
