import React from "react";
import { Card, CardGroup } from "react-bootstrap";
import "./RidersPhoto.css";
const RidersPhoto = () => {
  return (
    <div id="places">
      <div className="container hr my-5">
        <hr />
      </div>
      <h1 className="title my-5">
        <u>Best Touring Places in India</u>
      </h1>
      <div className="container">
        <CardGroup>
          <Card className="m-3 shadow">
            <Card.Img variant="top" src="https://i.ibb.co/QDkZfsY/goa.jpg" />
            <Card.Body>
              <Card.Title>Goa</Card.Title>
            </Card.Body>
            <Card.Footer>
              <a
                className="cart-button"
                href="https://www.google.com/maps/place/Goa/@15.347038,73.7321162,10z/data=!3m1!4b1!4m5!3m4!1s0x3bbfba106336b741:0xeaf887ff62f34092!8m2!3d15.2993265!4d74.123996"
                target="_blank"
              >
                View Place
              </a>
            </Card.Footer>
          </Card>
          <Card className="m-3 shadow">
            <Card.Img variant="top" src="https://i.ibb.co/z8HjhKX/ladakh.jpg" />
            <Card.Body>
              <Card.Title>Ladakh</Card.Title>
            </Card.Body>
            <Card.Footer>
              <a
                className="cart-button"
                href="https://www.google.com/maps/place/Ladakh/@33.9041885,75.0626452,7z/data=!4m5!3m4!1s0x38fd86bce37d7139:0xc6c2990fdad28ac7!8m2!3d34.2268475!4d77.5619419"
                target="_blank"
              >
                View Place
              </a>
            </Card.Footer>
          </Card>
          <Card className="m-3 shadow">
            <Card.Img
              variant="top"
              src="https://i.ibb.co/nQDf2LB/Spiti-Valley.jpg"
            />
            <Card.Body>
              <Card.Title>Spiti</Card.Title>
            </Card.Body>
            <Card.Footer>
              <a
                className="cart-button"
                href="https://www.google.com/maps/place/Spiti+valley/@32.2472234,78.03646,17z/data=!3m1!4b1!4m5!3m4!1s0x3906a5509f9adf5f:0x9fa98ef218665330!8m2!3d32.2472234!4d78.0386487"
                target="_blank"
              >
                View Place
              </a>
            </Card.Footer>
          </Card>
        </CardGroup>
        <CardGroup>
          <Card className="m-3 shadow">
            <Card.Img
              variant="top"
              src="https://i.ibb.co/wB2t1fb/jaisalmer.png"
            />
            <Card.Body>
              <Card.Title>Jaisalmer</Card.Title>
            </Card.Body>
            <Card.Footer>
              <a
                className="cart-button"
                href="https://www.google.com/maps/place/Jaisalmer,+Rajasthan+345001/@26.9035745,70.8597107,13z/data=!3m1!4b1!4m5!3m4!1s0x3947bc28aa1b396b:0xf5ef9bd660d66ee3!8m2!3d26.9157487!4d70.9083443"
                target="_blank"
              >
                View Place
              </a>
            </Card.Footer>
          </Card>
          <Card className="m-3 shadow">
            <Card.Img
              variant="top"
              src="https://i.ibb.co/mFP0mfH/darjeeling.jpg"
            />
            <Card.Body>
              <Card.Title>Darjeeling</Card.Title>
            </Card.Body>
            <Card.Footer>
              <a
                className="cart-button"
                href="https://www.google.com/maps/place/Darjeeling,+West+Bengal/@27.0331906,88.2296556,13z/data=!3m1!4b1!4m5!3m4!1s0x39e42e654cf501bb:0x4175555979d4702a!8m2!3d27.0410218!4d88.2662745"
                target="_blank"
              >
                View Place
              </a>
            </Card.Footer>
          </Card>
          <Card className="m-3 shadow">
            <Card.Img variant="top" src="https://i.ibb.co/d5ZP3hB/gantok.png" />
            <Card.Body>
              <Card.Title>Gangtok</Card.Title>
            </Card.Body>
            <Card.Footer>
              <a
                className="cart-button"
                href="https://www.google.com/maps/place/Gangtok,+Sikkim/@27.3401313,88.5854556,13z/data=!3m1!4b1!4m5!3m4!1s0x39e6a56a5805eafb:0x73d6132c501c8f20!8m2!3d27.3313512!4d88.6138113"
                target="_blank"
              >
                View Place
              </a>
            </Card.Footer>
          </Card>
        </CardGroup>
      </div>
    </div>
  );
};

export default RidersPhoto;
