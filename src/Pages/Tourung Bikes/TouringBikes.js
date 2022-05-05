import React from "react";
import { Card, CardGroup } from "react-bootstrap";
import "./TouringBikes.css";
const TouringBikes = () => {
  return (
    <div>
      <div className="hr container mt-5 mb-5">
        <hr />
      </div>
      <h1>
        <u className="title">Best Touring Bikes</u>
      </h1>
      <div className="container mt-5">
        <CardGroup>
          <Card className="m-3 shadow">
            <Card.Img variant="top" src="https://i.ibb.co/d7KCCTs/b3.webp" />
            <Card.Body>
              <Card.Title>Royal Enfield Scram 411</Card.Title>
            </Card.Body>
            <Card.Footer>
              <a
                className="cart-button"
                href="https://www.zigwheels.com/newbikes/Royal-Enfield/scram"
                target="_blank"
              >
                View Details
              </a>
            </Card.Footer>
          </Card>
          <Card className="m-3 shadow">
            <Card.Img variant="top" src="https://i.ibb.co/jTwPLT6/b4.webp" />
            <Card.Body>
              <Card.Title>BMW G 310 GS</Card.Title>
            </Card.Body>
            <Card.Footer>
              <a
                className="cart-button"
                href="https://www.zigwheels.com/newbikes/BMW/g-310-gs"
                target="_blank"
              >
                View Details
              </a>
            </Card.Footer>
          </Card>
          <Card className="m-3 shadow">
            <Card.Img variant="top" src="https://i.ibb.co/f4M9sjW/b5.webp" />
            <Card.Body>
              <Card.Title>BMW R 1250 GS</Card.Title>
            </Card.Body>
            <Card.Footer>
              <a
                className="cart-button"
                href="https://www.zigwheels.com/newbikes/BMW/r-1250-gs"
                target="_blank"
              >
                View Details
              </a>
            </Card.Footer>
          </Card>
        </CardGroup>
        <CardGroup>
          <Card className="m-3 shadow">
            <Card.Img variant="top" src="https://i.ibb.co/vBc40P4/b6.webp" />
            <Card.Body>
              <Card.Title>KTM 390 Adventure</Card.Title>
            </Card.Body>
            <Card.Footer>
              <a
                className="cart-button"
                href="https://www.zigwheels.com/newbikes/KTM/390-adventure"
                target="_blank"
              >
                View Details
              </a>
            </Card.Footer>
          </Card>
          <Card className="m-3 shadow">
            <Card.Img variant="top" src="https://i.ibb.co/gVtqdHg/b7.webp" />
            <Card.Body>
              <Card.Title>Suzuki V-Strom SX</Card.Title>
            </Card.Body>
            <Card.Footer>
              <a
                className="cart-button"
                href="https://www.zigwheels.com/newbikes/Suzuki/v-strom-250"
                target="_blank"
              >
                View Details
              </a>
            </Card.Footer>
          </Card>
          <Card className="m-3 shadow">
            <Card.Img variant="top" src="https://i.ibb.co/prNKwjd/b8.webp" />
            <Card.Body>
              <Card.Title>Honda CB200X</Card.Title>
            </Card.Body>
            <Card.Footer>
              <a
                className="cart-button"
                href="https://www.zigwheels.com/newbikes/Honda/cb200x"
                target="_blank"
              >
                View Details
              </a>
            </Card.Footer>
          </Card>
        </CardGroup>
        <CardGroup>
          <Card className="m-3 shadow">
            <Card.Img variant="top" src="https://i.ibb.co/SJCrB4t/b9.webp" />
            <Card.Body>
              <Card.Title>BMW R 1250 GS Adventure</Card.Title>
            </Card.Body>
            <Card.Footer>
              <a
                className="cart-button"
                href="https://www.zigwheels.com/newbikes/BMW/r-1250-gs-adventure"
                target="_blank"
              >
                View Details
              </a>
            </Card.Footer>
          </Card>
          <Card className="m-3 shadow">
            <Card.Img variant="top" src="https://i.ibb.co/TBTFx51/b10.webp" />
            <Card.Body>
              <Card.Title>Triumph Tiger Sport 660</Card.Title>
            </Card.Body>
            <Card.Footer>
              <a
                className="cart-button"
                href="https://www.zigwheels.com/newbikes/Triumph/tiger-sport-660"
                target="_blank"
              >
                View Details
              </a>
            </Card.Footer>
          </Card>
          <Card className="m-3 shadow">
            <Card.Img variant="top" src="https://i.ibb.co/kJHMm57/b2.webp" />
            <Card.Body>
              <Card.Title>Hero XPulse 200</Card.Title>
            </Card.Body>
            <Card.Footer>
              <a
                className="cart-button"
                href="https://www.zigwheels.com/newbikes/Hero-Moto-Corp/xpulse-200"
                target="_blank"
              >
                View Details
              </a>
            </Card.Footer>
          </Card>
        </CardGroup>
      </div>
    </div>
  );
};

export default TouringBikes;
