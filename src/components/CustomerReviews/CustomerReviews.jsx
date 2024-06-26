import React from "react";
import { reviews } from "../../constants";
import ReviewCard from "../ReviewCard/ReviewCard";

const CustomerReviews = () => {
  return (
    <section className="max-container">
      <h3 className="heading">
        What Our
        <span className="text-coral-red "> Customers </span>
        Say?
      </h3>
      <p className="info-text m-auto mt-4 max-w-lg text-center">
        Hear genuine stories from our satisfied customers about their exceptional experience with us.
      </p>
      <div className="mt-24 flex flex-1 justify-evenly items-center max-lg:flex-col gap-14">
        {reviews.map((review,index)=>(
          <ReviewCard key={index} {...review}/>
        ))}
      </div>
    </section>
  );
};

export default CustomerReviews;
