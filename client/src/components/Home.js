import Card from "react-bootstrap/Card";
import salon from "../assets/salon.jpg";

function Home(props) {
  const cardStyle = {
    border: "none",
  };
  return (
    <Card id="home" className="text-center" style={cardStyle}>
      <Card.Body>
        <Card.Title className="homeTitle">
          Welcome to Your Salon Dashboard
        </Card.Title>
        <Card.Text className="homeText">
          “Without creativity, there would be no progress, and we would be
          forever repeating the same patterns.” —Edward de Bono
        </Card.Text>
        <div className="imageContainer">
          <img src={salon} width="1000px" alt="portfolio" />
        </div>
      </Card.Body>
    </Card>
  );
}

export default Home;
