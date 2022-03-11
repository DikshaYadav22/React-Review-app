import React, { memo, useState } from "react";
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button,
} from "reactstrap";

import data from "./data";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";

const Review = memo(() => {
  const [index, setIndex] = useState(0);
  const [reviews, setReviews] = useState(data);
  const { id, image, job, name, text } = reviews[index];

  const checkNumber = (number) => {
    if (number > reviews.length - 1) {
      return 0;
    }

    if (number < 0) {
      return reviews.length - 1;
    }
    return number;
  };

  const prevPerson = () => {
    setIndex((index) => {
      let newIndex = index - 1;
      return checkNumber(newIndex);
    });
  };

  const nextPerson = () => {
    setIndex((index) => {
      let newIndex = index + 1;
      return checkNumber(newIndex);
    });
  };

  const randomNumber = (number) => {
    let randomNumber = Math.floor(Math.random() * reviews.length);
    if (randomNumber === index) {
      return index + 1;
    }

    setIndex(checkNumber(randomNumber));
  };

  return (
    <div>
      <Card className="text-black">
        <div
          style={{
            width: "30%",
            height: "300px",
            marginLeft: "360px",
          }}
        >
          <CardImg
            style={{ borderRadius: "50%" }}
            top
            width="100%"
            height="100%"
            src={image}
            alt="Card image cap"
          />
        </div>

        <CardBody className="text-center">
          <CardTitle>
            <h4 className="text-capitalize">{name}</h4>
          </CardTitle>
          <CardSubtitle className="text-primary font-weight-normal">
            {job}
          </CardSubtitle>
          <CardText>
            <p className="text-justify">{text}</p>
          </CardText>
          <div>
            <Button color="light" onClick={prevPerson}>
              <FontAwesomeIcon icon={faChevronLeft} />
            </Button>
            <Button color="light" onClick={nextPerson}>
              <FontAwesomeIcon icon={faChevronRight} />
            </Button>
          </div>

          <Button color="btn btn-outline-primary" onClick={randomNumber}>
            Surprise Me
          </Button>
        </CardBody>
      </Card>
    </div>
  );
});

export default Review;
