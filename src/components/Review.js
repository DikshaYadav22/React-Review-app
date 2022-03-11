import React, { memo } from "react";
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button,
} from "reactstrap";

const Review = memo(({ reviews }) => {
  return (
    <div>
      {reviews.map((review) => {
        const { id, image, job, name, text } = review;
        return (
          <>
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
                <Button color="btn btn-outline-primary">Surprise Me</Button>
              </CardBody>
            </Card>
          </>
        );
      })}
    </div>
  );
});

export default Review;
