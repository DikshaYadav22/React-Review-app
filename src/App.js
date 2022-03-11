import Review from "./components/Review";
import data from "./components/data";
import React, { useState } from "react";

function App() {
  const [reviews, setReviews] = useState(data);
  console.log(reviews);

  return (
    <div className="container mx-auto bg-dark text-white">
      <h2 className="text-center p-3">Our Reviews</h2>
      <Review reviews={reviews} />
    </div>
  );
}

export default App;
