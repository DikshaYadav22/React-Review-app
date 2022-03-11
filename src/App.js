import Review from "./components/Review";

import React, { useState } from "react";

function App() {
  return (
    <div className="container mx-auto bg-dark text-white">
      <h2 className="text-center p-3">Our Reviews</h2>
      <Review />
    </div>
  );
}

export default App;
