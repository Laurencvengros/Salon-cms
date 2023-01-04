import Card from "react-bootstrap/Card";
import salon from "../assets/salon.jpg";

import { useQuery } from '@apollo/client';
import {GET_CLIENTS} from '../utils/queries'

function Home(props) {

  const {data} = useQuery(GET_CLIENTS);

  const userData = data?.me || []

  const cardStyle = {
    border: "none",
  };
  return (
    <Card id="home" className="text-center" style={cardStyle}>
      <Card.Body>
        <Card.Title className="homeTitle">
         Welcome,  {userData.name}!
        </Card.Title>
        <Card.Text className="homeText">
          “Without creativity, there would be no progress, and we would be
          forever repeating the same patterns.” —Edward de Bono
        </Card.Text>
        <div className="imageContainer">
          <img src={salon} width="1000px" alt="portfolio" class="img-fluid"/>
        </div>
      </Card.Body>
    </Card>
  );
}

export default Home;
